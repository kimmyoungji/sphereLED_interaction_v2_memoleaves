import { useEffect, useRef, useState } from 'react';
import { useAudioRMS } from './useAudioRMS';

type BreathOpts = {
  // smoothing
  attack?: number;   // 빠르게 올라감 (0..1), default 0.35
  release?: number;  // 천천히 내려감 (0..1), default 0.08
  // breath detection hysteresis
  onThreshold?: number;  // 이 값 이상이면 blowing 시작, default 0.22
  offThreshold?: number; // 이 값 미만이면 blowing 종료, default 0.15
  // spring feel (optional)
  useSpring?: boolean; // true면 스프링 적용
  stiffness?: number;  // k: 스프링 강성. 클수록 목표값으로 더 강하게/빠르게 끌어당김(응답 속도↑, 오버슈트 가능성↑)
  damping?: number;    // c: 감쇠 계수. 클수록 진동/오버슈트 억제(안정성↑)하지만 반응이 둔해짐(응답 속도↓)
  mass?: number;       // m: 질량(관성). 클수록 움직임이 무거워져 가속이 느림(반응 완만). k, c와 함께 전체 응답 특성 결정
  // tick (ws sending cadence)
  tickHz?: number;     // 예: 10Hz
  minDelta?: number;   // 전송 최소 변화량, default 0.03
};

export function useBreath(opts: BreathOpts = {}) {
    const {
        attack = 0.35,
        release = 0.2,
        onThreshold = 0.22,
        offThreshold = 0.15,
        useSpring = true,
        stiffness = 10,
        damping = 5,
        mass = 1,
        tickHz = 10,
        minDelta = 0.03,
    } = opts;

    const raw = useAudioRMS(); // 0..1 (frame-by-frame)

    // envelope smoothing (attack/decay)
    const [env, setEnv] = useState(0);        // smoothed target
    const [value, setValue] = useState(0);    // final output (maybe spring-applied)
    const isBlowingRef = useRef(false);
    const lastSentRef = useRef(0);

    // spring state
    const yRef = useRef(0);   // position
    const vRef = useRef(0);   // velocity
    const lastTsRef = useRef<number | null>(null);

    // per-frame update: compute env (attack/decay) and spring
    useEffect(() => {
        let raf: number;
        const frame = (ts: number) => {
        // attack/decay smoothing toward raw
        const curEnv = env;
        const alpha = raw > curEnv ? attack : release;
        const nextEnv = curEnv + (raw - curEnv) * alpha;

        // breath hysteresis
        if (!isBlowingRef.current && nextEnv >= onThreshold) isBlowingRef.current = true;
        if (isBlowingRef.current && nextEnv <= offThreshold) isBlowingRef.current = false;

        // spring toward nextEnv
        if (useSpring) {
            const prevTs = lastTsRef.current ?? ts;
            const dt = Math.max(0.001, (ts - prevTs) / 1000);
            lastTsRef.current = ts;

            const k = stiffness;
            const c = damping;
            const m = mass;

            // m*y'' + c*y' + k*y = k*nextEnv  -> a = (k*(nextEnv - y) - c*v) / m
            const y = yRef.current;
            const v = vRef.current;
            const a = (k * (nextEnv - y) - c * v) / m;

            const v2 = v + a * dt;
            const y2 = y + v2 * dt;

            yRef.current = y2;
            vRef.current = v2;
            setValue(y2);
        } else {
            setValue(nextEnv);
        }

        setEnv(nextEnv);
        raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
        return () => cancelAnimationFrame(raf);
    }, [attack, release, damping, mass, stiffness, useSpring, raw]); // raw는 프레임마다 변하지만, setEnv는 frame loop에서만

    // tick scheduler for efficient sending

    // 1) 최신 value를 ref로 미러링
    const valueRef = useRef(0);
    useEffect(() => { 
        valueRef.current = value;
    }, [value]);

    // 2) 최신 listeners를 ref로 미러링
    const listenersRef = useRef<((val: number, isBlowing: boolean) => void)[]>([]);
    
    useEffect(() => {
        const interval = 1000 / tickHz;
        const id = setInterval(() => {
        const current = valueRef.current;               // ref에서 읽음
        const last = lastSentRef.current;
        if (Math.abs(current - last) >= minDelta) {
            lastSentRef.current = current;
            listenersRef.current.forEach(fn => fn(current, isBlowingRef.current));
        }
        }, interval);
        return () => clearInterval(id);
    }, [tickHz, minDelta]); // value 제거

    const onTick = (fn: (val: number, isBlowing: boolean) => void) => {
        listenersRef.current.push(fn);
        return () => {
        listenersRef.current = listenersRef.current.filter(f => f !== fn);
        };
    };

    return {
        raw,         // instantaneous RMS
        value,       // smoothed/spring-applied 0..1
        isBlowing: isBlowingRef.current,
        onTick,      // register a 10Hz (default) tick with delta-threshold filter
    };
}