// src/store/app.ts
import { create } from 'zustand';
import type { Phase, OutEvent, InEvent } from '../types/events';
const WS_DEBUG = import.meta.env.VITE_WS_DEBUG === 'true';

export type State = {
  phase: Phase;
  ws?: WebSocket;
  setPhase: (p:Phase)=>void;
  send: (e:OutEvent)=>void;
  applyInEvent: (e:InEvent)=>void;
  sphereRotation: { yaw:number; pitch:number; roll:number };
  sphereOpacity: number;
  setSphereRotation: (yaw:number, pitch:number, roll:number)=>void;
  setSphereOpacity: (opacity:number)=>void;
};

export const useApp = create<State>((set, get) => ({
  phase: 'INIT',
  sphereRotation: { yaw: 0, pitch: 0, roll: 0 },
  sphereOpacity: 0,
  setPhase: (p)=> set({ phase: p }),
  setSphereRotation: (yaw:number, pitch:number, roll:number)=> set({ sphereRotation: { yaw, pitch, roll } }),
  setSphereOpacity: (opacity:number)=> set({ sphereOpacity: opacity }),
  send: (e:OutEvent)=> { 
    if (WS_DEBUG) console.log('[WS→]', e);
    get().ws?.readyState===1 && get().ws!.send(JSON.stringify(e)); 
  },
  applyInEvent: (e:InEvent)=>{
    if (WS_DEBUG) console.log('[WS← parsed]', e);
    switch (e.type) {
      case 'phase': {
        set({ phase: e.payload.phase });
        break;
      }
      case 'sphereRotation': {
        set({ sphereRotation: { yaw: e.payload.yaw, pitch: e.payload.pitch, roll: e.payload.roll } });
        break;
      }
      case 'sphereOpacity': {
        set({ sphereOpacity: e.payload.opacity });
        break;
      }
      default: {
        break;
      }
    }
  },
}));
