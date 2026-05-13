import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavLink } from '../data/portfolio';

interface NavbarProps {
  links: NavLink[];
}

export default function Navbar({ links }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          Ross Rabanos
        </a>

        <button
          className="inline-flex items-center rounded-full border border-slate-800/90 bg-slate-900/90 p-2 text-slate-100 sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`hidden items-center gap-6 sm:flex`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <div className="border-t border-slate-800/90 bg-slate-950/95 px-6 py-4 sm:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm text-slate-200 hover:bg-slate-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
