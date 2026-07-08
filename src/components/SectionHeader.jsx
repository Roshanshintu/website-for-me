import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={`mb-12 ${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-electric">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
