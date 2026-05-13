import type { ReactNode } from 'react';

interface PhoneMockupProps {
  title: string;
  status?: string;
  children: ReactNode;
}

export default function PhoneMockup({ title, status, children }: PhoneMockupProps) {
  return (
    <div className="mx-auto w-full max-w-[360px] rounded-[4rem] border border-slate-800/90 bg-slate-950/90 p-4 shadow-soft sm:p-5">
      <div className="flex items-center justify-between rounded-[2rem] border border-slate-800/90 bg-slate-900/95 px-4 py-3 text-sm text-slate-300">
        <span>{title}</span>
        {status ? <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-200">{status}</span> : null}
      </div>
      <div className="mt-4 overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-4 text-slate-200 sm:p-5">
        {children}
      </div>
    </div>
  );
}
