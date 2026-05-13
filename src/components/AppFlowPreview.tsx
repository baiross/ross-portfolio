import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { DemoStep } from '../data/demos';
import DemoControls from './DemoControls';

interface AppFlowPreviewProps {
  steps: DemoStep[];
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
  onReset: () => void;
  renderContent: (stepId: string) => ReactNode;
}

export default function AppFlowPreview({ steps, currentStep, onBack, onNext, onReset, renderContent }: AppFlowPreviewProps) {
  const activeStep = steps[currentStep - 1];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-5 shadow-soft">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Current step</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{activeStep.title}</h3>
            <p className="mt-2 max-w-2xl text-slate-300">{activeStep.summary}</p>
          </div>
          <div className="rounded-full border border-slate-800/90 bg-slate-950/80 px-4 py-2 text-sm text-slate-200">
            {currentStep} / {steps.length}
          </div>
        </div>
      </div>

      <motion.div
        key={activeStep.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {renderContent(activeStep.id)}
      </motion.div>

      <DemoControls
        onBack={onBack}
        onNext={onNext}
        onReset={onReset}
        step={currentStep}
        total={steps.length}
      />
    </div>
  );
}
