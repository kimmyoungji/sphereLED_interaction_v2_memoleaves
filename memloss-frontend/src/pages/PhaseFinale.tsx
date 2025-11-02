// src/pages/PhaseFinale.tsx
export default function PhaseFinale(){
    return (
      <div className="p-6 grid gap-3">
        <h2>고맙습니다</h2>
        <p>당신은 오늘 어떤 단순한 기쁨을 쫓고 있나요?</p>
        <button onClick={()=>location.reload()}>다시하기</button>
      </div>
    );
  }