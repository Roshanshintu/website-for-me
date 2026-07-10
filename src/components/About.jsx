import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { aboutCards } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Who We Are"
          title="A modern career support partner built for IT candidates."
          description="Corevant Systems helps candidates build strong careers through ATS resume preparation, technical interview support, candidate marketing support, and career-focused training."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                className="glass-panel rounded-lg p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-electric/12 text-electric">
                  <Icon size={23} />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
