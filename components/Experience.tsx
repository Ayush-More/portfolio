'use client';

import { motion } from 'framer-motion';

type ExperienceItem = {
  id: number;
  company: string;
  role: string;
  duration: string;
  headline: string;
  wins: string[];
  tech: string[];
  icon: string;
  accent: string;
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Healtether Pvt LTD',
    role: 'Web Developer Intern',
    duration: 'Jan 2024 – Nov 2024',
    headline: 'Scaled patient-facing analytics with modular APIs and instant search.',
    wins: [
      'Rebuilt core APIs with SOLID patterns so new features ship without regressions.',
      'Integrated Elastic Search, cutting data discovery time for product teams.',
      'Synced Redux + useLoaderData() for lean data flow and fewer redundant calls.',
    ],
    tech: ['Node.js', 'Elastic Search', 'Redux', 'Tailwind'],
    icon: '🩺',
    accent: 'from-primary-500 via-primary-400 to-secondary-400',
  },
  {
    id: 2,
    company: 'Sector Seven Japan',
    role: 'Backend Developer Intern',
    duration: 'Mar 2025 – Jun 2025',
    headline: 'Made fintech payouts reliable with audited flows and customer comms.',
    wins: [
      'Delivered payout, referral bonus, and leveling APIs with accurate ledgers.',
      'Ran weekly demos with stakeholders to align feature rollout and feedback.',
      'Upgraded admin operations with transaction trails ready for audits.',
    ],
    tech: ['Express', 'PostgreSQL', 'AWS SES', 'Notion'],
    icon: '🛡️',
    accent: 'from-secondary-500 via-secondary-400 to-primary-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8faff] to-[#f3fff8]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70%] h-48 bg-gradient-to-r from-primary-200/30 via-transparent to-secondary-200/30 blur-3xl" />
      <div className="absolute top-16 -left-24 w-64 h-64 bg-primary-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary-200/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-white/70 shadow-soft text-primary-700 text-[11px] font-semibold tracking-[0.32em] uppercase">
              Experience Timeline
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Designing Growth Through Real-World Missions
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              From healthcare analytics to fintech payouts, I’ve owned the build-measure-loop—shipping performant code, aligning stakeholders, and leaving systems better than I found them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:max-w-xs">
            {[
              { label: 'Sprints shipped', value: '45+' },
              { label: 'Team size', value: '5–12' },
              { label: 'Rollouts', value: '12' },
              { label: 'Happy stakeholders', value: '100%' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur px-4 py-3 shadow-soft"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-semibold mb-1">
                  {stat.label}
                </p>
                <span className="text-xl font-bold text-gray-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative pl-14">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-12"
          >
            {experiences.map((experience) => (
              <motion.article
                key={experience.id}
                variants={cardVariants}
                className="relative pl-8"
              >
                <div className="absolute left-6 top-10 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-white bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 shadow-glow-primary" />

                <div className="relative rounded-[32px] bg-white/85 backdrop-blur border border-white/60 shadow-vibrant overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${experience.accent} opacity-20`} />
                  <div className="relative p-6 sm:p-8 space-y-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-primary-50 border border-white/70 shadow-soft text-2xl">
                          {experience.icon}
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.32em] text-gray-500 font-semibold mb-1">
                            {experience.duration}
                          </p>
                          <h3 className="text-2xl font-bold text-gray-900">{experience.company}</h3>
                          <p className="text-sm font-semibold text-primary-600 uppercase tracking-[0.22em]">
                            {experience.role}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/70 text-[11px] font-semibold text-primary-600 border border-primary-200">
                        Milestone
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {experience.headline}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {experience.wins.map((win, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-primary-100/70 bg-white/90 px-4 py-3 shadow-soft/40 flex items-start gap-3"
                        >
                          <svg className="w-5 h-5 text-primary-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 leading-relaxed">{win}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {experience.tech.map((tag) => (
                        <span
                          key={`${experience.id}-${tag}`}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-white to-primary-50 border border-primary-100 text-primary-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.32em]">
            Next Chapter
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            I’m excited to bring this momentum to teams shipping ambitious products. Let’s build the next breakthrough together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-secondary-500 to-primary-500 text-white text-sm font-semibold shadow-vibrant hover:shadow-glow-primary transition-transform hover:-translate-y-0.5"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-300 bg-white text-sm font-semibold text-primary-600 shadow-soft hover:border-primary-500 transition-transform hover:-translate-y-0.5"
            >
              View Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
