// src/pages/PhaseHelp.tsx
import { useApp } from '../store/app';
export default function PhaseHelp(){
  const send = useApp(s=>s.send);
  return (
    <div className="p-6">
      <h1>제임스를 도와주시겠습니까?</h1>
      <button onClick={()=>send({type:'consentYes'})}>YES</button>
    </div>
  );
}
