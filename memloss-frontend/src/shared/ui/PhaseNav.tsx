// src/shared/ui/PhaseNav.tsx
import { useState } from 'react';
import { useApp } from '../../store/app';
import './PhaseNav.css';
import { Button } from './Button';

export function PhaseNav() {
  const phase = useApp(s => s.phase);
  const send = useApp(s => s.send);
  const [busy, setBusy] = useState(false);

  const go = async (dir: 'prev' | 'next') => {
    try {
      setBusy(true);
      send({ type: dir });
      // server will broadcast phase via WS -> store updates phase
    } catch (e) {
      console.warn(e);
      alert('Phase update failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="phase-nav" role="navigation" aria-label="Phase navigation">
      <Button className="phase-nav__btn" disabled={busy} onClick={() => go('prev')}>Prev</Button>
      <span className="phase-nav__label">{phase}</span>
      <Button className="phase-nav__btn phase-nav__btn--primary" disabled={busy} onClick={() => go('next')}>Next</Button>
    </div>
  );
}
