// src/App.tsx
import { useApp } from './store/app';
import type { State } from './store/app';
import PhaseInit from './pages/PhaseInit';
import PhaseHelp from './pages/PhaseHelp';
import PhaseGardenAndDust from './pages/PhaseGardenAndDust';
import PhaseTimeline from './pages/PhaseTimeline';
import PhaseDragonfly from './pages/PhaseDragonfly';
import PhaseFinale from './pages/PhaseFinale';
import type { Phase } from './types/events';
import type { ComponentType } from 'react';

export default function App(){
  const phase: Phase = useApp((s: State)=>s.phase);
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
      <View />
  );
}