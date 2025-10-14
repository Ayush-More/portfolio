'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Building Digital
              <br />
              <span className="gradient-text">Excellence</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            We craft exceptional digital experiences through innovative design and cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <a
              href="#contact"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[180px]"
            >
              Start Project
            </a>
            <a
              href="#work"
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto sm:min-w-[180px]"
            >
              Our Work
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
