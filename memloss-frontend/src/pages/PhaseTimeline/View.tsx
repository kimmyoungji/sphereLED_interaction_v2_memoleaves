// src/pages/PhaseTimeline.tsx
import { useApp } from '../../store/app';
import { useMemo, useRef, useState } from 'react';
export default function PhaseTimeline(){
  const send = useApp(s=>s.send);
  const [val, setVal] = useState(100);
  const lastSentRef = useRef<number>(1); // last t sent to server
  const STEP = 0.05; // send when moved by >=5%

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

  const t = val / 100;
  const n = images.length;
  const x = n > 0 ? (n - 1) * t : 0;
  const i0 = Math.max(0, Math.min(n - 1, Math.floor(x)));
  const i1 = Math.max(0, Math.min(n - 1, i0 + 1));
  const alpha = Math.min(1, Math.max(0, x - Math.floor(x)));
  return (
    <div style={{ position:'relative', width:'100%', height:'100vh', padding:'24px', boxSizing:'border-box' }}>
      <div style={{ position:'absolute', inset:24, display:'grid', placeItems:'center', background:'transparent' }}>
        <div style={{ position:'relative', width:'100%', height:'100%' }}>
          {n>0 && (
            <>
              <img src={images[i0]} alt="frame"
                   style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'contain', opacity:1, pointerEvents:'none' }} />
              <img src={images[i1]} alt="frame"
                   style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'contain', opacity:alpha*0.9, pointerEvents:'none' }} />
            </>
          )}
        </div>
      </div>
      <div className="p-6" style={{ position:'absolute', left:24, right:24, bottom:96, zIndex:10 }}>
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
          style={{ width:'100%' }}
        />
      </div>
    </div>
  );
}
