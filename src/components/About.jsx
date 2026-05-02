import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
            Over the past year, I have worked in Full Stack Development, gaining hands-on experience in backend development using Flask and Django (Python), RESTful API integration, and database management.            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
             
            Recently, I completed a six-month on-site Internship as a Full Stack Developer, where I worked extensively with Python, Django, and React. I used Git and GitHub daily for version control and collaboration, and contributed to company-level projects, including frontend development using Elixir.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
            I have also completed a Software Development Course, where I learned Python, C, and other Essential IT Skills.
            </motion.p>
          </motion.div>

          {/* Image/Visual Element — portrait card (reference-style) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-[4/5]">
              <div className="absolute inset-0 glass-effect rounded-3xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-black/50">
                <img 
                  src="/images/khushbu.jpg" 
                  alt="Khushbu Saifi"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 z-10 w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] glass-effect rounded-xl flex items-center justify-center text-2xl border border-purple-500/40 bg-gray-900/80 backdrop-blur-md shadow-lg"
              >
                ⚡
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 z-10 w-14 h-14 sm:w-16 sm:h-16 glass-effect rounded-xl flex items-center justify-center text-xl border border-purple-500/40 bg-gray-900/80 backdrop-blur-md shadow-lg"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
