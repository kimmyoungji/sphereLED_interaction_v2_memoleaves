// src/pages/PhaseFinale.tsx
import { useApp } from '../../store/app';
import outroVideoWithText from '../../assets/PhaseFinale/OUTRO_Text(O).mp4';
import { setDuck } from '../../audio/bgm';
import { Button } from '../../shared/ui/Button';

export default function PhaseFinale(){
    const send = useApp(s=>s.send);
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }} className="p-0">
      <video
        src={outroVideoWithText}
        autoPlay
        playsInline
        onPlay={() => setDuck(0)}
        onPause={() => setDuck(1)}
        onEnded={() => setDuck(1)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 24 }}>
        <p>당신은 오늘 어떤 단순한 기쁨을 쫓고 있나요?</p>
        <Button onClick={() => send({ type: 'init' })}>다시하기</Button>
      </div>
    </div>
    );
  }