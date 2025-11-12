// src/pages/PhaseInit.tsx
import { useApp } from '../../store/app';
import { ensureStarted, setDuck } from '../../audio/bgm';
import { Button } from '../../shared/ui/Button';
import introBgVideo from '../../assets/PhaseInit/INTRO (1) _ Headphone_50 sec.mp4';
export default function PhaseInit(){
  const send = useApp(s=>s.send);
  const onClick = () => {
    ensureStarted();
    send({ type: 'start' });
  };
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }} className="p-0">
      <video
        src={introBgVideo}
        autoPlay
        playsInline
        onPlay={() => setDuck(0)}
        onPause={() => setDuck(1)}
        onEnded={() => setDuck(1)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 24 }}>
        <h1>헤드셋을 착용하시면 몰입감이 올라갑니다. 체험을 시작하시겠습니까?</h1>
        <Button onClick={onClick}>YES</Button>
      </div>
    </div>
  );
}
