import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Factory,
  FileText,
  Handshake,
  Headphones,
  HeartPulse,
  LineChart,
  MailCheck,
  MonitorCog,
  Network,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Target,
  Timer,
  UserCheck,
  UsersRound
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' }
];

export const stats = [
  { label: 'Candidates Screened', value: 500, suffix: '+' },
  { label: 'Successful Placements', value: 100, suffix: '+' },
  { label: 'Industry Clients', value: 25, suffix: '+' },
  { label: 'Client Satisfaction', value: 95, suffix: '%' }
];

export const aboutCards = [
  {
    title: 'Trusted Career Support Partner',
    description: 'Reliable guidance for candidates who want stronger resumes, sharper interviews, and better job search visibility.',
    icon: Handshake
  },
  {
    title: 'Focused Job Readiness',
    description: 'Structured resume, profile, and interview support designed around each candidate target role.',
    icon: Timer
  },
  {
    title: 'Role-Focused Preparation',
    description: 'Career support aligned with current IT hiring standards, recruiter expectations, and USA job market needs.',
    icon: Target
  }
];

export const services = [
  {
    title: 'ATS Resume Preparation',
    description: 'Professional ATS-friendly resumes tailored to target roles, skills, experience, and recruiter expectations.',
    icon: SearchCheck
  },
  {
    title: 'Technical Interview Support',
    description: 'Role-based interview preparation with project explanation, technical questions, and real-time scenarios.',
    icon: MonitorCog
  },
  {
    title: 'Candidate Marketing Support',
    description: 'Guidance to improve profile visibility, apply strategically, and present experience professionally.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Mock Interview Preparation',
    description: 'Practice sessions to improve communication, technical explanation, confidence, and interview performance.',
    icon: HeartPulse
  },
  {
    title: 'LinkedIn Profile Optimization',
    description: 'Professional LinkedIn headline, summary, skills, experience, and keyword optimization for recruiter reach.',
    icon: Stethoscope
  },
  {
    title: 'Career Training',
    description: 'Market-focused training to improve technical skills, project understanding, tools, and job readiness.',
    icon: FileText
  }
];

export const industries = [
  { title: 'Information Technology', description: 'Engineering, cloud, data, QA, cybersecurity, help desk, and product teams.', icon: Code2 },
  { title: 'Healthcare', description: 'Clinical support, medical billing, care administration, and patient operations.', icon: HeartPulse },
  { title: 'Finance', description: 'Accounting, analysis, back office, compliance, and revenue operations talent.', icon: Banknote },
  { title: 'Retail', description: 'Store operations, merchandising, customer experience, sales, and support teams.', icon: ShoppingBag },
  { title: 'Manufacturing', description: 'Plant operations, quality, logistics, administration, and technical support.', icon: Factory },
  { title: 'Administrative Support', description: 'Coordinators, office staff, assistants, data entry, and operations support.', icon: ClipboardCheck },
  { title: 'Sales & Marketing', description: 'Demand generation, account teams, inside sales, brand, and campaign talent.', icon: LineChart },
  { title: 'Customer Support', description: 'Support representatives, service desks, client operations, and success teams.', icon: Headphones }
];

export const processSteps = [
  {
    title: 'Profile Audit',
    description: 'We review background, skills, resume, LinkedIn profile, target role, and career goals.',
    icon: ClipboardCheck
  },
  {
    title: 'Resume & Profile Setup',
    description: 'We prepare an ATS-friendly resume and improve profile positioning for better recruiter visibility.',
    icon: SearchCheck
  },
  {
    title: 'Interview Preparation',
    description: 'Candidates practice technical questions, project explanation, scenarios, and communication.',
    icon: UserCheck
  },
  {
    title: 'Candidate Marketing Guidance',
    description: 'We guide profile visibility, application strategy, and role-focused job search presentation.',
    icon: MailCheck
  },
  {
    title: 'Mock Interview Support',
    description: 'Practice sessions help candidates build confidence and improve interview performance.',
    icon: CheckCircle2
  },
  {
    title: 'Career Growth Support',
    description: 'We support profile updates, feedback, training, and continued job readiness.',
    icon: ShieldCheck
  }
];

export const strengths = [
  { title: 'ATS-focused resume strategy', description: 'Clean formatting, role keywords, and recruiter-friendly profile presentation.', icon: BadgeCheck },
  { title: 'Role-based interview guidance', description: 'Technical preparation shaped around target roles, tools, projects, and scenarios.', icon: Timer },
  { title: 'Real-time project explanation', description: 'Support for explaining project work, responsibilities, tools, and business impact.', icon: Network },
  { title: 'Personalized candidate marketing', description: 'Guidance to improve visibility, applications, and job search positioning.', icon: Target },
  { title: 'LinkedIn optimization', description: 'Professional headline, summary, skills, and keyword improvements for recruiter reach.', icon: ClipboardCheck },
  { title: 'Market-ready career training', description: 'Training focused on job readiness, technical confidence, and interview performance.', icon: Handshake }
];

export const testimonials = [
  {
    quote: 'Corevant Systems helped me rewrite my resume and explain my project work with much more confidence during interviews.',
    name: 'Jordan Ellis',
    role: 'Software Engineer',
    company: 'Candidate'
  },
  {
    quote: 'The LinkedIn and candidate marketing and job search guidance made my profile stronger and easier for recruiters to understand.',
    name: 'Maya Patel',
    role: 'Business Analyst',
    company: 'Candidate'
  },
  {
    quote: 'The mock interview support helped me answer technical questions clearly and improve my communication.',
    name: 'Anthony Brooks',
    role: 'Data Analyst',
    company: 'Candidate'
  }
];

export const footerServices = [
  'ATS Resume Preparation',
  'Technical Interview Support',
  'Candidate Marketing Support',
  'Career Training'
];

export const visualMetrics = [
  { label: 'Resume strategy', value: 'ATS', icon: SearchCheck },
  { label: 'Interview practice', value: '1:1', icon: UserCheck },
  { label: 'Profile visibility', value: 'Live', icon: Sparkles },
  { label: 'Career support', value: '360', icon: Building2 }
];
