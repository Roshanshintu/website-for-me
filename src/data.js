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
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }
];

export const stats = [
  { label: 'Candidates Screened', value: 500, suffix: '+' },
  { label: 'Successful Placements', value: 100, suffix: '+' },
  { label: 'Industry Clients', value: 25, suffix: '+' },
  { label: 'Client Satisfaction', value: 95, suffix: '%' }
];

export const aboutCards = [
  {
    title: 'Trusted Staffing Partner',
    description: 'Reliable hiring support for teams that need capable professionals without slowing business momentum.',
    icon: Handshake
  },
  {
    title: 'Fast Hiring Support',
    description: 'Focused sourcing, screening, and shortlist delivery for urgent IT, non-IT, and healthcare roles.',
    icon: Timer
  },
  {
    title: 'Industry-Focused Recruitment',
    description: 'Recruiters who align skill, culture, role requirements, and workforce goals before every submission.',
    icon: Target
  }
];

export const services = [
  {
    title: 'Core Recruitment',
    description: 'End-to-end recruitment support for professional roles, from requirement mapping to final selection.',
    icon: SearchCheck
  },
  {
    title: 'IT Staffing',
    description: 'Contract, contract-to-hire, and permanent hiring for developers, analysts, cloud, data, and support teams.',
    icon: MonitorCog
  },
  {
    title: 'Non-IT Staffing',
    description: 'Dependable talent for operations, administration, finance, sales, customer support, and business teams.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Healthcare Staffing',
    description: 'Qualified healthcare and office support talent for clinics, care teams, billing, and patient operations.',
    icon: HeartPulse
  },
  {
    title: 'Medical Billing Support',
    description: 'Skilled billing specialists who help healthcare providers improve accuracy, claims, and workflow continuity.',
    icon: Stethoscope
  },
  {
    title: 'Resume Creation Services',
    description: 'Professional resume writing and optimization for candidates preparing for stronger career opportunities.',
    icon: FileText
  },
  {
    title: 'Software Development Hiring',
    description: 'Targeted recruiting for product, engineering, QA, DevOps, and software delivery positions.',
    icon: Code2
  },
  {
    title: 'Temporary & Permanent Staffing',
    description: 'Flexible workforce solutions for short-term coverage, project hiring, long-term roles, and growth teams.',
    icon: UsersRound
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
    title: 'Understand Hiring Needs',
    description: 'We define roles, skills, schedule, culture, budget, and success criteria before the search begins.',
    icon: ClipboardCheck
  },
  {
    title: 'Talent Search',
    description: 'Our recruiters source active and passive candidates using targeted channels and role-specific criteria.',
    icon: SearchCheck
  },
  {
    title: 'Screening & Selection',
    description: 'Candidates are evaluated for skills, communication, availability, expectations, and fit.',
    icon: UserCheck
  },
  {
    title: 'Client Interview',
    description: 'We coordinate interviews, feedback, availability, and next steps to keep hiring moving smoothly.',
    icon: MailCheck
  },
  {
    title: 'Placement & Onboarding',
    description: 'Selected candidates move through offer support, documentation, onboarding, and start-date readiness.',
    icon: CheckCircle2
  },
  {
    title: 'Follow-Up Support',
    description: 'We stay connected after placement to support satisfaction, retention, and workforce success.',
    icon: ShieldCheck
  }
];

export const strengths = [
  { title: 'Skilled recruiters', description: 'Experienced recruiters who understand role details, candidate quality, and hiring urgency.', icon: BadgeCheck },
  { title: 'Fast candidate sourcing', description: 'Search workflows built to identify qualified talent quickly without lowering standards.', icon: Timer },
  { title: 'IT and non-IT hiring support', description: 'Coverage across technical, operational, administrative, healthcare, and professional roles.', icon: Network },
  { title: 'Customized staffing solutions', description: 'Flexible hiring models shaped around your timeline, team structure, and business goals.', icon: Target },
  { title: 'Smooth onboarding', description: 'Coordination support that helps selected candidates move confidently into the role.', icon: ClipboardCheck },
  { title: 'Long-term client support', description: 'Partnership beyond placement with follow-up, feedback, and workforce planning support.', icon: Handshake }
];

export const testimonials = [
  {
    quote: 'Talent Warriors understood our technical requirements quickly and delivered candidates who were prepared, qualified, and aligned with our team culture.',
    name: 'Jordan Ellis',
    role: 'Director of Engineering',
    company: 'CloudBridge Systems'
  },
  {
    quote: 'Their team helped us staff urgent operations roles without sacrificing quality. The communication was clear from intake through onboarding.',
    name: 'Maya Patel',
    role: 'People Operations Lead',
    company: 'Northstar Retail Group'
  },
  {
    quote: 'We needed healthcare billing support on a tight timeline. Talent Warriors brought us dependable professionals and stayed engaged after placement.',
    name: 'Anthony Brooks',
    role: 'Practice Administrator',
    company: 'Riverbend Health'
  }
];

export const footerServices = [
  'Core Recruitment',
  'IT Staffing',
  'Healthcare Staffing',
  'Temporary & Permanent Staffing'
];

export const visualMetrics = [
  { label: 'Verified shortlists', value: '72h', icon: SearchCheck },
  { label: 'Role-fit screening', value: '5x', icon: UserCheck },
  { label: 'Hiring visibility', value: 'Live', icon: Sparkles },
  { label: 'Placement support', value: '360', icon: Building2 }
];
