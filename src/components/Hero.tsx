import { motion } from 'framer-motion';
import type { HeroData } from '../data/portfolio';
import Button from './ui/Button';

interface HeroProps {
  hero: HeroData;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-8 shadow-soft sm:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          {hero.badge}
        </span>
        <div className="mt-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Senior React Native Developer</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{hero.heading}</h1>
          <p className="mt-4 text-2xl font-medium text-slate-200 sm:text-3xl">{hero.description}</p>
          <p className="mt-6 max-w-2xl leading-8 text-slate-300">{hero.subheading}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <Button key={cta.label} href={cta.href} variant={cta.variant} className="min-w-[160px]">
              {cta.label}
            </Button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
