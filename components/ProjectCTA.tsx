'use client';

import { motion } from 'framer-motion';

const ProjectCTA = () => {
  const ctaSteps = [
    {
      id: 1,
      step: '01',
      title: 'Tell Us Your Idea',
      description: 'Share your vision, goals, and any specific requirements you have in mind',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      id: 2,
      step: '02',
      title: 'Get Expert Consultation',
      description: 'Our team reviews your project and provides strategic recommendations',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      id: 3,
      step: '03',
      title: 'Receive Custom Proposal',
      description: 'Get a detailed proposal with timeline, deliverables, and investment',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      id: 4,
      step: '04',
      title: 'Start Building',
      description: 'We kick off your project and keep you updated every step of the way',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    }
  ];

  const features = [
    { icon: '⚡', text: 'Quick Response', detail: 'Get back to you within 2-4 hours' },
    { icon: '💡', text: 'Strategic Solutions', detail: 'Customized approach for your needs' },
    { icon: '🎯', text: 'Clear Roadmap', detail: 'Transparent project planning' },
    { icon: '🔒', text: 'Secure & Professional', detail: 'NDA & confidentiality assured' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge-accent mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Next Steps
          </span>
          <h2 className="section-title">
            Have a Project in
            <span className="block bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Mind?
            </span>
          </h2>
          <p className="section-subtitle">
            Let's discuss how we can help bring your ideas to life. It's easier than you think to get started.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-24">
          {/* Desktop View - Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-4">
              {ctaSteps.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Connecting Line */}
                  {index < ctaSteps.length - 1 && (
                    <div className="absolute top-12 left-[60%] w-[40%] h-1 bg-gradient-to-r from-accent-500/50 to-transparent"></div>
                  )}

                  <div className="card-elevated hover:shadow-glow-accent group-hover:shadow-vibrant">
                    {/* Step Number Circle */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center border-4 border-white shadow-vibrant">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>

                    <div className="pt-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="md:hidden space-y-4">
            {ctaSteps.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full border-4 border-white shadow-vibrant"></div>

                {/* Connecting Line */}
                {index < ctaSteps.length - 1 && (
                  <div className="absolute left-2 top-8 w-1 h-12 bg-gradient-to-b from-accent-500/50 to-transparent"></div>
                )}

                <div className="card">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-glow-primary group"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
              <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">{feature.text}</h4>
              <p className="text-gray-600 text-sm">{feature.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="#contact"
              className="btn-accent text-lg px-10 py-4 font-semibold shadow-vibrant group w-full sm:w-auto"
            >
              Get Started Now
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:ayushmore8652@gmail.com"
              className="btn-outline text-lg px-10 py-4 font-semibold group w-full sm:w-auto"
            >
              Send Email
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-600 text-sm font-medium">
            No commitment. Free consultation. Let's explore what's possible together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCTA;
