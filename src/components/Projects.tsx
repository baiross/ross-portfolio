import { motion } from 'framer-motion';
import ProjectCaseStudy from './ProjectCaseStudy';
import type { Project } from '../data/portfolio';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Case studies for mobile and web products.</h2>
      </motion.div>

      <div className="mt-10 grid gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-6 shadow-soft"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-800/90 bg-slate-950/80 px-3 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4 text-slate-300">
                  {highlight}
                </div>
              ))}
            </div>

            <ProjectCaseStudy project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
