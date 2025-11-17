// src/pages/PhaseHelp/View.tsx
import { useApp } from '../../store/app';
import { setDuck } from '../../audio/bgm';
import intro2Video from '../../assets/PhaseHelp/INTRO_40sec.mp4';
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
        showAtSec={33} 
        align="center" 
        buttonLabel={<> <p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>같이 나간다 </p> <p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>follow him </p> </>} 
        onAction={()=>send({type:'consentYes'})}
        secondaryButtonLabel={<> <p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>머문다 </p> <p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>stay here </p> </>} 
        onSecondaryAction={()=>send({type:'consentNo'})}>
        <h3>제임스가 정원으로 걸어나가고 있습니다. <br/> 같이 나가시겠습니까?</h3>
        <p>james is walking to the garden. <br/> do you want to go with him?</p>
      </PhaseCallout>
    </div>
  );
}
