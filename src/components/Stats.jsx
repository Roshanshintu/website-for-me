import { motion } from 'framer-motion';
import Counter from './Counter';
import SectionHeader from './SectionHeader';
import { stats } from '../data';

export default function Stats() {
  return (
    <section className="bg-black/20 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Talent Impact"
          title="Recruiting momentum measured in real outcomes."
          description="Our staffing work is built around consistent communication, qualified shortlists, and dependable placement support."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="neon-line rounded-lg bg-white/[0.035] p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <p className="text-4xl font-extrabold text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
