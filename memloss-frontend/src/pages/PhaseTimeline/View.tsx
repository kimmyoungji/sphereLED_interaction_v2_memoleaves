// src/pages/PhaseTimeline.tsx
import { useApp } from '../../store/app';
import { useState } from 'react';
export default function PhaseTimeline(){
  const send = useApp(s=>s.send);
  const [val, setVal] = useState(100); // 초기 값을 100으로 설정하여 t=1부터 시작
  return (
    <div className="p-6">
      <h2>기억 타임라인</h2>
      <input
        type="range"
        min={0}
        max={100}
        value={val}
        onChange={(e)=> setVal(Number(e.currentTarget.value))}
        onMouseUp={(e) => {
          const t = Number((e.currentTarget as HTMLInputElement).value) / 100;
          send({ type:'timelineSeek', payload:{ t }});
        }}
        onPointerUp={(e) => {
          const t = Number((e.currentTarget as HTMLInputElement).value) / 100;
          send({ type:'timelineSeek', payload:{ t }});
        }}
        style={{ width:'100%' }}
      />
    </div>
  );
}
