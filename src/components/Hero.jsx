import { ArrowRight, BriefcaseBusiness, SearchCheck, ShieldCheck, UserRoundCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="aurora-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 top-20 h-40 bg-gradient-to-r from-transparent via-electric/15 to-transparent blur-3xl" />
      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-electric/25 bg-electric/10 px-4 py-2 text-sm font-semibold text-electric">
            <ShieldCheck size={17} />
            Resume, interview, and career support
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            Helping Candidates Land Better IT Job Opportunities
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Corevant Systems helps candidates build strong careers through ATS resume preparation, technical interview
            support, candidate marketing support, and career-focused training.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-electric px-7 py-4 font-bold text-ink shadow-neon transition hover:-translate-y-1 hover:bg-white"
            >
              Book Free Consultation
              <ArrowRight size={19} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:border-electric/60 hover:text-electric"
            >
              <BriefcaseBusiness size={19} />
              Find a Job
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {['ATS Resume', 'Mock Interviews', 'Candidate Marketing'].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[420px] lg:min-h-[560px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="absolute inset-8 bg-gradient-to-br from-electric/20 via-azure/10 to-transparent blur-2xl" />
          <div className="glass-panel neon-line relative h-[420px] overflow-hidden rounded-lg lg:h-[560px]">
            <ThreeScene />
          </div>
          <motion.div
            className="glass-panel absolute bottom-6 left-0 w-60 rounded-lg p-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-electric/15 text-electric">
                <SearchCheck size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-400">Active screening</p>
                <p className="text-xl font-bold text-white">500+ profiles</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="glass-panel absolute right-0 top-10 hidden w-56 rounded-lg p-4 sm:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-electric">
                <UserRoundCheck size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-400">Shortlist ready</p>
                <p className="text-lg font-bold text-white">Role-fit talent</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
