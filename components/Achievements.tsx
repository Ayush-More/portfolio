'use client';

import { motion } from 'framer-motion';

type Achievement = {
  id: number;
  title: string;
  organization: string;
  year: string;
  placement: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  impact: string;
};

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'MSME National Hackathon',
    organization: 'Government of India',
    year: '2023',
    placement: '2nd Place · ₹3 Lakh Grant',
    description:
      'Blockchain-based contract farming that links farmers with enterprises for transparent pricing and assured sourcing.',
    image: '/assets/Achivement%201.png',
    imageAlt: 'Ayush More holding national MSME hackathon trophies',
    highlights: [],
    impact: 'Blockchain · AgriTech · Supply Chain',
  },
  {
    id: 2,
    title: 'Ideathon – Effilearn Startup',
    organization: 'University Innovation Council',
    year: '2022',
    placement: '3rd Prize',
    description:
      'Launched Effilearn, a project-based full-stack program with internships that onboarded 100+ students in year one.',
    image: '/assets/Achivement%202.png',
    imageAlt: 'Effilearn ideathon team receiving award',
    highlights: [],
    impact: 'EdTech · Product · Growth',
  },
];

const stats = [
  { label: 'Grants & Prizes', value: '₹3L+' },
  { label: 'Students Upskilled', value: '100+' },
  { label: 'Industry Partners', value: '10+' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
      <div className="absolute -top-32 -left-24 w-80 h-80 bg-primary-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-accent-200/35 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-64 bg-gradient-to-r from-primary-200/30 via-transparent to-secondary-200/30 blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex items-center bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-soft border border-white/70 text-primary-700 font-semibold tracking-wide uppercase text-xs mb-5">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Achievements & Highlights
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Celebrating Impactful Wins
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Proof that design, engineering, and execution come together. These wins pushed real products into the hands of users—unlocking funding, improving livelihoods, and fast-tracking student growth.
              </p>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur border border-white/70 shadow-soft px-5 py-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative space-y-1">
                    <div className="text-[28px] font-black tracking-tight text-gray-900">{stat.value}</div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-semibold">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-primary-200/60 bg-white/80 backdrop-blur px-6 py-7 shadow-soft"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-primary-600 font-semibold mb-3">
                Why this matters
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Every recognition has opened doors to collaborate with founders, universities, and grassroots communities. These experiences shape how I build: with inclusion, measurable outcomes, and technical depth.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {['Product Thinking', 'Systems Design', 'Community Impact'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 border border-primary-200">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold shadow-vibrant hover:shadow-glow-primary transition-transform hover:-translate-y-0.5"
              >
                Collaborate on the next win
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="hidden lg:block absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400 rounded-full"></div>
            <div className="space-y-10">
              {achievements.map((achievement, index) => (
                <motion.article
                  key={achievement.id}
                  variants={cardVariants}
                  whileHover={{ translateY: -8, rotate: index % 2 === 0 ? 0.3 : -0.3 }}
                  className="relative pl-10 lg:pl-16"
                >
                  {/* <div className="absolute left-2 lg:left-[10px] top-5 w-8 h-8 rounded-full bg-white border-4 border-primary-500 shadow-soft flex items-center justify-center font-semibold text-primary-600 text-sm">
                    {index + 1}
                  </div> */}

                  <div className="relative overflow-hidden rounded-[28px] bg-white shadow-medium border border-white/70 hover:border-primary-200 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex flex-col lg:flex-row lg:items-stretch">
                      <div className="relative lg:w-48 h-44 lg:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/15 via-secondary-500/15 to-accent-500/10 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-400"></div>
                        <img
                          src={achievement.image}
                          alt={achievement.imageAlt}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-white/80 shadow-soft">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-semibold">
                            {achievement.year}
                          </p>
                          <p className="text-xs font-bold text-gray-900">
                            {achievement.placement}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1 p-6 space-y-4">
                        <div className="flex flex-wrap items-center gap-3 justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                              {achievement.title}
                            </h3>
                            <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.3em]">
                              {achievement.organization}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-xs font-semibold text-primary-600 border border-primary-100">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                            </svg>
                            {achievement.impact}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {achievement.description}
                        </p>

                        <div className="space-y-2">
                          {achievement.highlights.map((highlight, highlightIndex) => (
                            <div
                              key={highlightIndex}
                              className="flex items-center gap-3 rounded-xl bg-white border border-primary-100/70 px-3 py-2 shadow-soft/40"
                            >
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500/15 via-secondary-500/15 to-accent-500/15 text-primary-600 flex items-center justify-center text-xs font-semibold">
                                {highlightIndex + 1}
                              </div>
                              <span className="text-sm font-medium text-primary-900">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.35em] mb-4">
            Consistent Delivery · Innovation · Impact
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These wins are waypoints—not finish lines. Let’s partner on the next challenge and turn it into a headline achievement.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Achievements;
