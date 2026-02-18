import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Masters Of Applications',
      field: 'Computer Science',
      institution: 'Chandigarh University',
      period: '2025 - 2027',
      description: 'Focused on web development, data structures, and software engineering principles.',
      icon: '🎓',
    },
    {
      degree: 'Software Development',
      field: 'Computer Science',
      institution: 'World Class Skill College',
      period: '2024 - 2025',
      description: 'I have expertise in Software Development using C, Python,Django,DRF,React.JS and FastAPI. I have experience working with HTML, CSS, and using the Bootstrap framework. I have experience working with SQL, PostgreSQL, and testing APIs using Postman. I have good experience using Visual Studio Code, GitHub, and Git.',
      icon: '💻',
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
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
                <FaGraduationCap className="text-white text-sm" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-purple-400 font-semibold mb-2">
                      {edu.field}
                    </p>
                    <p className="text-gray-300 mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      {edu.period}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                  <div className="text-4xl">{edu.icon}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
