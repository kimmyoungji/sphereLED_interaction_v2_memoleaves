// src/shared/ui/Screen.tsx
import type { PropsWithChildren } from 'react';
import './Screen.css';

export default function Screen({ children }: PropsWithChildren) {
  return (
    <div className="screen">
      <div className="screen-container">{children}</div>
    </div>
  );
}