// src/pages/PhaseFinale.tsx
import { useApp } from '../../store/app';
export default function PhaseFinale(){
    const send = useApp(s=>s.send);
    return (
      <div className="p-6 grid gap-3">
        <h2>고맙습니다</h2>
        <p>당신은 오늘 어떤 단순한 기쁨을 쫓고 있나요?</p>
        <button onClick={() => send({ type: 'init' })}>다시하기</button>
      </div>
    );
  }