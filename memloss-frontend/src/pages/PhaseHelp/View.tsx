// src/pages/PhaseHelp/View.tsx
import { useApp } from '../../store/app';
import { setDuck } from '../../audio/bgm';
import intro2Video from '../../assets/PhaseHelp/INTRO_40sec.mp4';
import { useRef } from 'react';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';
import { t } from '../../shared/i18n/strings';

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
        buttonLabel={<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>{t('help','follow_main')}</p><p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>{t('help','follow_sub')}</p></>} 
        onAction={()=>send({type:'consentYes'})}
        secondaryButtonLabel={<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>{t('help','stay_main')}</p><p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>{t('help','stay_sub')}</p></>} 
        onSecondaryAction={()=>send({type:'consentNo'})}>
        <h3 style={{ whiteSpace: 'pre-line' }}>{t('help','callout_title')}</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{t('help','callout_desc')}</p>
      </PhaseCallout>
    </div>
  );
}
