import { motion } from 'framer-motion';
import type { HeroData } from '../data/portfolio';
import Button from './ui/Button';

interface HeroProps {
  hero: HeroData;
}

const stats = [
  { value: '4+', label: 'Years Experience', icon: '</>' },
  { value: '20+', label: 'Mobile Apps Built', icon: '▯' },
  { value: '10+', label: 'Production Apps', icon: '🚀' },
  { value: '100%', label: 'Store Deployment', icon: '▱' },
];

const quickActions = [
  { title: 'Vouchers', subtitle: '12 Available', icon: '🎟️' },
  { title: 'Scan', subtitle: 'Barcode', icon: '▣' },
  { title: 'Rewards', subtitle: 'Explore now', icon: '🎁' },
  { title: 'Profile', subtitle: 'View profile', icon: '👤' },
];

export default function Hero({ hero }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden rounded-none border-b border-slate-800/80 bg-slate-950 px-4 py-16 shadow-soft sm:px-6 md:px-8 lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl md:h-[28rem] md:w-[28rem]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl md:h-[32rem] md:w-[32rem]" />
        <div className="absolute right-12 top-32 h-64 w-64 rounded-full bg-violet-600/25 blur-3xl md:right-28 md:top-28 md:h-[24rem] md:w-[24rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.18),transparent_38%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 md:gap-12 lg:flex-row lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex w-full flex-col lg:w-auto lg:flex-1"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-slate-200 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {hero.badge}
          </span>

          <div className="mt-8 max-w-3xl md:mt-10">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Ross Rabanos
              </span>
            </h1>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 sm:mt-6 sm:text-sm">
              Senior{' '}
              <span className="text-blue-400">React Native</span>{' '}
              Developer
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg md:text-xl md:leading-8">
              {hero.subheading}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
            {hero.ctas.map((cta, index) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant}
                className={`min-w-fit text-sm sm:min-w-[150px] md:text-base ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20 hover:from-blue-400 hover:to-violet-500'
                    : 'border border-slate-700 bg-slate-900/60 text-slate-100 hover:border-blue-400/60 hover:bg-slate-800'
                }`}
              >
                {cta.label}
              </Button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-slate-400 md:mt-10 md:gap-5">
            <span className="text-xs md:text-sm">Find me on</span>

            <a
              href="https://github.com/baiross"
              target="_blank"
              rel="noreferrer"
              className="text-base transition hover:text-white md:text-lg"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ross-rabanos"
              target="_blank"
              rel="noreferrer"
              className="text-base transition hover:text-blue-400 md:text-lg"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="mailto:rabanos.rvc@gmail.com"
              className="text-base transition hover:text-violet-400 md:text-lg"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 md:gap-4 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/20 backdrop-blur md:p-5"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-300 md:h-11 md:w-11 md:text-xl">
                    {stat.icon}
                  </div>

                  <div>
                    <p className="text-xl font-bold text-white md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-400 md:text-sm">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
          className="relative mx-auto w-full max-w-sm md:max-w-md lg:w-auto lg:max-w-lg lg:flex-1"
        >
          <div className="absolute -right-10 top-16 h-64 w-64 rounded-full bg-gradient-to-br from-violet-600/60 to-blue-600/40 blur-sm sm:h-72 sm:w-72 md:h-80 md:w-80" />
          <div className="absolute bottom-8 left-6 h-40 w-56 rounded-full bg-blue-500/30 blur-3xl md:w-72" />

          <div className="relative mx-auto w-full max-w-[280px] rotate-[5deg] rounded-[2.2rem] border border-slate-700 bg-slate-950 p-2 shadow-2xl shadow-blue-950/60 sm:max-w-sm sm:rounded-[2.8rem] sm:p-3 md:max-w-md">
            <div className="rounded-[1.9rem] border border-slate-800 bg-[#080d1c] p-3 sm:rounded-[2.3rem] sm:p-5">
              <div className="mb-4 flex items-center justify-between text-xs text-white sm:mb-6">
                <span>9:41</span>
                <span>● ● ●</span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] italic text-slate-300 sm:text-xs">
                    Welcome back,
                  </p>
                  <h3 className="mt-1 text-base font-bold text-white sm:text-xl">
                    Ross Rabanos
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs sm:h-10 sm:w-10 sm:text-sm">
                  RR
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-600/40 p-4 sm:mt-6 sm:p-5">
                <p className="text-[10px] text-slate-300 sm:text-xs">Total Points</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-2xl font-black text-white sm:text-3xl">12,580</p>
                  <span className="text-3xl sm:text-4xl">🎁</span>
                </div>
                <p className="mt-2 text-[10px] text-slate-300 sm:text-xs">
                  Keep earning and get more rewards!
                </p>
              </div>

              <div className="mt-4 sm:mt-6">
                <p className="mb-2 text-xs font-semibold text-white sm:mb-3 sm:text-sm">
                  Quick Access
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {quickActions.map((action) => (
                    <div
                      key={action.title}
                      className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 sm:rounded-2xl sm:p-3"
                    >
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-sm sm:mb-3 sm:h-9 sm:w-9 sm:rounded-xl">
                        {action.icon}
                      </div>
                      <p className="text-xs font-semibold text-white sm:text-sm">
                        {action.title}
                      </p>
                      <p className="text-[10px] text-slate-400 sm:text-xs">
                        {action.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-4 w-full rounded-2xl border border-blue-500/30 bg-blue-600/20 py-3 text-center text-xs font-semibold text-blue-300 transition hover:bg-blue-600/30 sm:mt-6 sm:text-sm">
                Explore Dashboard
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
