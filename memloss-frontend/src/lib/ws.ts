// src/lib/ws.ts
import { useApp } from '../store/app';
import type { InEvent } from '../types/events';
const WS_DEBUG = import.meta.env.VITE_WS_DEBUG === 'true';

export function initWebSocket() {

  console.log("initializing websocket....")

  const url = import.meta.env.VITE_WS_URL as string;

  console.log(`websocket url: ${url}`)

  const app = useApp.getState();

  const ws = new WebSocket(url);
  useApp.setState({ ws });

  ws.onopen = () => console.log('[WS] connected');
  ws.onmessage = (ev) => {
    try {
      if (WS_DEBUG) console.log('[WS← raw]', ev.data)

      const msg = JSON.parse(ev.data) as InEvent;
      if (msg.type === 'phase') useApp.getState().setPhase(msg.phase);

      if (WS_DEBUG) console.log('[WS←]', msg)
      // 원하는대로 더 반영(예: timeline.update, led.param)
    } catch(e) { console.warn('WS parse error', e); }
  };
  ws.onclose = () => {
    console.warn('[WS] closed, retrying in 1s');
    setTimeout(initWebSocket, 1000);
  };
}
