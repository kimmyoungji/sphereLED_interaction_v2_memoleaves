// src/pages/PhaseTimeline.tsx
import { useApp } from '../../store/app';
export default function PhaseTimeline(){
  const send = useApp(s=>s.send);
  return (
    <div className="p-6">
      <h2>기억 타임라인</h2>
      <input type="range" min={0} max={100} defaultValue={0}
        onChange={(e)=> {
          const t = Number(e.currentTarget.value)/100;
          send({ type:'timelineSeek', payload:{ t }});
        }} style={{ width:'100%' }}/>
    </div>
  );
}
