import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { industries } from '../data';

export default function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Career support across high-demand professional roles."
          description="Corevant Systems supports candidates preparing for technical, professional, operational, and customer-facing career paths."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.title}
                className="group rounded-lg border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-2 hover:border-electric/45 hover:bg-electric/[0.07] hover:shadow-neon"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-electric/12 text-electric transition group-hover:bg-electric group-hover:text-ink">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-white">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{industry.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
