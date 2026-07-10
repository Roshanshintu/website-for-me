import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/15 bg-ink/65 shadow-[0_18px_70px_rgba(0,0,0,0.38),0_0_28px_rgba(20,215,231,0.08)] backdrop-blur-2xl transition-all duration-300">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <nav className="section-shell relative flex h-[72px] items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Corevant Systems home">
          <span className="relative block h-14 w-48 shrink-0 overflow-hidden drop-shadow-[0_0_18px_rgba(20,215,231,0.28)] sm:w-56">
            <img src="/corevant-logo.png" alt="" className="h-full w-full object-contain" />
          </span>
          <span className="sr-only">Corevant Systems</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-white hover:shadow-[0_0_22px_rgba(20,215,231,0.12)]">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className="hidden rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-bold text-ink shadow-[0_0_24px_rgba(20,215,231,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-sky-200 lg:inline-flex"
        >
          Book Free Consultation
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/20 bg-white/[0.04] text-white shadow-[0_0_20px_rgba(20,215,231,0.08)] transition hover:border-cyan-300/45 hover:bg-cyan-300/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-cyan-300/15 bg-ink/90 px-4 py-5 shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:hidden">
          <div className="mx-auto flex max-w-3xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl border border-transparent px-4 py-3 text-base font-semibold text-slate-200 transition hover:border-cyan-300/15 hover:bg-cyan-300/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 rounded-full bg-white px-4 py-3 text-center font-bold text-ink shadow-[0_0_24px_rgba(20,215,231,0.12)]"
              onClick={() => setOpen(false)}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
