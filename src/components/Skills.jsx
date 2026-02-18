import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaCode,
  FaServer,
  FaAws,
} from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTailwindcss, SiExpress, SiPython, SiDjango, SiFastapi, SiC, SiFigma, SiPostman } from 'react-icons/si';

const Skills = () => {
  const iconSkills = [
    { name: 'React', Icon: FaReact, color: '#61dafb' },
    { name: 'Node.js', Icon: FaNode, color: '#68a063' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#13aa52' },
    { name: 'Express', Icon: SiExpress, color: '#ffffff' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'HTML5', Icon: FaHtml5, color: '#e34c26' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#563d7c' },
    { name: 'Python', Icon: SiPython, color: '#87ceeb' },
    { name: 'Django', Icon: SiDjango, color: '#092e20' },
    { name: 'Django REST Framework', Icon: FaServer, color: '#a30000' },
    { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
    { name: 'Git', Icon: FaGitAlt, color: '#f1502f' },
    { name: 'MySQL', Icon: FaDatabase, color: '#336791' },
    { name: 'AWS', Icon: FaAws, color: '#FF9900' },
    { name: 'C Language', Icon: SiC, color: '#a8b9cc' },
    { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
    { name: 'VS Code', Icon: FaCode, color: '#007acc' },
    { name: 'Figma', Icon: SiFigma, color: '#2563eb' },
    { name: 'Postman', Icon: SiPostman, color: '#ff6c37' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with to build modern, responsive web applications
          </p>
        </motion.div>

        {/* Icon Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
        >
          {iconSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              className="glass rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer group border border-purple-primary/20 hover:border-purple-primary/50 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <skill.Icon
                  size={48}
                  style={{ color: skill.color }}
                  className="group-hover:filter group-hover:drop-shadow-lg transition-all"
                />
              </motion.div>
              <h3 className="text-center font-semibold text-gray-200 group-hover:text-purple-secondary transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
