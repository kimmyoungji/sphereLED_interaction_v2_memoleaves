// src/shared/ui/PhaseCallout.tsx
import { useEffect, useMemo, useState } from 'react';
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
  buttonLabel: string;
  onAction: () => void;
  secondaryButtonLabel?: string;
  onSecondaryAction?: () => void;
};

export function PhaseCallout({ align = 'center', visible, showAtSec, videoRef, fadeMs = 600, children, buttonLabel, onAction, secondaryButtonLabel, onSecondaryAction }: PhaseCalloutProps) {
  const [autoVisible, setAutoVisible] = useState(false);

  useEffect(() => {
    if (!videoRef?.current || showAtSec == null || visible !== undefined) return; // controlled or no video
    const v = videoRef.current;
    const onTime = () => {
      if (v.currentTime >= showAtSec) setAutoVisible(true);
    };
    v.addEventListener('timeupdate', onTime);
    // also check immediately (in case currentTime already past)
    onTime();
    return () => v.removeEventListener('timeupdate', onTime);
  }, [videoRef, showAtSec, visible]);

  const isVisible = useMemo(() => (visible !== undefined ? visible : autoVisible), [visible, autoVisible]);
  const rootClass = `phase-callout phase-callout--${align} ${isVisible ? 'phase-callout--visible' : ''}`;
  const style = { ['--pc-fade' as any]: `${fadeMs}ms` };
  return (
    <div className={rootClass} style={style}>
      <div className="phase-callout__wrap">
        <div className="phase-callout__box">
          <div className="phase-callout__content">{children}</div>
          <div className="phase-callout__actions">
            <button className="phase-callout__btn" onClick={onAction}>{buttonLabel}</button>
            {secondaryButtonLabel && onSecondaryAction ? (
              <button className="phase-callout__btn" onClick={onSecondaryAction}>{secondaryButtonLabel}</button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

