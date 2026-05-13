import type { Project } from '../data/portfolio';

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="mt-8 rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6">
      <h4 className="text-xl font-semibold text-white">Case study</h4>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Overview</p>
            <p className="mt-2 text-slate-300">{project.caseStudy.overview}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Problem</p>
            <p className="mt-2 text-slate-300">{project.caseStudy.problem}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Solution</p>
            <p className="mt-2 text-slate-300">{project.caseStudy.solution}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">My Role</p>
            <p className="mt-2 text-slate-300">{project.caseStudy.role}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Key features</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-300">
              {project.caseStudy.keyFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.caseStudy.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-800/90 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-4">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Challenges solved</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            {project.caseStudy.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-4">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">What I learned</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            {project.caseStudy.learnings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
