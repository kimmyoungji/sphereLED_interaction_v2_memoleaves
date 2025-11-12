// src/pages/PhaseHelp/View.tsx
import { useApp } from '../../store/app';
import { setDuck } from '../../audio/bgm';
import { Button } from '../../shared/ui/Button';
import intro2Video from '../../assets/PhaseHelp/INTRO (2)_43sec.mp4';

export default function PhaseHelp(){
  const send = useApp(s=>s.send);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }} className="p-0">
      <video
        src={intro2Video}
        autoPlay
        playsInline
        onPlay={() => setDuck(0)}
        onPause={() => setDuck(1)}
        onEnded={() => setDuck(1)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 24 }}>
        <h1>제임스를 도와주시겠습니까?</h1>
        <Button onClick={()=>send({type:'consentYes'})}>YES</Button>
        <Button onClick={()=>send({type:'consentNo'})}>NO</Button>
      </div>
    </div>
  );
}
