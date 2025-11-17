// src/shared/ui/PhaseCallout.tsx
import { useEffect, useState } from 'react';
import type { ReactNode, RefObject } from 'react';
import './PhaseCallout.css';

type Align = 'top' | 'center' | 'bottom';

type PhaseCalloutProps = {
  align?: Align;
  /** If provided, controls visibility. If omitted, visibility can be driven by videoRef+showAtSec. */
  visible?: boolean;
  /** Optional: when provided with videoRef, show when currentTime >= showAtSec (seconds). */
  showAtSec?: number;
  /** Optional: target video to listen for timeupdate. Must be stable ref. */
  videoRef?: RefObject<HTMLVideoElement | null>;
  /** Fade duration in ms (default 600). */
  fadeMs?: number;
  children: ReactNode;
  buttonLabel?: ReactNode;
  onAction?: () => void;
  secondaryButtonLabel?: ReactNode;
  onSecondaryAction?: () => void;
};

export function PhaseCallout({ align = 'center', visible, showAtSec, videoRef, fadeMs = 600, children, buttonLabel, onAction, secondaryButtonLabel, onSecondaryAction }: PhaseCalloutProps) {
  const [autoVisible, setAutoVisible] = useState(false);

  useEffect(() => {
    if (!videoRef?.current || showAtSec == null || visible !== undefined) return; // controlled or no video
    const video = videoRef.current;
    const onTime = () => {
      if (video.currentTime >= showAtSec) setAutoVisible(true);
    };
    video.addEventListener('timeupdate', onTime);
    onTime();
    return () => video.removeEventListener('timeupdate', onTime);
  }, [videoRef, showAtSec, visible]);

  const isVisible = visible !== undefined ? visible : autoVisible;
  const rootClass = `phase-callout phase-callout--${align} ${isVisible ? 'phase-callout--visible' : ''}`;
  const style = { ['--pc-fade' as any]: `${fadeMs}ms` };
  return (
    <div className={rootClass} style={style}>
      <div className="phase-callout__wrap">
        <div className="phase-callout__box">
          <div className="phase-callout__content">{children}</div>
          <div className="phase-callout__actions">
            {buttonLabel ? (
              <button
                className="phase-callout__btn"
                onClick={onAction}
                disabled={!onAction}
                aria-disabled={!onAction}
                style={!onAction ? { opacity: 0.5, animation: 'none', cursor: 'default' } : undefined}
              >
                {buttonLabel}
              </button>
            ) : null}
            {secondaryButtonLabel && onSecondaryAction ? (
              <button className="phase-callout__btn" onClick={onSecondaryAction}>{secondaryButtonLabel}</button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

