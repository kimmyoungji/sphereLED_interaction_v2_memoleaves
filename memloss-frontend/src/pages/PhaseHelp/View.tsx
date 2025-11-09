// src/pages/PhaseHelp.tsx
import { useApp } from '../../store/app';
import { Button } from '../../shared/ui/Button';

export default function PhaseHelp(){
  const send = useApp(s=>s.send);
  return (
    <div className="p-6">
      <h1>제임스를 도와주시겠습니까?</h1>
      <Button onClick={()=>send({type:'consentYes'})}>YES</Button>
      <Button onClick={()=>send({type:'consentNo'})}>NO</Button>
    </div>
  );
}
