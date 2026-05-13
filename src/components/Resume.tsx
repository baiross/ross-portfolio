import { Download } from 'lucide-react';
import type { ResumeData } from '../data/portfolio';

interface ResumeProps {
  resume: ResumeData;
}

export default function Resume({ resume }: ResumeProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Resume</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Download the resume or reach out directly.</h2>
        <p className="mt-6 text-slate-300 leading-8">{resume.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={resume.resumePath}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
            download
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-600"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-8 shadow-soft">
        <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Polished profile</p>
        <div className="mt-6 space-y-4 text-slate-300">
          <p>Senior mobile developer with cross-platform product experience in React Native.</p>
          <p>Design-driven interface development, strong release pipeline knowledge, and deep app debugging experience.</p>
        </div>
      </div>
    </div>
  );
}
