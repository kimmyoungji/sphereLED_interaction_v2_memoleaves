// src/pages/PhaseDragonfly.tsx
import { useApp } from '../../store/app';

export default function PhaseDragonfly(){
  const send = useApp(s=>s.send);
  const onTap = (e:React.MouseEvent<HTMLDivElement>)=>{
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0..1
    const y = (e.clientY - rect.top)  / rect.height;  // 0..1
    send({ type:'catch', payload:{ x, y }});
  };
  return (
    <div className="p-6">
      <h2>잠자리를 잡아보세요</h2>
      <div className="h-72 border rounded" onClick={onTap}>
        (이 영역을 탭/클릭)
      </div>
    </div>
  );
}
