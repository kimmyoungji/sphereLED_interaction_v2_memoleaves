// src/App.tsx
import { useApp } from './store/app';
import type { State } from './store/app';
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
    INIT: PhaseHelp,
    HELP: PhaseHelp,
    GARDEN_AND_DUST: PhaseGardenAndDust,
    TIMELINE: PhaseTimeline,
    DRAGONFLY: PhaseDragonfly,
    FINALE: PhaseFinale
  };
  const View = views[phase];

  // add button to test switching phase and view
  return (
    <>
      <View />
      <button onClick={()=>useApp.getState().setPhase('INIT')}>INIT</button>
      <button onClick={()=>useApp.getState().setPhase('HELP')}>HELP</button>
      <button onClick={()=>useApp.getState().setPhase('GARDEN_AND_DUST')}>Garden and Dust</button>
      <button onClick={()=>useApp.getState().setPhase('TIMELINE')}>Timeline</button>
      <button onClick={()=>useApp.getState().setPhase('DRAGONFLY')}>Dragonfly</button>
      <button onClick={()=>useApp.getState().setPhase('FINALE')}>Finale</button>
    </>
  );
}