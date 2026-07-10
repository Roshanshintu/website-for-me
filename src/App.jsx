import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  SearchCheck,
  Target,
  UserCheck,
  X
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import HowItWorksSection from './components/HowItWorksSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' }
];

const pageMeta = {
  '/': {
    title: 'Corevant Systems | Resume, Interview & Career Support',
    description:
      'ATS resumes, interview preparation, candidate marketing, job search guidance, and career training for IT candidates.'
  },
  '/about': {
    title: 'About Corevant Systems | Career Consulting Support',
    description:
      'Learn how Corevant Systems supports candidates with practical resume, interview, profile, and job search guidance.'
  },
  '/services': {
    title: 'Corevant Systems Services | IT Career Support',
    description:
      'Explore ATS resume preparation, technical interview support, candidate marketing, job search guidance, and career training.'
  },
  '/process': {
    title: 'How It Works | Corevant Systems',
    description:
      'A focused career support process from profile review to resume optimization, candidate marketing, interviews, and offer readiness.'
  },
  '/contact': {
    title: 'Contact Corevant Systems | Book Free Consultation',
    description:
      'Contact Corevant Systems for personalized IT career support, resume preparation, interview guidance, and job search help.'
  }
};

const tickerItems = [
  'Backend Engineer',
  'UI/UX Designer',
  'Cloud Architect',
  'DevOps Engineer',
  'Software Developer',
  'Data Analyst',
  'Full Stack Engineer',
  'Product Manager',
  'QA Automation',
  'Business Analyst'
];

const advantages = [
  {
    title: 'ATS-focused resume strategy',
    icon: Handshake,
    text: 'We prepare resumes with clean formatting, role-based keywords, and recruiter expectations in mind.'
  },
  {
    title: 'Role-based technical interview guidance',
    icon: UserCheck,
    text: 'Candidates prepare for technical questions, project discussions, scenarios, and confident communication.'
  },
  {
    title: 'Real-time project explanation support',
    icon: SearchCheck,
    text: 'We help candidates explain project work, tools, architecture, responsibilities, and business impact clearly.'
  },
  {
    title: 'Candidate marketing assistance',
    icon: Target,
    text: 'We help candidates improve visibility, apply strategically, and present their background professionally.'
  },
  {
    title: 'LinkedIn and profile optimization',
    icon: UserCheck,
    text: 'We improve LinkedIn headlines, summaries, skills, experience sections, and keywords for recruiter reach.'
  },
  {
    title: 'Training and career support',
    icon: SearchCheck,
    text: 'Training focuses on technical skills, project understanding, tools, workflows, and job readiness.'
  }
];

const pricingPlans = [
  [
    'Resume Starter Plan',
    'ATS resume preparation, keyword optimization, professional formatting, and basic profile suggestions.'
  ],
  [
    'Career Growth Plan',
    'ATS resume, LinkedIn optimization, technical interview guidance, mock interview support, and candidate marketing strategy.'
  ],
  [
    'Complete Job Support Plan',
    'Resume preparation, LinkedIn optimization, candidate marketing support, job search guidance, technical interview preparation, training, and ongoing support.'
  ]
];

const impactStats = [
  ['500+', 'Profiles Reviewed'],
  ['300+', 'ATS Resumes Prepared'],
  ['150+', 'Mock Interviews Supported'],
  ['95%', 'Client Satisfaction']
];

const services = [
  {
    title: 'ATS Resume Preparation',
    text: 'Professional ATS-friendly resumes tailored to your target role, skills, experience, and recruiter expectations.'
  },
  {
    title: 'Technical Interview Support',
    text: 'Role-based interview preparation with project explanation, technical questions, real-time scenarios, and confidence building.'
  },
  {
    title: 'Candidate Marketing Support',
    text: 'Complete guidance to improve profile visibility, apply strategically, and present your experience professionally.'
  },
  {
    title: 'Job Search Guidance',
    text: 'Clear guidance for role targeting, applications, recruiter communication, and practical search planning.'
  },
  {
    title: 'Training and Career Support',
    text: 'Focused training to improve technical skills, project understanding, workflows, and market readiness.'
  },
  {
    title: 'End-to-End Career Support for IT Candidates',
    text: 'Resume, interview, candidate marketing, job search, LinkedIn, and training support in one guided path.'
  }
];

const reviews = [
  {
    name: 'Jordan Ellis',
    role: 'Software Engineer',
    quote:
      'The resume and interview support helped me present my experience more professionally and confidently during interviews.'
  },
  {
    name: 'Maya Patel',
    role: 'Business Analyst',
    quote:
      'Their candidate marketing guidance and ATS resume preparation made my profile stronger and more aligned with recruiter expectations.'
  },
  {
    name: 'Anthony Brooks',
    role: 'Data Analyst',
    quote:
      'The technical interview support helped me explain my projects clearly and answer real-time questions with confidence.'
  }
];

const faqs = [
  [
    'What services do you provide?',
    'We help candidates with ATS-friendly resume preparation, technical interview support, candidate marketing support, job search guidance, and training.'
  ],
  [
    'Do you prepare ATS-friendly resumes?',
    'Yes. We create professional ATS-friendly resumes with the right keywords, clean formatting, role-based skills, and strong project or experience explanations.'
  ],
  [
    'Do you provide technical interview support?',
    'Yes. We support candidates with role-based technical interview preparation, common interview questions, project explanation practice, and mock interview guidance.'
  ],
  [
    'What is candidate marketing support?',
    'Candidate marketing support means helping candidates improve job search visibility through resume positioning, profile improvement, application guidance, and role-based targeting.'
  ],
  [
    'Do you provide training for candidates?',
    "Yes. We provide practical training based on the candidate's target role, technical skills, project explanation, interview preparation, and job market needs."
  ],
  [
    'Can freshers also use your services?',
    'Yes. We support freshers, career switchers, and experienced professionals by preparing their resume and guiding them for interviews and job applications.'
  ],
  [
    'Do you guarantee job placement?',
    'We do not promise fake job guarantees. We help candidates improve their resume, interview performance, and job search strategy to increase their chances of getting selected.'
  ],
  [
    'Which roles do you support?',
    'We support IT and professional roles such as Software Engineer, Data Analyst, Data Scientist, QA Engineer, Business Analyst, Cloud Engineer, DevOps Engineer, and other technology roles.'
  ],
  [
    'How do you start the process?',
    "We first understand the candidate's background, target role, skills, experience, and job goals. Based on that, we prepare a customized resume and support plan."
  ],
  [
    'Why should candidates choose your service?',
    'Candidates choose us because we provide practical, professional, and role-focused support for resumes, interviews, training, and job search preparation.'
  ]
];

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname || '/');

  useEffect(() => {
    const updatePath = () => setPathname(window.location.pathname || '/');

    const handleLinkClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest('a[href]');

      if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const url = new URL(link.href);

      if (url.origin !== window.location.origin || !url.pathname.startsWith('/')) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, '', url.pathname);
      setPathname(url.pathname || '/');
    };

    document.addEventListener('click', handleLinkClick);
    window.addEventListener('popstate', updatePath);
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('popstate', updatePath);
    };
  }, []);

  return pathname;
}

function BrandMark({ compact = false, className = '' }) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden drop-shadow-[0_0_18px_rgba(20,215,231,0.28)] ${
        compact ? 'h-12 w-12' : 'h-14 w-48 sm:w-56 lg:w-60'
      } ${className}`}
      aria-hidden="true"
    >
      <img
        src="/corevant-logo.png"
        alt=""
        className={compact ? 'absolute max-w-none' : 'h-full w-full object-contain'}
        style={compact ? { height: 52, width: 160, left: -10, top: -2, objectFit: 'contain' } : undefined}
      />
    </span>
  );
}

function Navbar({ pathname }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] border-b border-cyan-300/15 bg-[#050506]/68 px-5 shadow-[0_18px_70px_rgba(0,0,0,0.38),0_0_28px_rgba(20,215,231,0.08)] backdrop-blur-2xl transition-all duration-300 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <nav className="relative flex h-[72px] w-full items-center justify-between gap-5">
        <a href="/" className="flex items-center" aria-label="Corevant Systems home">
          <BrandMark />
          <span className="sr-only">Corevant Systems</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-cyan-300/25 bg-cyan-300/10 text-white shadow-[0_0_22px_rgba(20,215,231,0.12)]'
                    : 'border-transparent text-zinc-300 hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-white hover:shadow-[0_0_22px_rgba(20,215,231,0.12)]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="/contact"
          className="hidden rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-bold text-black shadow-[0_0_24px_rgba(20,215,231,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-sky-200 md:inline-flex"
        >
          Book Free Consultation
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/20 bg-white/[0.04] text-white shadow-[0_0_20px_rgba(20,215,231,0.08)] transition hover:border-cyan-300/45 hover:bg-cyan-300/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open ? (
        <div className="w-full pb-5 md:hidden">
          <div className="grid gap-2 rounded-2xl border border-cyan-300/15 bg-[#050506]/88 p-3 shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl border border-transparent px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/15 hover:bg-cyan-300/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a href="/contact" className="rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-black">
              Book Free Consultation
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Ticker() {
  return (
    <div className="roles-ticker-shell absolute left-1/2 top-20 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden py-1.5">
      <div className="roles-ticker-pill overflow-hidden">
        <div className="ticker-track roles-ticker-track flex w-max">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="roles-ticker-item flex shrink-0 items-center gap-7 px-7">
              {item}
              <span className="roles-ticker-dot">.</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-3xl text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 text-sm font-black uppercase text-sky-400">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-zinc-400">{text}</p> : null}
    </motion.div>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-[#050506] px-5 pb-20 pt-36 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.16),transparent_28rem),radial-gradient(circle_at_78%_12%,rgba(37,99,235,0.14),transparent_24rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      <motion.div
        className="relative mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
        <h1 className="bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{text}</p>
      </motion.div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050506] px-5 py-20 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,215,231,0.16),transparent_26rem)]" />
      <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-12">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Start Now</p>
        <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Build a stronger IT career profile.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
          Book a free consultation to review your resume, target roles, interview readiness, and job search plan.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-black transition hover:bg-sky-300"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}

function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return (
    <section className="hero-animated-bg turing-hero relative flex min-h-screen w-full max-w-[100vw] flex-col justify-end overflow-hidden bg-[#050506] px-5 pb-16 pt-40 md:px-12 md:pb-20 lg:px-20">
      <Ticker />

      {!reduceMotion && !videoFailed ? (
        <video
          className="hero-video absolute left-0 top-[-16%] z-0 h-[122%] w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        >
          <source
            src="https://mybycketvercelprojecttest.s3.sa-east-1.amazonaws.com/animation-bg.mp4"
            type="video/mp4"
          />
        </video>
      ) : null}

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_16%_26%,rgba(14,165,233,0.24),transparent_31rem),radial-gradient(circle_at_88%_20%,rgba(37,99,235,0.16),transparent_34rem),linear-gradient(90deg,rgba(0,132,255,0.18),transparent_42%,rgba(0,0,0,0.18))]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.58)_0%,rgba(5,5,6,0.24)_44%,rgba(5,5,6,0.94)_100%)]" />
      <div className="hero-light-sweep absolute inset-0 z-0" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

      <div className="relative z-10 grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.65fr)] lg:gap-16">
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <motion.p
            className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200 shadow-[0_0_26px_rgba(20,215,231,0.12)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Career systems for IT candidates
          </motion.p>
          <h1 className="hero-title max-w-6xl text-5xl font-light leading-[0.98] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.75, delay: 0.16, ease: 'easeOut' }}
            >
              Accelerate your
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-white via-cyan-100 to-zinc-500 bg-clip-text pb-2 text-transparent"
              initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.75, delay: 0.28, ease: 'easeOut' }}
            >
              IT career growth
            </motion.span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg lg:text-xl">
            Corevant Systems helps candidates become job-ready through ATS resumes, technical interview preparation,
            candidate marketing, job search guidance, and focused career training.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="group inline-flex justify-center rounded-md bg-[#0084ff] px-7 py-4 font-bold text-white shadow-[0_0_34px_rgba(0,132,255,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0ea5e9]"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="/services"
              className="inline-flex justify-center rounded-md border border-white/10 bg-white/[0.03] px-7 py-4 font-bold text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:text-white"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: 'easeOut' }}
        >
          {[
            ['500+', 'Profiles reviewed'],
            ['300+', 'ATS resumes prepared']
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.06]"
            >
              <div className="text-5xl font-light leading-none text-white md:text-6xl">{value}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">{label}</div>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-300/18 bg-white/[0.045] p-5 shadow-[0_0_55px_rgba(20,215,231,0.12)] backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="mb-4 flex items-center justify-between text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                <span>Career readiness</span>
                <span>Live path</span>
              </div>
              <div className="grid gap-3">
                {['ATS resume strategy', 'Technical interview support', 'Candidate marketing guidance'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.85)]" />
                    <span className="text-sm font-semibold text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative bg-[#08090b] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Career Growth Partner"
          title="Your Career Growth Partner"
          text="We help candidates build strong professional profiles, improve interview confidence, and prepare for real job market opportunities through resume preparation, technical guidance, candidate marketing, job search support, and role-based training."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 transition hover:-translate-y-2 hover:border-sky-400/50"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-white text-black">
                  <Icon size={23} />
                </span>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-[#050506] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Career Impact"
          title="Built for serious IT job seekers"
          text="Practical support, clean execution, and professional guidance for candidates preparing for the USA job market."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map(([value, label]) => (
            <motion.div
              key={label}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8 text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-5xl font-black text-white">{value}</p>
              <p className="mt-3 text-sm font-semibold text-zinc-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-[#050506] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Services" title="Our Career Support Services" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(20,215,231,0.12)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <BriefcaseBusiness className="mb-5 text-sky-300 transition group-hover:scale-110" size={25} />
              <h3 className="font-black">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="bg-[#08090b] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Pricing" title="Flexible Career Support Plans" />
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map(([name, description], index) => (
            <motion.div
              key={name}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <p className="text-2xl font-black text-white">{name}</p>
              <p className="mt-4 leading-7 text-zinc-400">{description}</p>
              <a href="/contact" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-sky-300">
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[#08090b] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Testimonials" title="What Candidates Say" />
        <div className="grid gap-5 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              className="rounded-[1.5rem] border border-white/10 bg-black/30 p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <p className="text-lg leading-8 text-zinc-200">"{review.quote}"</p>
              <div className="mt-7 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white font-black text-black">
                  {review.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <div>
                  <p className="font-black">{review.name}</p>
                  <p className="text-sm text-zinc-400">{review.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-[#050506] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          text="Clear answers about our resume, interview, training, candidate marketing, and job search support."
        />
        <div className="grid gap-4">
          {faqs.map(([q, a], index) => (
            <motion.article
              key={q}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
            >
              <h3 className="font-black">{q}</h3>
              <p className="mt-2 text-zinc-400">{a}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-[#08090b] px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase text-sky-400">Contact</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Start Your Career Growth Journey</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Ready to improve your resume, prepare for interviews, and move forward in your job search? Contact us today
            for personalized career support.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              [Mail, 'info@corevantsystems.com'],
              [Phone, '+1 000 000 0000'],
              [MapPin, 'United States']
            ].map(([Icon, text]) => (
              <div key={text} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                <Icon className="text-sky-300" size={22} />
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/30 p-6 sm:grid-cols-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <input className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none focus:border-sky-400" placeholder="Full Name" />
          <input className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none focus:border-sky-400" placeholder="Email Address" />
          <input className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none focus:border-sky-400" placeholder="Phone Number" />
          <select className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none focus:border-sky-400">
            <option>Target Job Role</option>
            <option>Software Developer</option>
            <option>Data Analyst</option>
            <option>Business Analyst</option>
            <option>QA Automation</option>
          </select>
          <textarea className="min-h-36 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none focus:border-sky-400 sm:col-span-2" placeholder="Tell us about your target role and career support needs" />
          <button className="rounded-full bg-white px-7 py-4 font-black text-black transition hover:bg-sky-300 sm:col-span-2">
            Book Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050506] px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <a href="/" className="flex items-center gap-3">
            <BrandMark className="h-16 w-56 sm:w-64" />
            <span className="sr-only">Corevant Systems</span>
          </a>
          <p className="mt-4 text-zinc-400">
            Corevant Systems helps candidates build strong careers through ATS resume preparation, technical interview
            support, candidate marketing support, job search guidance, and career-focused training.
          </p>
        </div>
        <div>
          <h3 className="font-black">Services</h3>
          <p className="mt-4 leading-8 text-zinc-400">
            ATS Resume Preparation
            <br />
            Technical Interview Support
            <br />
            Candidate Marketing Support
            <br />
            Job Search Guidance
            <br />
            Training and Career Support
          </p>
        </div>
        <div>
          <h3 className="font-black">Pages</h3>
          <div className="mt-4 grid gap-2 text-zinc-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Contact Info</h3>
          <p className="mt-4 leading-8 text-zinc-400">
            +1 000 000 0000
            <br />
            info@corevantsystems.com
            <br />
            United States
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-zinc-500">
        Copyright (c) 2026 Corevant Systems. All rights reserved.
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <SuccessStoriesSection />
      <StatsSection />
      <ServicesSection />
      <CTASection />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Corevant Systems"
        title="Professional career support for IT candidates."
        text="We help candidates build stronger profiles, prepare for interviews, and navigate the USA job market with practical, role-focused support."
      />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Resume, interview, marketing, and training support."
        text="Choose focused support for the areas that matter most: ATS resumes, interview readiness, profile visibility, job search guidance, and career training."
      />
      <ServicesSection />
      <PricingSection />
      <SuccessStoriesSection />
      <CTASection />
    </>
  );
}

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A clear path from profile review to offer readiness."
        text="Our process keeps career support organized, practical, and aligned with your target IT role."
      />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start your career growth journey."
        text="Tell us about your background and target role. We will help you understand the right next step for your job search."
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="Page Not Found"
        title="This page is not available."
        text="Use the navigation menu to continue exploring Corevant Systems career support services."
      />
      <CTASection />
    </>
  );
}

function App() {
  const pathname = usePathname();

  const page = useMemo(() => {
    const routes = {
      '/': <HomePage />,
      '/about': <AboutPage />,
      '/services': <ServicesPage />,
      '/process': <ProcessPage />,
      '/contact': <ContactPage />
    };

    return routes[pathname] || <NotFoundPage />;
  }, [pathname]);

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/'];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050506] text-white">
      <Navbar pathname={pathname} />
      <main>{page}</main>
      <Footer />
    </div>
  );
}

export default App;
