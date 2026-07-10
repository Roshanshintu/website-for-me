import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { processSteps } from '../data';

export default function Process() {
  return (
    <section id="process" className="bg-black/20 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Career Support Process"
          title="A clear path from profile review to stronger job readiness."
          description="Our process is structured, responsive, and transparent so clients always know what is moving, what needs attention, and what comes next."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-electric/0 via-electric/60 to-electric/0 lg:left-1/2 lg:block" />
          <div className="space-y-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 === 1;
              return (
                <motion.article
                  key={step.title}
                  className={`relative grid gap-4 lg:grid-cols-2 ${isRight ? '' : 'lg:text-right'}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className={`${isRight ? 'lg:col-start-2' : ''}`}>
                    <div className="glass-panel neon-line relative rounded-lg p-6">
                      <div className={`mb-5 flex items-center gap-4 ${isRight ? '' : 'lg:justify-end'}`}>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-electric text-sm font-extrabold text-ink shadow-neon">
                          {index + 1}
                        </span>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-electric/30 bg-electric/10 text-electric">
                          <Icon size={21} />
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
