// src/shared/ui/PhaseCallout.tsx
import { useEffect, useState } from 'react';
import type { ReactNode, RefObject } from 'react';
import './PhaseCallout.css';

type AlignH = 'left' | 'center' | 'right';
type AlignV = 'top' | 'middle' | 'bottom';

type PhaseCalloutProps = {
  alignH?: AlignH;
  alignV?: AlignV;
  /** If provided, controls visibility. If omitted, visibility can be driven by videoRef+showAtSec. */
  visible?: boolean;
  /** Optional: when provided with videoRef, show when currentTime >= showAtSec (seconds). */
  showAtSec?: number;
  /** Optional: target video to listen for timeupdate. Must be stable ref. */
  videoRef?: RefObject<HTMLVideoElement | null>;
  /** Fade duration in ms (default 600). */
  fadeMs?: number;
  /** Dim the full-screen background behind the callout (default true). */
  dimBackground?: boolean;
  /** Backdrop opacity 0..1 (default 0.35). Only used when dimBackground is true. */
  backdropOpacity?: number;
  children: ReactNode;
  buttonLabel?: ReactNode;
  onAction?: () => void;
  secondaryButtonLabel?: ReactNode;
  onSecondaryAction?: () => void;
};

export function PhaseCallout({ alignH = 'center', alignV = 'middle', visible, showAtSec, videoRef, fadeMs = 600, dimBackground = true, backdropOpacity = 0.35, children, buttonLabel, onAction, secondaryButtonLabel, onSecondaryAction }: PhaseCalloutProps) {
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
  const rootClass = `phase-callout phase-callout--v-${alignV} phase-callout--h-${alignH}  ${isVisible ? 'phase-callout--visible' : ''}`;
  const safeOpacity = Math.max(0, Math.min(1, backdropOpacity ?? 0.35));
  const backdrop = dimBackground ? `rgba(0,0,0,${safeOpacity})` : 'transparent';
  const style = { ['--pc-fade' as any]: `${fadeMs}ms`, ['--pc-backdrop' as any]: backdrop };
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

