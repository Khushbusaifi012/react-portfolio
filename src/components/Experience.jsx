import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      position: 'Software Engineer Intern',
      company: 'Insybit',
      period: 'Aug 2025 - Jan 2026',
      highlights: [
        'Contributed to both frontend and backend development using ReactJS and Python.',
        'Build interactive dashboards and data-driven interfaces using Python,React.',
      ],
      icon: '🚀',
    },
    {
      position: 'Software Development Intern',
      company: 'Essentia Softserv',
      period: 'Feb 2025 - July 2025',
      highlights: [
        'Worked with Python, Django Rest Framework (DRF), and ReactJS.',
        'Utilized HTML, CSS, and JavaScript for frontend tasks and UI enhancements.',
        'Developed and optimized APIs, improving system efficiency and response times.',
        'Learned good experience in database management and application deployment.',
        'Along with my own projects, I also contributed to company-level projects, especially in frontend development using Elixir language.'
      ],
      icon: '💼',
    },
    {
      position: 'Full Stack Developer',
      company: 'Reach Love N Heal PVT. LTD',
      period: 'Sep 2024 - Jan 2025',
      highlights: [
        'Developed and deployed web applications using Flask in Python, delivering web-based solutions.',
        'Built and maintained backend systems using Flask for database management and application development.',
        'Handled API integrations and structured data exchange using JSON, ensuring smooth communication between frontend and backend systems.',
        'Designed and enhanced web interfaces using HTML, CSS, JavaScript, and Bootstrap to create responsive and user-friendly designs.'
      ],
      icon: '🚀',
    },
  ];

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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-purple-500/50 hover:border-purple-400 transition-colors duration-300"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute -left-4 top-0 w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center border-4 border-secondary"
              >
                <FaBriefcase className="text-white text-sm" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <span className="text-2xl">{exp.icon}</span>
                    </div>
                    <p className="text-lg text-purple-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      {exp.period}
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                      <p className="text-sm font-semibold text-purple-300 mb-3">
                        Key Achievements:
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1">✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
