'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-28 bg-white">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-1 lg:gap-1 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <div className="mb-6">
            <span className="badge">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Hi, I'm a Developer
              </span>
            </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">I Build Digital </span>
              <br />
              <span className="gradient-text">Experiences</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl text-gray-700 font-medium mb-6">
              Full-Stack Developer & UI/UX Enthusiast
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              Passionate about creating innovative web applications and digital solutions. 
              I specialize in React, Next.js, Node.js, and modern web technologies. 
              Let's build something amazing together!
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-3 font-medium">Tech Stack:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold border border-primary-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#work"
                className="btn-primary text-base sm:text-lg px-6 py-2 group w-full sm:w-auto sm:min-w-[200px]"
              >
                View My Work
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-outline text-base sm:text-lg px-6 py-2 group w-full sm:w-auto sm:min-w-[200px]"
              >
                Get In Touch
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">6+</div>
                <p className="text-gray-600 font-semibold text-sm">Projects</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">2+</div>
                <p className="text-gray-600 font-semibold text-sm">Years Exp</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">100%</div>
                <p className="text-gray-600 font-semibold text-sm">Passion</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative mb-4 w-72 h-72 sm:w-80 sm:h-80">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20 animate-pulse"></div>
                
                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-200 flex items-center justify-center">
                  {/* <div className="text-6xl text-gray-400">👨‍💻</div> */}
                  <img 
                    src="/assets/profile_pic.png" 
                    alt="Ayush More - Full-Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-1000">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
