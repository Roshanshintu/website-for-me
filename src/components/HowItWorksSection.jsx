import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Career Profile Review',
    description:
      'We review your experience, technical skills, target roles, and career goals to identify gaps and create a focused job-search strategy.'
  },
  {
    number: '02',
    title: 'Resume and Profile Optimization',
    description:
      'We prepare an ATS-friendly resume and improve your professional profile using role-specific keywords, clear achievements, and relevant technical experience.'
  },
  {
    number: '03',
    title: 'Job Search and Marketing Support',
    description:
      'We help position and market your profile for suitable opportunities while guiding you through applications, recruiter communication, and job-search activities.'
  },
  {
    number: '04',
    title: 'Interview and Offer Support',
    description:
      'We provide technical and behavioral interview preparation, mock interviews, feedback, and offer guidance to help you confidently complete the hiring process.'
  }
];

const desktopCardPositions = [
  'left-0 top-0',
  'left-[25.5%] top-[13.5rem]',
  'right-[25.5%] top-0',
  'right-0 top-[13.5rem]'
];

function TimelineStep({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.45, margin: '-10% 0px -10% 0px' });

  return (
    <motion.article
      ref={ref}
      className={`group relative rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/55 hover:bg-white/[0.06] sm:p-6 lg:absolute lg:w-[23.5%] ${desktopCardPositions[index]}`}
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -inset-px rounded-[1.35rem] bg-[radial-gradient(circle_at_24px_24px,rgba(103,232,249,0.2),transparent_8rem)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <motion.span
          className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-300/55 bg-black text-sm font-black text-white shadow-[0_0_26px_rgba(20,215,231,0.35)]"
          animate={{
            scale: inView ? [1, 1.08, 1.04] : 1,
            boxShadow: inView ? '0 0 38px rgba(20,215,231,0.68)' : '0 0 22px rgba(20,215,231,0.28)'
          }}
          transition={{ duration: 1.8, repeat: inView ? Infinity : 0, repeatType: 'mirror', ease: 'easeInOut' }}
        >
          {step.number}
        </motion.span>
        <div className="relative z-10">
          <h3 className="text-lg font-black leading-snug text-white sm:text-xl">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-[0.95rem]">{step.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function HowItWorksSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 45%']
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, mass: 0.35 });

  return (
    <section id="process" ref={sectionRef} className="relative overflow-hidden bg-black px-5 py-20 md:px-12 lg:px-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,215,231,0.13),transparent_30rem),radial-gradient(circle_at_16%_78%,rgba(56,189,248,0.08),transparent_22rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Process</p>
          <h2 className="bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl lg:text-6xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A clear, focused support path from profile review to interview and offer readiness.
          </p>
        </motion.div>

        <div className="relative hidden h-[30rem] lg:block">
          <div className="absolute inset-x-[5%] top-8 h-[22rem] rounded-full bg-cyan-400/[0.035] blur-3xl" />
          <svg className="absolute inset-x-0 top-10 h-[20rem] w-full overflow-visible" viewBox="0 0 1280 320" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="processFlowGradient" x1="80" y1="50" x2="1200" y2="270" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0891b2" stopOpacity="0.2" />
                <stop offset="0.45" stopColor="#67e8f9" />
                <stop offset="1" stopColor="#2563eb" stopOpacity="0.35" />
              </linearGradient>
              <filter id="processSignalGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M92 90 C228 16 364 36 472 142 C596 266 742 284 846 154 C954 20 1084 48 1194 224"
              stroke="rgba(255,255,255,0.09)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <motion.path
              d="M92 90 C228 16 364 36 472 142 C596 266 742 284 846 154 C954 20 1084 48 1194 224"
              stroke="url(#processFlowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
            <circle r="7" fill="#67e8f9" filter="url(#processSignalGlow)">
              <animateMotion
                dur="6.8s"
                repeatCount="indefinite"
                path="M92 90 C228 16 364 36 472 142 C596 266 742 284 846 154 C954 20 1084 48 1194 224"
              />
            </circle>
          </svg>
          <div className="absolute left-[7%] top-[4.3rem] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.85)]" />
          <div className="absolute left-[36.5%] top-[8.05rem] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.85)]" />
          <div className="absolute right-[33.2%] top-[8.8rem] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.85)]" />
          <div className="absolute right-[5.8%] top-[14.2rem] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.85)]" />

          <div className="relative h-full">
            {steps.map((step, index) => (
              <TimelineStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="relative grid gap-5 lg:hidden">
          <svg className="absolute left-4 top-8 h-[calc(100%-4rem)] w-14 overflow-visible" viewBox="0 0 56 520" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path d="M28 0 C4 80 52 128 28 208 C4 300 52 360 28 520" stroke="rgba(255,255,255,0.11)" strokeWidth="2" strokeLinecap="round" />
            <motion.path
              d="M28 0 C4 80 52 128 28 208 C4 300 52 360 28 520"
              stroke="#67e8f9"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
            <circle r="5" fill="#67e8f9">
              <animateMotion dur="6.8s" repeatCount="indefinite" path="M28 0 C4 80 52 128 28 208 C4 300 52 360 28 520" />
            </circle>
          </svg>
          {steps.map((step, index) => (
            <TimelineStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
