import type { ReactNode } from 'react';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusStyles: Record<string, string> = {
  Published: 'bg-emerald-500/15 text-emerald-300',
  Unpublished: 'bg-slate-700/80 text-slate-100',
  Ready: 'bg-cyan-500/15 text-cyan-300',
  Deleted: 'bg-rose-500/15 text-rose-300',
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status] ?? 'bg-slate-700/80 text-slate-100'} ${className}`}>
      {status}
    </span>
  );
}
