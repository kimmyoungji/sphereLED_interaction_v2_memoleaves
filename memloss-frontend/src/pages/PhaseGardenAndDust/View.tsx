// src/pages/PhaseGardenAndDust.tsx
import { useRef } from 'react';
import { useApp } from '../../store/app';
import { useEffect } from 'react';
import { createGardenDustScene } from '../../lib/three/scene';
import { useBreath } from '../../hooks/useBreath';

export default function PhaseGardenAndDust(){
  const send = useApp(s => s.send);                                // 서버로 OutEvent를 보내는 함수
  
  const containerRef = useRef<HTMLDivElement>(null);               // Three.js 캔버스를 붙일 DOM 컨테이너
  const sceneRef = useRef<ReturnType<typeof createGardenDustScene> | null>(null); // 생성된 Three.js 씬 핸들 보관
  const isDragging = useRef(false);                                // 드래그 중 여부
  const previousMousePosition = useRef({ yaw: 0, pitch: 0 });      // 직전 포인터 좌표(회전 계산용)
  const targetRotation = useRef({ yaw: 0, pitch: 0 });             // 누적 타겟 회전값(로컬 상호작용)
  const lastSent = useRef({ time: 0, yaw: 0, pitch: 0 });          // 마지막 전송 시각/값 (throttle + min-delta)

  const rotation = useApp(s => s.sphereRotation);                  // InEvent로 들어온 구 회전값(스토어)
  const opacity = useApp(s => s.sphereOpacity);                    // InEvent로 들어온 구 불투명도(스토어)

  // 입김(호흡) 센서 값: value(세기), isBlowing(감지 여부), onTick(주기적 콜백)
  const { value: breath, isBlowing, onTick } = useBreath({
    tickHz: 2,      // 전송 주기(Hz)
    minDelta: 0.03, // 변화량이 임계치 이상일 때만 전송
  });

  // Three.js 씬 생성
  useEffect(() => {
    if (!containerRef.current) return;
    sceneRef.current = createGardenDustScene(containerRef.current, {});
    return () => sceneRef.current?.destroy();
  }, []);

  // 구 회전값 업데이트
  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.setRotation({
      yaw: rotation.yaw,
      pitch: rotation.pitch,
      roll: rotation.roll,
    });
  }, [rotation]);

  // 구 불투명도 업데이트
  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.setOpacity(opacity);
  }, [opacity]);

  /* useEffect(() => {
    sceneRef.current?.setOpacity(breath);
  }, [breath]); */

  // 입김 센서 값 전송
  useEffect(() => {
    const off = onTick((val, blowing) => {
      if (isDragging.current) return;
      send({ type: 'sphereOpacity', payload: { intensity: val, blowing } });
    });
    return off; // unsubscribe on unmount
  }, [onTick, send]);

  function onDown(event: React.PointerEvent<HTMLDivElement>) {
    event.preventDefault();
    try { event.currentTarget.setPointerCapture(event.pointerId); } catch {}
    isDragging.current = true;
    previousMousePosition.current = { yaw: event.clientX, pitch: event.clientY };
    sceneRef.current?.setCursor('grabbing');
  }

  function onMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging.current) return;
    // Prevent default to avoid touch scrolling interfering with drag
    event.preventDefault();
    const deltaX = event.clientX - previousMousePosition.current.yaw;
    const deltaY = event.clientY - previousMousePosition.current.pitch;
    targetRotation.current.yaw += deltaX * 0.01;
    targetRotation.current.pitch += deltaY * 0.01;
    // 로컬 화면은 즉시 반영
    sceneRef.current?.setRotation({ yaw: targetRotation.current.yaw, pitch: targetRotation.current.pitch, roll: 0 });

    // 네트워크 전송은 throttle(≈60Hz) + min-delta 적용
    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const minIntervalMs = 16; // ≈60Hz
    const minDelta = 0.02;    // 임계 변화량
    const shouldSendByTime = (now - lastSent.current.time) >= minIntervalMs;
    const shouldSendByDelta = (
      Math.abs(targetRotation.current.yaw - lastSent.current.yaw) >= minDelta ||
      Math.abs(targetRotation.current.pitch - lastSent.current.pitch) >= minDelta
    );
    if (shouldSendByTime || shouldSendByDelta) {
      send({ type: 'sphereRotation', payload: { yaw: targetRotation.current.yaw, pitch: targetRotation.current.pitch, roll: 0 } });
      lastSent.current = { time: now, yaw: targetRotation.current.yaw, pitch: targetRotation.current.pitch };
    }
    previousMousePosition.current = { yaw: event.clientX, pitch: event.clientY };
  }

  function onUp(event?: React.PointerEvent<HTMLDivElement>) {
    event?.preventDefault();
    isDragging.current = false;
    // Release capture if held
    if (event) {
      try { event.currentTarget.releasePointerCapture(event.pointerId); } catch {}
    }
    sceneRef.current?.setCursor('grab');
  }

  return (
    <div className="p-6" style={{ padding: 'var(--space-6)' }}>
      <h2>정원 탐색 (~60s)</h2>
      <div
        ref={containerRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onPointerCancel={onUp}
        className="h-72 border rounded grid place-items-center select-none"
        onContextMenu={(e)=> e.preventDefault()}
        style={{ height: '60dvh', touchAction: 'none' }}
      />

      <div className="p-6">
        <h2>입김으로 먼지를 걷어내세요</h2>
        <div className="h-4 bg-gray-200 rounded">
          <div className="h-4 bg-blue-500 rounded" style={{ width:`${breath*100}%` }} />
        </div>
        <p>입김 세기: {breath.toFixed(2)}</p>
      </div>
    </div>
  );
}
