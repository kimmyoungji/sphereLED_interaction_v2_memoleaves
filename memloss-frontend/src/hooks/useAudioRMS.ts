// src/hooks/useAudioRMS.ts
import { useEffect, useRef, useState } from 'react';

export function useAudioRMS() {
  const [intensity, setIntensity] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let ctx:AudioContext|undefined, analyser:AnalyserNode, data:Uint8Array;
    let stream:MediaStream|undefined;
    (async () => {
      stream = await navigator.mediaDevices.getUserMedia({ audio:true });
      ctx = new AudioContext();
      const src = ctx.createMediaStreamSource(stream);
      analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      src.connect(analyser);
      data = new Uint8Array(analyser.frequencyBinCount);

      const loop = () => {
        analyser.getByteTimeDomainData(data);
        // RMS 계산
        let sum=0;
        for (let i=0;i<data.length;i++){
          const v = (data[i]-128)/128;
          sum += v*v;
        }
        const rms = Math.sqrt(sum/data.length);
        // 간단 정규화/스무딩
        const val = Math.min(1, Math.max(0, (rms-0.02)/0.2));
        setIntensity( val );
        rafRef.current = requestAnimationFrame(loop);
      };
      loop();
    })();
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      stream?.getTracks().forEach(t=>t.stop());
      ctx?.close();
    };
  }, []);

  return intensity; // 0..1
}
