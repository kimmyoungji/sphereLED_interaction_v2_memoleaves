// src/shared/ui/Card.tsx
import type { PropsWithChildren, HTMLAttributes, ReactNode } from 'react';
import './Card.css';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  subtitle?: ReactNode;
}

export function Card({ title, subtitle, className = '', children, ...rest }: PropsWithChildren<Props>) {
  return (
    <div className={["card", className].filter(Boolean).join(' ')} {...rest}>
      <div className="card__body">
        {title ? <h3 className="card__title">{title}</h3> : null}
        {subtitle ? <div className="card__subtitle">{subtitle}</div> : null}
        {children}
      </div>
    </div>
  );
}
