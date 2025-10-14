'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Blockchain dApps',
      description: 'Build secure, scalable decentralized applications with smart contracts and DeFi protocols.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      level: 'Advanced',
      features: [
        'Smart Contract Development',
        'DeFi Protocols',
        'NFT Marketplaces',
        'Wallet Integration'
      ],
      isPopular: true
    },
    {
      id: 2,
      title: 'Security & Audits',
      description: 'Comprehensive security reviews and audits for blockchain applications and smart contracts.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1l3.09 6.26L22 9l-5.91 1.74L12 17l-4.09-6.26L2 9l6.91-1.74L12 1z"/>
          <path d="M12 8v8m-4-4h8"/>
        </svg>
      ),
      level: 'Expert',
      features: [
        'Smart Contract Audits',
        'Penetration Testing',
        'Security Best Practices',
        'Compliance'
      ],
      isPopular: false
    },
    {
      id: 3,
      title: 'Full-Stack Web Apps',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      level: 'Intermediate',
      features: [
        'React/Next.js Frontend',
        'Node.js/Python Backend',
        'Database Design',
        'API Development'
      ],
      isPopular: true
    }
  ];

  return (
    <section id="services" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              End-to-end engineering solutions to launch and scale your digital products
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group"
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className="bg-primary-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Skill Level */}
              <div className="inline-flex items-center bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                {service.level}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-1"
              >
                Get Quote
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
