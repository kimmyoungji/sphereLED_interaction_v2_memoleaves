// src/pages/PhaseFinale.tsx
import { useApp } from '../../store/app';
import outroVideoWithText from '../../assets/PhaseFinale/OUTRO_67sec.mp4';
import { setDuck } from '../../audio/bgm';
import { useRef, useState } from 'react';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';

export default function PhaseFinale(){
    const send = useApp(s=>s.send);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoVisible, setVideoVisible] = useState(false);
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }} className="p-0">
      <video
        src={outroVideoWithText}
        ref={videoRef}
        autoPlay
        playsInline
        onPlay={() => { setDuck(0); setVideoVisible(true); }}
        onPause={() => setDuck(0)}
        onEnded={() => setDuck(0)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: videoVisible ? 1 : 0, transition: 'opacity 1200ms cubic-bezier(.22,.61,.36,1)', willChange: 'opacity' }}
      />
      <PhaseCallout 
        videoRef={videoRef} 
        showAtSec={45} 
        buttonLabel="tap to restart" 
        onAction={()=>send({type:'init'})}>
        <h2>Thank you.</h2>
      </PhaseCallout>
    </div>
    );
  }