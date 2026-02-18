import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack / MERN Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else if (displayText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayText, isTyping, fullText]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="hidden md:block absolute bottom-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch"
      >
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center p-4 text-center md:text-left items-center md:items-start order-1">
          {/* Main Heading */}
          <motion.div variants={item} className="mb-4 mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              Hey, I'm{' '}
              <span className="gradient-text">Khushbu Saifi</span>
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div variants={item} className="mb-6 lg:mb-8">
            <div className="text-xl sm:text-2xl lg:text-4xl font-semibold text-purple-400 h-12 lg:h-16 flex items-center justify-start">
              <span>{displayText}</span>
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-2 text-2xl lg:text-3xl"
                >
                  |
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 lg:mb-10 leading-relaxed text-center md:text-left max-w-prose"
          >
            I am Khushbu, a Full Stack Developer skilled in C, Python, ReactJS, Django, and the MERN stack. I also work with HTML, CSS, and JavaScript to build responsive and user-friendly websites. I enjoy problem-solving and coding, and I can handle both frontend and backend development. I am a quick learner, always open to learning new technologies, and actively participate in tech meetups, talks, and workshops to improve my skills.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex justify-center md:justify-start mt-4 w-full">
            <motion.a
              href="https://drive.google.com/file/d/1iRzwgf3Izqo8grDPhMXpgMlIPZ52HPMJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg flex items-center gap-2 shadow-lg"
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Right: Profile Photo */}
    <motion.div variants={item} className="flex items-center justify-center order-2 md:order-2 mt-6 md:mt-0">
      <div className="h-full w-full flex items-center justify-center p-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative w-full max-w-[220px] h-[220px] sm:max-w-[260px] sm:h-[260px] md:max-w-[320px] md:h-[320px] lg:w-96 lg:h-96"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>

          <motion.img
            src="/images/khushbu3.jpg"
            alt="Khushbu Saifi"
            className="relative w-full h-full object-cover rounded-full border-4 border-purple-400 shadow-2xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
