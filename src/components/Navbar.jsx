import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Talent Warriors home">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-electric/40 bg-electric/10 text-sm font-extrabold text-electric shadow-neon">
            TW
          </span>
          <span className="text-lg font-bold text-white">Talent Warriors</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-electric">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-md bg-electric px-5 py-3 text-sm font-bold text-ink shadow-neon transition hover:-translate-y-0.5 hover:bg-white lg:inline-flex"
        >
          Hire Talent
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-3xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md bg-electric px-4 py-3 text-center font-bold text-ink shadow-neon"
              onClick={() => setOpen(false)}
            >
              Hire Talent
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
