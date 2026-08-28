import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Developer';
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
        className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl"
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
        className="hidden md:block absolute bottom-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start"
      >
        {/* Left: Text Content */}
        <div className="flex flex-col justify-start p-4 text-center md:text-left items-center md:items-start order-1">
          {/* Main Heading */}
          <motion.div variants={item} className="mb-4 mt-0">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight text-white whitespace-nowrap">
              Hey, I&apos;m Khushbu Saifi
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div variants={item} className="mb-6 lg:mb-8 w-full max-w-full">
            <div className="flex items-center justify-center md:justify-start text-base sm:text-lg lg:text-xl font-semibold text-teal-400 whitespace-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <span className="shrink-0">{displayText}</span>
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1.5 shrink-0 inline-block text-current translate-y-px"
                >
                  |
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={item}
            className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 lg:mb-10 leading-relaxed text-center md:text-left max-w-prose space-y-4"
          >
            <p>
              I&apos;m Khushbu Saifi, a Software Developer with experience in building responsive,
              user-friendly, and scalable web applications. I work across both frontend and backend
              development using React.js, Next.js, Node.js, Express.js, Django, Python, JavaScript,
              and TypeScript, PHP, Laravel, MySQL.
            </p>
            <p>
              I have experience working with REST APIs, databases, admin panels, and dynamic website
              development. I enjoy turning ideas and designs into functional web applications and
              continuously learning new technologies. I&apos;m also actively involved in the tech
              community and participate in tech meetups, talks, and workshops.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex justify-center md:justify-start mt-4 w-full">
            <motion.a
              href="https://drive.google.com/file/d/1Rd_Xl1DNVBccrb7nOvjUyFXMHZuO9yGb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 bg-teal-400 text-[#0b0e14] font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-teal-900/40 hover:shadow-glow-teal transition-shadow"
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Right: Profile Photo — aligned with "Software Developer" */}
        <motion.div
          variants={item}
          className="flex items-start justify-center order-2 mt-6 md:mt-0 md:pt-[4.5rem] lg:pt-[6.75rem] xl:pt-[7.75rem]"
        >
          <div className="w-full flex items-start justify-center p-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/50 via-teal-500/30 to-teal-600/20 rounded-2xl blur-2xl opacity-70"></div>

              <motion.img
                src="/images/khushbu4.jpg"
                alt="Khushbu Saifi"
                className="relative w-full h-auto object-cover rounded-2xl border-2 border-teal-400/60 shadow-glow-teal neon-border-teal"
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
