'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Btcfarm',
      category: 'blockchain',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Solidity', 'Web3.js', 'Ethers.js'],
      description: 'A decentralized farming platform for cryptocurrency yield farming',
      isLive: true
    },
    {
      id: 2,
      title: 'Nova',
      category: 'blockchain',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Solidity', 'Web3.js', 'Node.js'],
      description: 'A new way of experiencing sports, esports and gaming',
      isLive: true
    },
    {
      id: 3,
      title: 'Dapp Lunchmoney',
      category: 'blockchain',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Solidity', 'Web3.js', 'Firebase'],
      description: 'Eat to earn rewards through blockchain technology',
      isLive: true
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      description: 'Modern e-commerce platform with advanced features',
      isLive: true
    },
    {
      id: 5,
      title: 'Task Management App',
      category: 'webapp',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      description: 'Collaborative task management with real-time updates',
      isLive: true
    },
    {
      id: 6,
      title: 'AI Content Generator',
      category: 'automation',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'React'],
      description: 'AI-powered content generation and automation tool',
      isLive: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length, icon: 'grid' },
    { id: 'blockchain', name: 'Blockchain', count: projects.filter(p => p.category === 'blockchain').length, icon: 'chain' },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length, icon: 'stack' },
    { id: 'webapp', name: 'Web Apps', count: projects.filter(p => p.category === 'webapp').length, icon: 'globe' },
    { id: 'automation', name: 'Automation', count: projects.filter(p => p.category === 'automation').length, icon: 'gear' },
    { id: 'design', name: 'Design', count: 1, icon: 'palette' },
    { id: 'integration', name: 'Integration', count: 2, icon: 'bolt' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'grid':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
      case 'chain':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
        );
      case 'stack':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'globe':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
          </svg>
        );
      case 'gear':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        );
      case 'palette':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
          </svg>
        );
      case 'bolt':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="work" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 50%)`,
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Selected Work
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A showcase of our recent projects and digital solutions
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by name, technology, or category"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500"
            />
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm'
              }`}
            >
              {getCategoryIcon(category.icon)}
              <span className="ml-2 hidden sm:inline">{category.name}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-200"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                {project.isLive && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Live
                  </div>
                )}
                <div className="text-gray-400 text-6xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="mb-4">
                  <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">
                    {project.category.replace('fullstack', 'FULL STACK').replace('webapp', 'WEB APP')}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
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
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Work;
