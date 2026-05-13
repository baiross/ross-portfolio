import { motion } from 'framer-motion';
import Card from './ui/Card';

interface AboutProps {
  about: { summary: string };
  focus: string[];
}

export default function About({ about, focus }: AboutProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">About</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Product-focused mobile development.</h2>
        <p className="mt-6 text-slate-300 leading-8">{about.summary}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Card>
          <h3 className="text-xl font-semibold text-white">What I focus on</h3>
          <div className="mt-6 grid gap-3">
            {focus.map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
