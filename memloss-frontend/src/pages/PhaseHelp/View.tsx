// src/pages/PhaseHelp/View.tsx
import { useApp } from '../../store/app';
import { setDuck } from '../../audio/bgm';
import intro2Video from '../../assets/PhaseHelp/INTRO (2)_43sec.mp4';
import { useRef } from 'react';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';

export default function PhaseHelp(){
  const send = useApp(s=>s.send);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }} className="p-0">
      <video
        src={intro2Video}
        autoPlay
        playsInline
        ref={videoRef}
        onPlay={() => setDuck(0)}
        onPause={() => setDuck(1)}
        onEnded={() => setDuck(1)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <PhaseCallout 
        videoRef={videoRef} 
        showAtSec={40} 
        align="center" 
        buttonLabel="Yes" 
        onAction={()=>send({type:'consentYes'})}
        secondaryButtonLabel="No" 
        onSecondaryAction={()=>send({type:'consentNo'})}>
        <h3>제임스를 도와주시겠습니까?</h3>
        <p>would you like to help james?</p>
      </PhaseCallout>
    </div>
  );
}
