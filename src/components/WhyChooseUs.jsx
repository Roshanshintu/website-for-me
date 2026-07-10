import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { strengths } from '../data';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Staffing support built for speed, accuracy, and long-term fit."
          description="Corevant Systems combines ATS resume strategy, interview preparation, candidate marketing and job search guidance, and career-focused training so candidates can move forward with confidence."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.article
                key={strength.title}
                className="glass-panel rounded-lg p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-electric/12 text-electric"
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                >
                  <Icon size={23} />
                </motion.div>
                <h3 className="font-bold text-white">{strength.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{strength.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
