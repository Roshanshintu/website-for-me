import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Start Your Career Growth Journey"
          description="Share your background, target role, and career goals. Corevant Systems will review your needs and help you plan the next step."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            className="glass-panel rounded-lg p-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-2xl font-bold text-white">Start with a focused career support conversation.</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Whether you need a stronger resume, interview preparation, candidate marketing and job search guidance, or career training, we
              will help clarify the right support path.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'info@corevantsystems.com' },
                { icon: Phone, label: 'Phone', value: '+1 000 000 0000' },
                { icon: MapPin, label: 'Location', value: 'United States' }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-electric/12 text-electric">
                      <Icon size={21} />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            className="glass-panel neon-line grid gap-5 rounded-lg p-6 sm:grid-cols-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Name</span>
              <input className="w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Email</span>
              <input type="email" className="w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="you@company.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Phone</span>
              <input type="tel" className="w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="+1 000 000 0000" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Target Role</span>
              <input className="w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="Software Engineer, Data Analyst, QA..." />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Service Required</span>
              <select className="w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-electric">
                <option>ATS Resume Preparation</option>
                <option>Technical Interview Support</option>
                <option>Candidate Marketing Support</option>
                <option>Mock Interview Preparation</option>
                <option>LinkedIn Profile Optimization</option>
                <option>Career Training</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
              <textarea className="min-h-36 w-full resize-y rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="Tell us about your target role, background, and career support needs" />
            </label>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-electric px-7 py-4 font-bold text-ink shadow-neon transition hover:-translate-y-1 hover:bg-white sm:col-span-2"
            >
              Book Free Consultation
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
