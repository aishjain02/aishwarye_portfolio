import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="../Background_video.mp4"
      />
      <div className="max-w-4xl w-full text-center mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
        >
          Hi, I'm <span className="text-primary-600 inline-block hover:scale-105 transition-transform">AISHWARYE JAIN</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 mx-auto max-w-3xl leading-relaxed"
        >
          A pre-final year engineering student passionate about building digital products
          and experiences. I specialize in data analytics, automation, and creating
          scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.2 }}
          className="flex items-center justify-center space-x-12 mx-auto"
        >
          <a
             href="mailto:jainaishwarye@gmail.com?subject=Hello%20Aishwarye&body=Hi,%20I'd%20like%20to%20connect%20with%20you!" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
             rel="noopener noreferrer"
           >
             <FaEnvelope className="w-6 h-6" />
             <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aishwarye-jain-9535b4221/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;