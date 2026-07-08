import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section className="bg-black/20 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by teams that need hiring support they can count on."
          description="Client stories are represented with original sample testimonials that reflect the professional, responsive service Talent Warriors provides."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="glass-panel rounded-lg p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Quote className="mb-5 text-electric" size={30} />
              <p className="leading-8 text-slate-200">"{testimonial.quote}"</p>
              <div className="mt-7 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-md bg-gradient-to-br from-electric/80 to-azure/80 text-lg font-extrabold text-ink">
                  {testimonial.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
