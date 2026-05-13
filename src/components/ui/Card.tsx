import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-3xl border border-slate-800/90 bg-slate-900/90 p-6 shadow-soft ${className}`}>
      {children}
    </div>
  );
}
