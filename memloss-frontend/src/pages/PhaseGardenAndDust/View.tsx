// src/pages/PhaseGardenAndDust.tsx
import { useEffect, useRef, useState } from 'react';
import { useApp } from '../../store/app';
import { createGardenDustScene } from '../../lib/three/scene';
import { useBreath } from '../../hooks/useBreath';
import { PhaseCallout } from '../../shared/ui/PhaseCallout';
import intro2Video from '../../assets/PhaseGardenAndDust/INTRO(3)_Opening the door.mp4';
import './View.css';

export default function PhaseGardenAndDust(){
  const send = useApp(s => s.send);                                // 서버로 OutEvent를 보내는 함수
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFaded, setVideoFaded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);               // Three.js 캔버스를 붙일 DOM 컨테이너
  const sceneRef = useRef<ReturnType<typeof createGardenDustScene> | null>(null); // 생성된 Three.js 씬 핸들 보관
  const isDragging = useRef(false);                                // 드래그 중 여부
  const previousMousePosition = useRef({ yaw: 0, pitch: 0 });      // 직전 포인터 좌표(회전 계산용)
  const targetRotation = useRef({ yaw: 0, pitch: 0 });             // 누적 타겟 회전값(로컬 상호작용)
  const lastSent = useRef({ time: 0, yaw: 0, pitch: 0 });          // 마지막 전송 시각/값 (throttle + min-delta)

  const rotation = useApp(s => s.sphereRotation);                  // InEvent로 들어온 구 회전값(스토어)
  const opacity = useApp(s => s.sphereOpacity);                    // InEvent로 들어온 구 불투명도(스토어)

  // 콜아웃 표시/숨김 (자동 표시 후 버튼 클릭 시 숨김)
  const [showCallout, setShowCallout] = useState(true);

  // Throttle and delta constants for network sends
  const MIN_INTERVAL_MS = 16; // ≈60Hz
  const MIN_DELTA = 0.02;     // 임계 변화량

  // High-resolution time helper
  const nowMs = () => (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

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

  // 입김 센서 값 전송
  const inputEnabled = videoFaded && !showCallout;
  useEffect(() => {
    if (!inputEnabled) return;
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
    const now = nowMs();
    const shouldSendByTime = (now - lastSent.current.time) >= MIN_INTERVAL_MS;
    const shouldSendByDelta = (
      Math.abs(targetRotation.current.yaw - lastSent.current.yaw) >= MIN_DELTA ||
      Math.abs(targetRotation.current.pitch - lastSent.current.pitch) >= MIN_DELTA
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
    <div className="gd-root">

      {showCallout && (
        <PhaseCallout 
          videoRef={videoRef}
          showAtSec={2}
          buttonLabel={<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>정원을 둘러본다 </p> <p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>explore the garden </p></>}
          onAction={()=>{ setShowCallout(false); setVideoFaded(true); }}
          secondaryButtonLabel={<><p style={{ fontSize: '0.8rem', margin: '0.2rem'}}>처음으로 돌아간다 </p> <p style={{ fontSize: '0.6rem', margin: '0.2rem'}}>go back to the start </p></>}
          onSecondaryAction={()=>{ send({type:'init'}); setShowCallout(false);}}>
          <h3>정원으로 나오니, <br/> 모든 것이 희뿌옇습니다.</h3>
          <p>now we are in the garden <br/> and everything is blurry.</p>
        </PhaseCallout>
      )}

      <video
        src={intro2Video}
        ref={videoRef}
        autoPlay
        playsInline
        className="gd-introVideo"
        style={{
          opacity: videoFaded ? 0 : 1,
          filter: videoFaded ? 'blur(12px)' : 'blur(0px)',
          pointerEvents: videoFaded ? 'none' : 'auto',
        }}
      />

      

      {videoFaded && (
        <p style={{ opacity: 0.8, textAlign: 'center', margin: '0.5rem', }}>
          구를 돌려 정원을 둘러보세요.<br/>rotate the sphere to explore the garden.
        </p>
      )}
      <div
        ref={containerRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onPointerCancel={onUp}
        className="gd-scene"
        onContextMenu={(e)=> e.preventDefault()}
      />

      {videoFaded && (
        <div className="gd-meter" style={{ width: `${Math.max(0, Math.min(1, breath)) * 100 + 10}%` }}>
          <div aria-hidden className="gd-meter__bg" />
          <div className="gd-meter__label">
            <span>{breath.toFixed(2)}</span>
          </div>
        </div>
      )}
      {videoFaded && (
        <p style={{ opacity: 0.8, textAlign: 'center', margin: '0.5rem' }}>
          최대한 길게 입김을 불어 먼지를 날려보세요. <br/> 제임스의 기억이 보일거에요.<br/>blow into the sphere to send dust. <br/> you will see james' memories.
        </p>
      )}

    </div>
  );
}