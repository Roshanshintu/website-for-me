import { Linkedin, Twitter, Youtube } from 'lucide-react';
import { footerServices, navLinks } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.75fr_0.85fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-electric/40 bg-electric/10 text-sm font-extrabold text-electric">
                TW
              </span>
              <span className="text-lg font-bold text-white">Talent Warriors</span>
            </a>
            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Talent Warriors connects businesses with skilled professionals through accurate recruitment, staffing,
              onboarding support, and long-term workforce partnership.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-sm text-slate-400 hover:text-electric">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Services</h3>
            <div className="space-y-3">
              {footerServices.map((service) => (
                <a key={service} href="#services" className="block text-sm text-slate-400 hover:text-electric">
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>info@talentwarriors.com</p>
              <p>+1 000 000 0000</p>
              <p>United States</p>
            </div>
            <h3 className="mb-4 mt-6 font-bold text-white">Social</h3>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#home"
                  aria-label="Social media"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:border-electric/50 hover:text-electric"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          Copyright (c) 2026 Talent Warriors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
