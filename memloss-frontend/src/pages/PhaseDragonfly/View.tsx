// src/pages/PhaseDragonfly/View.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from '../../store/app';
import dragonflyVideo from '../../assets/PhaseDragonfly/dragonfly.mp4';
import { setDuck } from '../../audio/bgm';

export default function PhaseDragonfly(){
  const send = useApp(s=>s.send);

  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [vel, setVel] = useState({ vx: 2, vy: 1.6 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [running, setRunning] = useState(true);
  const size = useMemo(() => ({ w: 160, h: 160 }), []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setPos(p => {
        const el = containerRef.current;
        const cw = el ? el.clientWidth : window.innerWidth;
        const ch = el ? el.clientHeight : window.innerHeight;
        let nx = p.x + vel.vx;
        let ny = p.y + vel.vy;
        let nvx = vel.vx;
        let nvy = vel.vy;
        if (nx < -size.w || nx + size.w > cw + size.w) nvx = -nvx;
        if (ny < -size.h || ny + size.h > ch + size.h) nvy = -nvy;
        nx = Math.max(-size.w, Math.min(cw + size.w, nx));
        ny = Math.max(-size.h, Math.min(ch + size.h, ny));
        setVel({ vx: nvx, vy: nvy });
        return { x: nx, y: ny };
      });
    }, 16);
    return () => clearInterval(id);
  }, [running, vel.vx, vel.vy, size.w, size.h]);

  useEffect(() => {
    if (!running) return;
    if (timeLeft <= 0) {
      setRunning(false);
      return;
    }
    const tid = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(tid);
  }, [running, timeLeft]);

  const speedFactor = 1.5; // tweak here
  const randomizeVelocity = () => {
    const s = (2 + Math.random() * 3) * speedFactor;
    const angle = Math.random() * Math.PI * 2;
    setVel({ vx: Math.cos(angle) * s, vy: Math.sin(angle) * s });
  };

  const handleCatch = () => {
    if (!running) return;
    const newScore = score + 1;
    setScore(newScore);
    randomizeVelocity();
    const el = containerRef.current;
    const cw = el ? el.clientWidth : window.innerWidth;
    const ch = el ? el.clientHeight : window.innerHeight;
    
    // adjust velocity inward based on spawn side
    setVel(v => {
      let { vx, vy } = v;
      if (side === 0) vx = Math.abs(vx);        // from left -> right
      if (side === 1) vx = -Math.abs(vx);       // from right -> left
      if (side === 2) vy = Math.abs(vy);        // from top -> down
      if (side === 3) vy = -Math.abs(vy);       // from bottom -> up
      return { vx, vy };
    });

    // pick one of 4 sides: 0:left, 1:right, 2:top, 3:bottom
    const side = Math.floor(Math.random() * 4);
    let nx = 0, ny = 0;

    switch (side) {
      case 0: // left
        nx = -size.w;
        ny = Math.random() * (ch - size.h);
        break;
      case 1: // right
        nx = cw;
        ny = Math.random() * (ch - size.h);
        break;
      case 2: // top
        nx = Math.random() * (cw - size.w);
        ny = -size.h;
        break;
      case 3: // bottom
        nx = Math.random() * (cw - size.w);
        ny = ch;
        break;
    }

    setPos({ x: nx, y: ny });

    send({ type: 'catchDragonfly', payload: { count: newScore } });
  };

  const restart = () => {
    setScore(0);
    setTimeLeft(30);
    setRunning(true);
    setPos({ x: 100, y: 100 });
    randomizeVelocity();
  };

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}
      className="p-0"
    >
      <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 10, display: 'flex', gap: 12 }}>
        <div>점수: {score}</div>
        <div>남은 시간: {timeLeft}s</div>
        {!running && (
          <button onClick={restart} style={{ padding: '6px 10px', border: '1px solid #999', borderRadius: 6 }}>
            다시 시작
          </button>
        )}
      </div>
      <div
        onPointerDown={handleCatch}
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          width: size.w,
          height: size.h,
          transform: `scaleX(${vel.vx >= 0 ? 1 : -1})`,
          transformOrigin: '50% 50%',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        <video
          src={dragonflyVideo}
          autoPlay
          loop
          muted
          playsInline
          onPlay={() => setDuck(0.25)}
          onPause={() => setDuck(1)}
          onEnded={() => setDuck(1)}
          style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
}
