// src/pages/PhaseFinale.tsx
import { useApp } from '../../store/app';
import outroVideoWithText from '../../assets/PhaseFinale/REAL FINAL_OUTRO_1123.mp4';
import { setDuck } from '../../audio/bgm';
import { useRef, useState } from 'react';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';
import { t } from '../../shared/i18n/strings';
import { VideoPreloader } from '../../shared/ui/VideoPreloader';
import initVideo from '../../assets/PhaseInit/INTRO (1) _ Headphone_50 sec.mp4';

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
        preload="auto"
        poster="/assets/PhaseFinale/finale_poster.jpeg"
        onPlay={() => { setDuck(0); setVideoVisible(true); }}
        onPause={() => setDuck(0)}
        onEnded={() => setDuck(0)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: videoVisible ? 1 : 0, transition: 'opacity 1200ms cubic-bezier(.22,.61,.36,1)', willChange: 'opacity' }}
      />
      <PhaseCallout 
        videoRef={videoRef} 
        showAtSec={50} 
        buttonLabel={t('finale','restart_cta')} 
        onAction={()=>send({type:'init'})}>
          <div>
        [ Thanks to ]
        <br/>
        <p>정효정 교수님 <br/>이지용 교수님 <br/>이혜원 대표님 <br/>남기륭 교수님</p>    
        <br/>
        
        [ Made by ]
        <br/>
        <p>이예준 <br/>윤미지 <br/>김명지</p>
        <br/>

        본 작품은 성남문화재단과 바이오헬스COSS,차세대디스플레이COSS,글로벌K-컬처HUSS, 사회구조HUSS사업단의 지원으로 이루어진 2025 ArtTech for LIF E 해커톤의 성과물입니다.
      </div>
          <h2>{t('finale','thank_you')}</h2>
      </PhaseCallout>
      
      
      {/* Preload init phase video so restart is instant */}
      <VideoPreloader src={initVideo} />
    </div>
    );
  }