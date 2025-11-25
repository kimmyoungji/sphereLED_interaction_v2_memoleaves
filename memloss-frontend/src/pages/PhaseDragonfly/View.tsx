// src/pages/PhaseDragonfly/View.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from '../../store/app';
import dragonflyVideo from '../../assets/PhaseDragonfly/dragonfly.mp4';
import { setDuck } from '../../audio/bgm';
import { Button } from '../../shared/ui/Button';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';
import { t } from '../../shared/i18n/strings';
import { VideoPreloader } from '../../shared/ui/VideoPreloader';
import finaleVideo from '../../assets/PhaseFinale/REAL FINAL_OUTRO_1123.mp4';

export default function PhaseDragonfly(){
  const send = useApp(s=>s.send);
  const [showCallout, setShowCallout] = useState(false);
  const [calloutContentIndex, setCalloutContentIndex] = useState(0);
  const [showGame, setShowGame] = useState(false);

  const defaultScore = 0;
  const defaultMaxScore = 12;
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [vel, setVel] = useState({ vx: 2, vy: 1.6 });
  const [score, setScore] = useState(defaultScore);
  const [running, setRunning] = useState(true);
  const size = useMemo(() => ({ w: 160, h: 160 }), []);
  const calloutContents = useMemo(() => [
    {
      ko: (<h3>{t('dragonfly','intro_title').split('\n').map((line, i) => (<span key={i}>{line}{i===0 && <br/>}</span>))}</h3>),
      en: (<p>{t('dragonfly','intro_desc').split('\n').map((line, i) => (<span key={i}>{line}{i !== t('dragonfly','intro_desc').split('\n').length-1 && <br/>}</span>))}</p>)
    },
    {
      ko: (<h3>{t('dragonfly','ending_title').split('\n').map((line, i) => (<span key={i}>{line}{i===0 && <br/>}</span>))}</h3>),
      en: (<p>{t('dragonfly','ending_desc').split('\n').map((line, i) => (<span key={i}>{line}{i !== t('dragonfly','ending_desc').split('\n').length-1 && <br/>}</span>))}</p>)    
    }
  ], []);

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

  // Removed time limit: no countdown timer.

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
    const el = containerRef.current;
    const cw = el ? el.clientWidth : window.innerWidth;
    const ch = el ? el.clientHeight : window.innerHeight;

    // pick one of 4 sides: 0:left, 1:right, 2:top, 3:bottom
    const side = Math.floor(Math.random() * 4);
    let nx = 0, ny = 0;

    switch (side) {
      case 0: // left (spawn just outside)
        nx = -size.w;
        ny = Math.random() * (ch - size.h);
        break;
      case 1: // right (spawn just outside)
        nx = cw;
        ny = Math.random() * (ch - size.h);
        break;
      case 2: // top (spawn just outside)
        nx = Math.random() * (cw - size.w);
        ny = -size.h;
        break;
      case 3: // bottom (spawn just outside)
        nx = Math.random() * (cw - size.w);
        ny = ch;
        break;
    }

    setPos({ x: nx, y: ny });

    // ensure velocity points inward toward screen center so it re-enters view
    const cx = cw / 2, cy = ch / 2;
    const dirX = cx - nx;
    const dirY = cy - ny;
    const len = Math.max(1e-3, Math.hypot(dirX, dirY));
    const s = (2 + Math.random() * 3) * 1.5; // reuse speed factor
    setVel({ vx: (dirX / len) * s, vy: (dirY / len) * s });

    if (newScore >= defaultMaxScore) {
      setCalloutContentIndex(1);
      setShowCallout(true);
    } else {
      send({ type: 'catchDragonfly', payload: { count: newScore } });
    }
    
  };

  const restart = () => {
    setScore(defaultScore);
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
      <PhaseCallout
        alignH="center"
        alignV="middle"
        visible={showCallout}
        fadeMs={1000}
        dimBackground={true}
        backdropOpacity={0.9}
        buttonLabel={
          calloutContentIndex === 0
            ? (<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>{t('dragonfly','start_button_main')}</p><p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>{t('dragonfly','start_button_sub')}</p></>)
            : (<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>{t('dragonfly','ending_button_main')}</p><p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>{t('dragonfly','ending_button_sub')}</p></>)
        }
        onAction={() => {
          if (calloutContentIndex === 0) {
            setShowCallout(false);
            setShowGame(true);
            restart();
          } else {
            console.log('endding');
            send({ type: 'catchDragonfly', payload: { count: defaultMaxScore } });
            setShowCallout(false);
          }
        }}
      >
        {calloutContents[calloutContentIndex].ko}
        {calloutContents[calloutContentIndex].en}
      </PhaseCallout>

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
            <span style={{ fontSize: 12, opacity: 0.85 }}>{t('dragonfly','hud_score_label')}</span>
            <strong style={{ fontSize: 16, lineHeight: 1 }}>{score}/{defaultMaxScore}</strong>
          </div>
        </div>
      </div>
      )}
      {showGame && (
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
          preload="auto"
          poster="/assets/PhaseDragonfly/dragonfly_poster.jpeg"
          onPlay={() => setDuck(0.25)}
          onPause={() => setDuck(1)}
          onEnded={() => setDuck(1)}
          style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
        />
      </div>
      )}
      {/* Preload next phase (Finale) video to reduce start latency */}
      <VideoPreloader src={finaleVideo} />
    </div>
  );
}
