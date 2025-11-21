// src/pages/PhaseDragonfly/View.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from '../../store/app';
import dragonflyVideo from '../../assets/PhaseDragonfly/dragonfly.mp4';
import { setDuck } from '../../audio/bgm';
import { Button } from '../../shared/ui/Button';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';

export default function PhaseDragonfly(){
  const send = useApp(s=>s.send);
  const [showCallout, setShowCallout] = useState(false);
  const [showEnddingCallout, setShowEnddingCallout] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const defaultTime = 40;
  const defaultScore = 11;
  const defaultMaxScore = 12;
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [vel, setVel] = useState({ vx: 2, vy: 1.6 });
  const [score, setScore] = useState(defaultScore);
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [running, setRunning] = useState(true);
  const size = useMemo(() => ({ w: 160, h: 160 }), []);

  useEffect(() => {
    setShowCallout(true);
  }, []);

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
    }, 12);
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

    if (newScore >= defaultMaxScore) {
      setShowEnddingCallout(true);
    } else {
      send({ type: 'catchDragonfly', payload: { count: newScore } });
    }
    
  };

  const restart = () => {
    setScore(defaultScore);
    setTimeLeft(defaultTime);
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
      {!showEnddingCallout && <PhaseCallout
        alignH="center"
        alignV="middle"
        visible={showCallout}
        fadeMs={1000}
        dimBackground={true}
        backdropOpacity={0.9}
        buttonLabel={<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>잠자리를 잡으러 간다.</p><p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>go back to the start</p></>}
        onAction={() => { console.log('restart'); setShowCallout(false); setShowGame(true); restart();}}
      >
        <h3>어린 시설 기억을 떠올린 제임스가<br/>잠자리를 잡고 싶어합니다.</h3>
        <p>As James recalls his childhood, <br/> he wants to catch a dragonfly again.</p>
      </PhaseCallout>
      }

      {!showCallout && <PhaseCallout
        alignH="center"
        alignV="middle"
        visible={showEnddingCallout}
        fadeMs={1000}
        dimBackground={true}
        backdropOpacity={0.9}
        buttonLabel={<>
          <p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>계속진행하기.</p><p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>tap to continue</p>
        </>}
        onAction={() => { 
          console.log('endding');
          send({ type: 'catchDragonfly', payload: { count: defaultMaxScore } });
          setShowEnddingCallout(false);
        }}
      >
        <h3>잠시였지만, 당신과 잠자리를 잡는 그 순간 동안 <br/>제임스의 고통은 기쁨에 가려졌습니다.</h3>
        <p>For a brief moment, <br/> as he caught dragonflies with you, <br/>joy gently covered James’s pain.</p>
      </PhaseCallout>}

      {showGame && (
      <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 10 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 12px',
          background: 'rgba(0,0,0,0.35)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 12,
          boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
        }}>
          <div style={{ display: 'grid', gap: 2 }}>
            <span style={{ fontSize: 12, opacity: 0.85 }}>잠자리</span>
            <strong style={{ fontSize: 16, lineHeight: 1 }}>{score}</strong>
          </div>
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ display: 'grid', gap: 2 }}>
            <span style={{ fontSize: 12, opacity: 0.85 }}>남은 시간</span>
            <strong style={{ fontSize: 16, lineHeight: 1 }}>{timeLeft}s</strong>
          </div>
        </div>
      </div>
      )}
      {/* Centered restart button when game is not running */}
      {showGame && !running && (
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', zIndex: 15 }}>
          <Button onClick={restart}>다시 시작</Button>
        </div>
      )}
      {showGame && !showEnddingCallout && (
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
      )}
    </div>
  );
}
