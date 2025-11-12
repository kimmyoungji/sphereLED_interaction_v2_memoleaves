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
        onPause={() => setDuck(1)}
        onEnded={() => setDuck(1)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      {/* <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 24 }}>
        <p>당신은 오늘 어떤 단순한 기쁨을 쫓고 있나요?</p>
        <Button onClick={() => send({ type: 'init' })}>다시하기</Button>
      </div> */}
      <PhaseCallout 
        videoRef={videoRef} 
        showAtSec={41} 
        align="center" 
        buttonLabel="back to the beginning" 
        onAction={()=>send({type:'init'})}>
        <h3>제임스는 잠자리를 잡았습니다. <br/> 당신은 오늘 어떤 단순한 기쁨을 쫓고 있나요? <br/> 제임스와, 순간 속 기쁨을 찾는 모든 이들을 위해서. </h3>
        <p>James caught dragonflies today. <br/> What simple joy did you discover? <br/> For James, and for everyone who seeks simple joys in the moment.</p>
      </PhaseCallout>
    </div>
    );
  }