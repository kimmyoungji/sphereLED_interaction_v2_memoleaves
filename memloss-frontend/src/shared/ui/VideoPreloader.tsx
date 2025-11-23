// src/shared/ui/VideoPreloader.tsx
import { useEffect, useRef } from 'react';

export function VideoPreloader({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    try {
      // trigger loading/buffering; browsers may optimize based on preload attr
      v.load();
    } catch {}
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      preload="auto"
      style={{ position: 'fixed', width: 0, height: 0, opacity: 0, pointerEvents: 'none' }}
      aria-hidden
      tabIndex={-1}
    />
  );
}
