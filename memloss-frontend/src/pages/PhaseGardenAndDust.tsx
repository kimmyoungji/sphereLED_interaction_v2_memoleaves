// src/pages/PhaseGardenAndDust.tsx
import { useRef } from 'react';
import throttle from 'lodash.throttle';
import { useApp } from '../store/app';
import { useEffect } from 'react';
import { useAudioRMS } from '../hooks/useAudioRMS';


export default function PhaseGardenAndDust(){
  const send = useApp(s=>s.send);
  const last = useRef<{x:number;y:number}>({x:0,y:0});
  const yawPitch = useRef({yaw:0, pitch:0});

  const onDown = (e:React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    last.current = { x:e.clientX, y:e.clientY };
  };
  const onMove = throttle((e:React.PointerEvent) => {
    if (e.pressure===0) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x:e.clientX, y:e.clientY };
    yawPitch.current.yaw  += dx*0.002;   // 민감도 조절
    yawPitch.current.pitch+= dy*0.002;
    send({ type:'rotation', payload:{ ...yawPitch.current, roll:0 }});
  }, 33); // ~30Hz

  // 입김 감지
  const intensity = useAudioRMS();
  useEffect(()=>{
    send({ type:'breath', payload:{ intensity } });
  }, [intensity, send]);

  return (
    <div className="p-6">
      <h2>정원 탐색 (~60s)</h2>
      <div
        onPointerDown={onDown}
        onPointerMove={onMove}
        className="h-72 border rounded grid place-items-center select-none">
        구형 컨트롤러(드래그하여 회전)
      </div>

      <div className="p-6">
        <h2>입김으로 먼지를 걷어내세요</h2>
        <div className="h-4 bg-gray-200 rounded">
          <div className="h-4 bg-blue-500 rounded" style={{ width:`${intensity*100}%` }} />
        </div>
        <p>입김 세기: {intensity.toFixed(2)}</p>
      </div>
    </div>
  );
}
