import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import InteractiveDemos from './components/InteractiveDemos';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar links={portfolioData.navLinks} />
      <main className="overflow-hidden">
        <section className="relative bg-slate-950 px-6 pt-24 pb-20 sm:px-8 lg:px-12">
          <div className="absolute inset-x-0 top-0 h-72 bg-hero-gradient blur-3xl opacity-80" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-16">
            <Hero hero={portfolioData.hero} />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {portfolioData.metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-6 shadow-soft"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{metric.label}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-slate-800/80 px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <About about={portfolioData.about} focus={portfolioData.focusAreas} />
          </div>
        </section>

        <section id="skills" className="border-t border-slate-800/80 px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Skills skillGroups={portfolioData.skills} />
          </div>
        </section>

        <section id="experience" className="border-t border-slate-800/80 px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Experience experience={portfolioData.experience} />
          </div>
        </section>

        <section id="projects" className="border-t border-slate-800/80 px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Projects projects={portfolioData.projects} />
          </div>
        </section>

        <section id="interactive-demos" className="border-t border-slate-800/80 px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <InteractiveDemos />
          </div>
        </section>

        <section id="resume" className="border-t border-slate-800/80 px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Resume resume={portfolioData.resume} />
          </div>
        </section>

        <section id="contact" className="border-t border-slate-800/80 px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Contact contact={portfolioData.contact} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
