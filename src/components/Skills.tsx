import { motion } from 'framer-motion';
import type { SkillGroup } from '../data/portfolio';
import Card from './ui/Card';

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export default function Skills({ skillGroups }: SkillsProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Skills</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Technical skill groups for mobile and web.</h2>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <div key={skill} className="rounded-3xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
