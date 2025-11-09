// src/pages/PhaseInit.tsx
import { useApp } from '../../store/app';
import { Button } from '../../shared/ui/Button';
export default function PhaseInit(){
  const send = useApp(s=>s.send);
  return (
    <div className="p-6">
      <h1>헤드셋을 착용하시면 몰입감이 올라갑니다. 체험을 시작하시겠습니까?</h1>
      <Button onClick={() => send({ type: 'start' })}>YES</Button>
    </div>
  );
}
