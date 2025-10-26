'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Work = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Effilearn',
      category: 'education',
      image: '/assets/effilearn.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
      description: 'Educational platform offering expert-led training programs with guaranteed internships and career opportunities',
      isLive: true,
      url: 'https://www.effilearn.in/'
    },
    {
      id: 2,
      title: 'JobPortal Pro',
      category: 'jobportal',
      image: '/assets/ittihadplacement.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      description: 'Revolutionary job portal with placement guarantee system connecting serious candidates with quality employers',
      isLive: true,
      url: 'https://ittihadplacement.com/'
    },
    {
      id: 3,
      title: 'EasyTrade',
      category: 'trading',
      image: '/assets/easyTrade.png',
      technologies: ['React', 'WebSocket', 'Chart.js', 'Node.js'],
      description: 'Advanced trading platform with real-time market data and comprehensive trading tools',
      isLive: true,
      url: 'https://app.easytrade.world/'
    },
    {
      id: 4,
      title: 'DubaiDeck',
      category: 'gaming',
      image: '/assets/dubaideck.png',
      technologies: ['React', 'WebGL', 'Socket.io', 'Node.js'],
      description: 'Comprehensive gaming platform featuring lottery, casino, slots, and sports betting with exciting rewards',
      isLive: true,
      url: 'https://dubaideck.com/'
    },
    {
      id: 5,
      title: 'Campus Connect',
      category: 'social',
      image: '/assets/campus%20Connect.png',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      description: 'Campus networking platform connecting students and facilitating academic and professional growth',
      isLive: true,
      url: 'https://campus-connect-ebon.vercel.app/'
    },
    {
      id: 6,
      title: 'CareForIndia',
      category: 'healthcare',
      image: '/assets/careforIndia.png',
      technologies: ['React', 'Express', 'MongoDB', 'Stripe'],
      description: 'Healthcare platform dedicated to providing medical services and support across India',
      isLive: true,
      url: 'https://careforindians.com'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });


  return (
    <section id="work" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #9333ea 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #10b981 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #f97316 0%, transparent 50%)`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            My Work
          </span>
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A collection of my recent work and digital solutions
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-2xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by name, technology, or category"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-soft text-gray-900 placeholder-gray-500 font-medium transition-all duration-300 hover:border-gray-300"
            />
          </div>
        </motion.div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group card-elevated hover:shadow-glow-primary overflow-hidden cursor-pointer"
              onClick={() => project.url && window.open(project.url, '_blank')}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center overflow-hidden">
                {project.isLive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-vibrant flex items-center z-10"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    Live
                  </motion.div>
                )}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-gray-300 text-6xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-bold text-sm uppercase tracking-wide">
                    {project.category.replace('jobportal', 'JOB PORTAL').replace('trading', 'TRADING').replace('gaming', 'GAMING').replace('social', 'SOCIAL').replace('healthcare', 'HEALTHCARE').replace('education', 'EDUCATION')}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold border border-gray-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg font-semibold">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Work;
