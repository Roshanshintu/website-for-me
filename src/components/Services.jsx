import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { services } from '../data';

export default function Services() {
  return (
    <section id="services" className="bg-black/20 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Career support services for IT job seekers."
          description="From ATS resumes to interview preparation, LinkedIn optimization, candidate marketing support, and training, our services help candidates become job-ready."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="group neon-line rounded-lg bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-2 hover:bg-electric/[0.08] hover:shadow-neon"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-md border border-electric/25 bg-electric/10 text-electric transition group-hover:scale-105 group-hover:bg-electric group-hover:text-ink">
                  <Icon size={25} />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
