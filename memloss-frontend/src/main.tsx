import ReactDOM from 'react-dom/client';
import App from './App';
import { initWebSocket } from './lib/ws';
import './shared/theme/global.css';
import './shared/theme/token.css';
import { getOrCreateSessionId, registerSession, startHeartbeat, unregisterSync } from './shared/api/session';

// minimal bootstrap: register capacity slot, then start WS and heartbeat
(async () => {
  const sid = getOrCreateSessionId();
  const res = await registerSession(sid);
  if (!res.ok) {
    alert('Server capacity is full. Please try again later.');
    return;
  }
  startHeartbeat(sid, 30000);
  window.addEventListener('beforeunload', () => unregisterSync(sid));
  initWebSocket();
})();

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
