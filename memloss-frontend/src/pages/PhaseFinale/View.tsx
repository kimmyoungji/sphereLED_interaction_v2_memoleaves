// src/pages/PhaseFinale.tsx
import { useApp } from '../../store/app';
import outroVideoWithText from '../../assets/PhaseFinale/OUTRO_Text(O).mp4';
import { setDuck } from '../../audio/bgm';
import { useRef } from 'react';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';

export default function PhaseFinale(){
    const send = useApp(s=>s.send);
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }} className="p-0">
      <video
        src={outroVideoWithText}
        ref={videoRef}
        autoPlay
        playsInline
        onPlay={() => setDuck(0)}
        onPause={() => setDuck(0)}
        onEnded={() => setDuck(0)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <PhaseCallout 
        videoRef={videoRef} 
        showAtSec={95} 
        // visible={true}
        align="center" 
        buttonLabel="tap to restart" 
        onAction={()=>send({type:'init'})}>
        <h2>Thank you.</h2>
      </PhaseCallout>
    </div>
    );
  }