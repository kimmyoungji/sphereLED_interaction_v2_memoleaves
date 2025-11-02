// src/store/app.ts
import { create } from 'zustand';
import type { Phase, InEvent, OutEvent } from '../types/events';
const WS_DEBUG = import.meta.env.VITE_WS_DEBUG === 'true';

export type State = {
  phase: Phase;
  ws?: WebSocket;
  setPhase: (p:Phase)=>void;
  send: (e:OutEvent)=>void;
};

export const useApp = create<State>((set, get) => ({
  phase: 'INIT',
  setPhase: (p)=> set({ phase: p }),
  send: (e)=> { 
    if (WS_DEBUG) console.log('[WS→]', e);
    get().ws?.readyState===1 && get().ws!.send(JSON.stringify(e)); 
  }
}));
