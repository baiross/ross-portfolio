import { ArrowLeft, RefreshCcw } from 'lucide-react';

interface DemoControlsProps {
  onBack: () => void;
  onNext: () => void;
  onReset: () => void;
  step: number;
  total: number;
}

export default function DemoControls({ onBack, onNext, onReset, step, total }: DemoControlsProps) {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-slate-800/90 bg-slate-900/90 p-5 text-sm text-slate-300 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-slate-100">Step</span>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300">{step} / {total}</span>
      </div>
      <div className="flex flex-wrap gap-3">
        <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-slate-700/90 bg-slate-800 px-4 py-2 text-sm text-slate-100 hover:border-slate-600">
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={onReset} className="inline-flex items-center gap-2 rounded-full border border-slate-700/90 bg-slate-800 px-4 py-2 text-sm text-slate-100 hover:border-slate-600">
          <RefreshCcw size={16} /> Reset
        </button>
        <button onClick={onNext} className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400">
          Next
        </button>
      </div>
    </div>
  );
}
