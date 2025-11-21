// src/pages/PhaseTimeline.tsx
import { useApp } from '../../store/app';
import { useMemo, useRef, useState } from 'react';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';
import './View.css';
export default function PhaseTimeline(){
  const send = useApp(s=>s.send);
  const [val, setVal] = useState(100);
  const lastSentRef = useRef<number>(1); // last t sent to server
  const STEP = 0.05; // send when moved by >=5%
  // Callout intro: show for a short time, then hide
  const [showCallout, setShowCallout] = useState(true);
  const [showTimeline, setShowTimeline] = useState(false);
  const [introPage, setIntroPage] = useState(0);
  const introPages = useMemo(() => [
    {
      ko: (
        <h3>정원의 먼지가 날아가<br/>제임스의 기억들이 선명해졌습니다.</h3>
      ),
      en: (
        <p>As the dust cleared, <br/> James’s memories became clear again.</p>
      )
    },
    {
      ko: (
        <h3>슬라이더를 움직여<br/>제임스의 기억을 들여다보세요.</h3>
      ),
      en: (
        <p>Move the slider <br/> to explore James’s memories.</p>
      )
    },
    {
      ko: (
        <h3>슬라이더를 왼쪽 끝까지 움직이면<br/>가장 소중한 기억으로 더 깊이 들어갑니다.</h3>
      ),
      en: (
        <p>Push the slider all the way left <br/> to dive into his dearest memory.</p>
      )
    }
  ], []);
  

  const images = useMemo(() => {
    const mods = import.meta.glob('../../assets/PhaseTimeline/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }) as Record<string, string>;
    return Object.entries(mods)
      .map(([k, v]) => ({ key: k, url: v }))
      .sort((a, b) => {
        const na = Number(a.key.match(/(\d+)/)?.[1] ?? Infinity);
        const nb = Number(b.key.match(/(\d+)/)?.[1] ?? Infinity);
        return na - nb;
      })
      .map(x => x.url);
  }, []);

  // Age-based captions mapped across the 0..1 timeline (Korean + English)
  const captions: { ko: string; en: string }[] = [
    { ko: '기억이 잘 나지 않지만, 많이 울었겠지', en: "I don't remember well, but I must have cried a lot" },
    { ko: '발로 땅을 내딛은 해', en: 'The year I first stepped on the ground' },
    { ko: '많이 울었고 많이 넘어졌다', en: 'I cried a lot and fell often' },
    { ko: '엄마! 집 마당에 뭐가 엄청 많이 날아다녀!', en: 'Mom! There’s something flying all over our yard!' },
    { ko: '우와! 잠자리다! 와 잠자리 날아다니는거 진짜 신기해!', en: 'Wow! A dragonfly! Look how it flies! That’s so amazing!' },
    { ko: '잠자리를 잡았어! 다시 놓아줄 땐 아쉬웠어..', en: 'I caught a dragonfly! Letting it go made me a little sad.' },
    
    { ko: '오늘은 학교에서 친구랑 싸웠다.', en: 'I fought with a friend at school today' },
    { ko: '좋아하는 여자애가 생겼어', en: 'I have a crush now' },
    { ko: '고백할까?', en: 'Should I confess?' },
    
    { ko: '친구랑 술을 너무 마셨네', en: 'I drank too much with friends' },
    { ko: '이제 무슨 일을 하지', en: 'What should I do with my life?' },
    { ko: '내일도 출근인가?', en: 'Do I have to go to work again tomorrow?' },
    { ko: '결혼하고 싶은 사람이 생겼어', en: 'I found someone I want to marry' },
    { ko: '오늘 집에 빨리 가야 돼. 딸 봐야 되거든.', en: 'I need to go home early today. I have to see my daughter.' },
    
    { ko: '이번 주말에 캠핑 갈거야. 준비할게 많아.', en: 'Going camping this weekend. Lots to prepare.' },
    { ko: '내일도 오늘 같았으면.', en: 'I wish tomorrow felt like today.' },
    { ko: '시간이 점점 빨리가. 벌써 불혹의 나이가 되었네.', en: 'Time passes so fast.' },
    // { ko: '불혹을 넘기고도 멀쩡했는데, 이젠 건강이 꺾이는구만. 하하.', en: 'I was fine past forty, but health is faltering now. Haha.' },
    { ko: '좀 울적하네. 중년의 위기인가?', en: 'Feeling a bit down. Midlife crisis?' },
    
    { ko: '일을 생각보다 빨리 그만두게 됐어.', en: 'I ended up leaving work earlier than expected.' },
    { ko: '오늘은 딸이 결혼했어.', en: 'My daughter got married today.' },
    { ko: '딸이 손자를 낳았어.', en: 'My daughter had a baby—my grandchild.' },
    { ko: '요즘 사람들이 날 찾질 않네.', en: 'People don’t seem to look for me these days.' },
    { ko: '아내가 이제 내 곁에 없네. 어떡하지?', en: "My wife isn’t by my side anymore. What do I do?" },
    { ko: '오늘 집에 오는 길이 잠깐 기억이 안 나더라고.', en: 'I briefly forgot the way home today.' },

    { ko: '나는…', en: 'I am…' },
    { ko: '오늘', en: 'Today' },
    { ko: '정원에서', en: 'In the garden' },
    { ko: '잠자리를', en: 'A dragonfly' },
    { ko: '잡고싶었어.', en: 'I wanted to catch it.' },
    { ko: '도와줄래?', en: 'Will you help me?' },
  ];

  const t = val / 100;
  const n = images.length;
  const x = n > 0 ? (n - 1) * t : 0;
  const i0 = Math.max(0, Math.min(n - 1, Math.floor(x)));
  const i1 = Math.max(0, Math.min(n - 1, i0 + 1));
  const alpha = Math.min(1, Math.max(0, x - Math.floor(x)));

  // Caption markers: specific slider positions where captions appear
  // const markers = useMemo(() => {
  //   const m = captions.length;
  //   if (m <= 1) return [0];
  //   return Array.from({ length: m }, (_, i) => i / (m - 1));
  // }, [captions.length]);

  // Caption markers: manually chosen positions (0..1), one per caption, sorted.
  const markers = useMemo(() => {
  const m: number[] = [
    0.10, 0.13, 0.16, 0.22, 0.24, 0.26, 
    0.29, 0.33, 0.37, 
    0.43, 0.46, 0.49, 0.52, 0.55, 
    0.57, 0.60, 0.63, 0.66, 
    0.69, 0.72, 0.75, 0.78, 0.81, 0.84, 
    0.86, 0.88, 0.91, 0.94, 0.97, 1.00
  ];
  return m;
}, []);

  // Find nearest marker to current t
  const { nearestIdx, nearestDist } = useMemo(() => {
    let idx = 0;
    let dist = Infinity;
    for (let i = 0; i < markers.length; i++) {
      const d = Math.abs(t - markers[i]);
      if (d < dist) { idx = i; dist = d; }
    }
    return { nearestIdx: idx, nearestDist: dist };
  }, [t, markers]);

  // Only show caption if within window of a marker (e.g., ±3% of slider)
  const CAPTION_WINDOW = 0.03;
  const showCaption = nearestDist <= CAPTION_WINDOW;
  const safeIdx = Math.max(0, Math.min(captions.length - 1, nearestIdx));
  const canShowCaption = showCaption && captions.length > 0;
  return (
    <div className="tl-fade-in" style={{ position:'relative', width:'100%', height:'100vh', padding:'24px', boxSizing:'border-box' }}>
      {/* PhaseCallout intro overlay (paginated) */}
      <PhaseCallout
        alignH="center"
        alignV="middle"
        visible={showCallout}
        fadeMs={1000}
        dimBackground={true}
        backdropOpacity={0.9}
        buttonLabel={
          introPage === 0
            ? (<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>기억을 들여다본다 </p><p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>look into memories</p></>)
            : (<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>계속진행하기 </p><p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>Tap to continue</p></>)
        }
        onAction={() => {
          if (introPage === 0) {
            setIntroPage(1);
          } else if (introPage >= introPages.length - 1) {
            setShowCallout(false);
            setShowTimeline(true);
          } else {
            setIntroPage(introPage + 1);
          }
        }}
      >
        {introPages[introPage].ko}
        {introPages[introPage].en}
      </PhaseCallout>
      
      <div style={{ position:'absolute', inset:24, display:'grid', placeItems:'center', background:'transparent', bottom:100}}>
        <div style={{ position:'relative', width:'100%', height:'100%' }}>
          {n>0 && (
            <>
              <img src={images[i0]} alt="frame"
                   style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'contain', opacity:1, pointerEvents:'none' }} />
              <img src={images[i1]} alt="frame"
                   style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'contain', opacity:alpha*0.9, pointerEvents:'none' }} />
            </>
          )}
          {/* caption overlay via PhaseCallout with dimmed full-screen background */}
          <PhaseCallout
            alignH="center"
            alignV="top"
            visible={canShowCaption && showTimeline}
            fadeMs={400}
            dimBackground={true}
            backdropOpacity={0.45}
          >
            <p style={{ textAlign:'center', marginTop: '0.6rem'}}>
              <span className="tl-cap-ko">{captions[safeIdx].ko}</span>
              <br/>
              <span className="tl-cap-en">{captions[safeIdx].en}</span>
            </p>
          </PhaseCallout>
        </div>
      </div>
      {/* Timeline slider */}
      { showTimeline && (
      <div className="p-6" style={{ position:'absolute', left:24, right:24, bottom:140, zIndex:10 }}>
        <input
          type="range"
          min={0}
          max={100}
          value={val}
          onChange={(e)=> {
            const v = Number(e.currentTarget.value);
            setVal(v);
            const tv = v / 100;
            if (Math.abs(tv - lastSentRef.current) >= STEP) {
              send({ type:'timelineSeek', payload:{ t: tv }});
              lastSentRef.current = tv;
            }
          }}
          onPointerUp={(e) => {
            const tv = Number((e.currentTarget as HTMLInputElement).value) / 100;
            send({ type:'timelineSeek', payload:{ t: tv }});
            lastSentRef.current = tv;
          }}
          className="tl-slider"
        />
      </div>
      
      )}
    </div>
  );
}
