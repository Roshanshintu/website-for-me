import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export const resumeSlides = [
  {
    id: 1,
    title: 'Resume Transformation',
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQGJ4jP29TNw5Q/feedshare-shrink_800/B56ZllPxz1I8Ag-/0/1758340277177?e=2147483647&v=beta&t=uhJWj19f42OavWB9jqHQpSxNSQ_XNF_EdiV1aBHFgfo'
  },
  {
    id: 2,
    title: 'Interview Confidence',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaCBdHswOliuz-zhde-hfQrTgAX1D1ieChgo7omtfAxZ_uhDOMXUW8AM&s=10'
  },
  {
    id: 3,
    title: 'Candidate Marketing Support',
    image: 'https://resumeoptimizerpro.com/images/blog-ai-resume-writing.jpg'
  },
  {
    id: 4,
    title: 'Career Growth',
    image: 'https://hackernoon.imgix.net/images/8NEjY3nDnKP9s4jxSyfm2Hb7pZI3-b583auw.png?auto=format%2Ccompress&w=3840'
  }
];

const bullets = [
  'ATS-focused resume improvements',
  'Technical interview and mock interview support',
  'Candidate marketing and job search guidance for USA IT roles'
];

export default function SuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % resumeSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const layeredSlides = useMemo(() => {
    const lastIndex = resumeSlides.length - 1;
    const previousIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;

    return {
      previous: resumeSlides[previousIndex],
      active: resumeSlides[activeIndex],
      next: resumeSlides[nextIndex]
    };
  }, [activeIndex]);

  return (
    <motion.section
      id="success-stories"
      className="relative overflow-hidden bg-[#050506] px-5 py-24 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_45%,rgba(56,189,248,0.16),transparent_28rem),radial-gradient(circle_at_78%_42%,rgba(37,99,235,0.13),transparent_26rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <motion.div
          className="relative min-h-[430px] sm:min-h-[520px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          style={{ perspective: '1400px' }}
        >
          <motion.div
            key={`prev-${layeredSlides.previous.id}`}
            className="absolute left-3 top-10 h-[78%] w-[82%] overflow-hidden rounded-[1.6rem] border border-sky-300/15 bg-white/[0.035] shadow-2xl"
            animate={{ x: -28, y: 22, rotateY: -12, scale: 0.86, opacity: 0.38, filter: 'blur(1.5px)' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <img src={layeredSlides.previous.image} alt={layeredSlides.previous.title} className="h-full w-full object-cover opacity-70" loading="lazy" />
          </motion.div>

          <motion.div
            key={`next-${layeredSlides.next.id}`}
            className="absolute right-3 top-16 h-[74%] w-[80%] overflow-hidden rounded-[1.6rem] border border-sky-300/15 bg-white/[0.035] shadow-2xl"
            animate={{ x: 32, y: 10, rotateY: 12, scale: 0.84, opacity: 0.32, filter: 'blur(2px)' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <img src={layeredSlides.next.image} alt={layeredSlides.next.title} className="h-full w-full object-cover opacity-65" loading="lazy" />
          </motion.div>

          <div className="absolute inset-x-6 bottom-4 top-0 rounded-[2rem] bg-sky-400/20 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.article
              key={layeredSlides.active.id}
              className="absolute inset-0 z-10 overflow-hidden rounded-[2rem] border border-sky-300/35 bg-white/[0.06] p-3 shadow-[0_0_70px_rgba(56,189,248,0.3)] backdrop-blur-xl"
              initial={{ opacity: 0, x: 80, scale: 0.94, rotateY: 8 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, x: -80, scale: 0.94, rotateY: -8 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <div className="relative h-full overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/40">
                <img src={layeredSlides.active.image} alt={layeredSlides.active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5">
                  <p className="text-sm font-black uppercase text-sky-300">Resume Showcase</p>
                  <h3 className="mt-1 text-xl font-black text-white">{layeredSlides.active.title}</h3>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="absolute -bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
            {resumeSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-9 bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.8)]' : 'w-2.5 bg-white/25 hover:bg-white/45'}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${slide.title}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm font-black uppercase text-sky-400">Success Stories</p>
          <h2 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Candidate Success Stories
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            We help candidates improve their resumes, strengthen interview confidence, prepare for technical discussions,
            and move forward with stronger job-ready profiles.
          </p>

          <div className="mt-8 grid gap-4">
            {bullets.map((bullet, index) => (
              <motion.div
                key={bullet}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.16 + index * 0.08 }}
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky-400/15 text-sky-300">
                  <CheckCircle2 size={18} />
                </span>
                <p className="font-semibold leading-7 text-white">{bullet}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
