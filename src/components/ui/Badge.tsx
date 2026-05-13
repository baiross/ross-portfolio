import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 ${className}`}>
      {children}
    </span>
  );
}
