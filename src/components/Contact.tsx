import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { ContactData } from '../data/portfolio';

interface ContactProps {
  contact: ContactData;
}

const contactItems = [
  { label: 'Email', icon: Mail, valueKey: 'email', hrefPrefix: 'mailto:' },
  { label: 'GitHub', icon: Github, valueKey: 'github', hrefPrefix: '' },
  { label: 'LinkedIn', icon: Linkedin, valueKey: 'linkedin', hrefPrefix: '' },
  { label: 'Location', icon: MapPin, valueKey: 'location', hrefPrefix: '' },
] as const;

export default function Contact({ contact }: ContactProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Let’s keep the conversation simple.</h2>
        <p className="mt-6 max-w-2xl text-slate-300 leading-8">
          I’m available for mobile development roles, freelance product work, and consulting on React Native architecture and release pipelines.
        </p>
      </div>
      <div className="grid gap-4">
        {contactItems.map(({ label, icon: Icon, valueKey, hrefPrefix }) => {
          const value = contact[valueKey];
          const href = hrefPrefix ? `${hrefPrefix}${value}` : value;
          return (
            <a
              key={label}
              href={href}
              target={label !== 'Location' ? '_blank' : '_self'}
              rel={label !== 'Location' ? 'noreferrer' : undefined}
              className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-cyan-300">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-base text-white">{value}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
