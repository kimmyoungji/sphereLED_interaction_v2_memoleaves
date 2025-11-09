
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initWebSocket } from './lib/ws';
import './shared/theme/global.css';
import './shared/theme/token.css';

initWebSocket();

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

