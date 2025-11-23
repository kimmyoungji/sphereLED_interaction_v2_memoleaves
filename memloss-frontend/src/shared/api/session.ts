// src/shared/api/session.ts
const BASE = import.meta.env.VITE_API_URL || '';
const REGISTER = `${BASE}/sessions/register`;
const HEARTBEAT = `${BASE}/sessions/heartbeat`;
const UNREGISTER = `${BASE}/sessions/unregister`;

const KEY = 'memloss.sessionId';

export function getOrCreateSessionId(): string {
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
}

export async function registerSession(sessionId: string): Promise<{ ok: boolean; reason?: string }>{
  try {
    console.log('Registering session: ', sessionId);
    console.log('base: ' + BASE  );
    console.log('url: ' + REGISTER  );
    const res = await fetch(REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
    });
    if (res.status === 503 && res.headers.get('X-Reason') === 'CAP_REACHED') {
      return { ok: false, reason: 'CAP_REACHED' };
    }
    if (!res.ok) return { ok: false, reason: `HTTP_${res.status}` };
    return { ok: true };
  } catch(e) {
    return { ok: false, reason: 'NETWORK' };
  }
}

export async function heartbeat(sessionId: string): Promise<void> {
  try {
    await fetch(HEARTBEAT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
      keepalive: true,
    });
  } catch {}
}

export function unregisterSync(sessionId: string) {
  try {
    const data = JSON.stringify({ sessionId });
    navigator.sendBeacon(UNREGISTER, data);
  } catch {}
}

let timer: number | undefined;
export function startHeartbeat(sessionId: string, intervalMs = 30000) {
  stopHeartbeat();
  // initial kick
  heartbeat(sessionId);
  timer = window.setInterval(() => heartbeat(sessionId), intervalMs);
}

export function stopHeartbeat() {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
  }
}
