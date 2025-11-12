// src/App.tsx
import { useEffect } from 'react';
import { useApp } from './store/app';
import type { State } from './store/app';
import { ensureStarted } from './audio/bgm';
import PhaseInit from './pages/PhaseInit/View';
import PhaseHelp from './pages/PhaseHelp/View';
import PhaseGardenAndDust from './pages/PhaseGardenAndDust/View';
import PhaseTimeline from './pages/PhaseTimeline/View';
import PhaseDragonfly from './pages/PhaseDragonfly/View';
import PhaseFinale from './pages/PhaseFinale/View';
import type { Phase } from './types/events';
import type { ComponentType } from 'react';
import Screen from './shared/ui/Screen';
import { PhaseNav } from './shared/ui/PhaseNav';
import { setDuck } from './audio/bgm';

export default function App(){
  const phase: Phase = useApp((s: State)=>s.phase);
  useEffect(() => {
    const start = () => { ensureStarted(); };
    window.addEventListener('pointerdown', start, { once: true });
    window.addEventListener('keydown', start, { once: true });
    return () => {
      window.removeEventListener('pointerdown', start);
      window.removeEventListener('keydown', start);
    };
  }, []);

  // useEffect on phase for ducking
  useEffect(() => {
    switch (phase) {
      case 'INIT':
      case 'HELP':
        setDuck(0);
        break;
      case 'GARDEN_AND_DUST':
        setDuck(0.75);
        break;
      case 'TIMELINE':
        setDuck(0.75);
        break;
      case 'DRAGONFLY':
        setDuck(0.75);
        break;
      case 'FINALE':
        setDuck(0);
        break;
      default:
        setDuck(0.75);
        break;
    }
  }, [phase]);

  const views: Record<Phase, ComponentType> = {
    INIT: PhaseInit,
    HELP: PhaseHelp,
    GARDEN_AND_DUST: PhaseGardenAndDust,
    TIMELINE: PhaseTimeline,
    DRAGONFLY: PhaseDragonfly,
    FINALE: PhaseFinale
  };
  const View = views[phase];

  console.log('[App] phase=', phase);
  console.log('[App] View=', View);

  // add button to test switching phase and view
  return (
      <Screen>
        <View />
        <PhaseNav />
      </Screen>
  );
}