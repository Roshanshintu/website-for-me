import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import SectionHeader from './SectionHeader';
import { visualMetrics } from '../data';

export default function InteractiveVisual() {
  return (
    <section className="bg-black/20 py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Recruitment Network"
            title="A connected hiring engine for clients, recruiters, and qualified candidates."
            description="Our workflow connects requirement intake, targeted sourcing, screening, interview coordination, and onboarding support into one smooth hiring experience."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {visualMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <Icon className="mb-4 text-electric" size={22} />
                  <p className="text-2xl font-extrabold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div
          className="glass-panel neon-line h-[420px] overflow-hidden rounded-lg lg:h-[520px]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.7 }}
        >
          <ThreeScene compact />
        </motion.div>
      </div>
    </section>
  );
}
