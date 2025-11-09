// src/App.tsx
import { useApp } from './store/app';
import type { State } from './store/app';
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
      <Screen>
        <View />
        <PhaseNav />
      </Screen>
  );
}