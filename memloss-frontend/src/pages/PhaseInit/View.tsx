// src/pages/PhaseInit.tsx
import { useApp } from '../../store/app';
import { ensureStarted, setDuck } from '../../audio/bgm';
import introBgVideo from '../../assets/PhaseInit/INTRO (1) _ Headphone_50 sec.mp4';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';
import { useRef } from 'react';
export default function PhaseInit(){
  const send = useApp(s=>s.send);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onClick = () => {
    ensureStarted();
    send({ type: 'start' });
  };
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }} className="p-0">
      <video
        src={introBgVideo}
        loop
        autoPlay
        playsInline
        ref={videoRef}
        onPlay={() => setDuck(0)}
        onPause={() => setDuck(1)}
        onEnded={() => setDuck(1)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <PhaseCallout videoRef={videoRef} showAtSec={1} align="center" buttonLabel="Tap to start" onAction={onClick}>
        <h3>헤드셋이나 이어폰 착용시, <br/> 더 입체적인 관람이 가능합니다.</h3>
        <p>Wear a headset or earphone <br/> for a more immersive experience.</p>
      </PhaseCallout>
    </div>
  );
}
