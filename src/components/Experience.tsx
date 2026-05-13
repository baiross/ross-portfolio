import { motion } from 'framer-motion';
import type { ExperienceItem } from '../data/portfolio';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Senior mobile development experience.</h2>
      </motion.div>

      <div className="mt-10 space-y-8">
        {experience.map((item) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-8 shadow-soft"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.role}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.company}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.location}</p>
              </div>
              <span className="rounded-full bg-slate-800/90 px-4 py-2 text-sm text-slate-200">{item.dateRange}</span>
            </div>

            <ul className="mt-8 grid gap-3 text-slate-300 sm:grid-cols-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
