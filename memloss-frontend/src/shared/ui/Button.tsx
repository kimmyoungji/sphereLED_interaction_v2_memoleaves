// src/shared/ui/Button.tsx
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './Button.css';

type Variant = 'primary' | 'ghost' | 'default';
type Size = 'sm' | 'md' | 'lg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = 'default', size = 'md', className = '', children, ...rest }: PropsWithChildren<Props>) {
  const classes = [
    'button',
    variant === 'primary' ? 'button--primary' : variant === 'ghost' ? 'button--ghost' : '',
    `button--${size}`,
    className
  ].filter(Boolean).join(' ');
  return (
    <button className={classes} {...rest}>{children}</button>
  );
}
