import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBootstrap,
  FaAws,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
  FaServer,
} from 'react-icons/fa';
import {
  SiDjango,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPostgresql,
  SiC,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Languages',
      skills: [
        { name: 'HTML5', Icon: FaHtml5, color: '#ff6d3a' },
        { name: 'CSS3', Icon: FaCss3Alt, color: '#2ea8ff' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#ffd54a' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3b82f6' },
        { name: 'React', Icon: FaReact, color: '#61dafb' },
        { name: 'Tailwind', Icon: SiTailwindcss, color: '#22d3ee' },
        { name: 'Bootstrap', Icon: FaBootstrap, color: '#a855f7' },
      ],
    },
    {
      title: 'Backend Languages & Frameworks',
      skills: [
        { name: 'Python', Icon: FaPython, color: '#60a5fa' },
        { name: 'C Language', Icon: SiC, color: '#a8b9cc' },
        { name: 'Node.js', Icon: FaNode, color: '#76b657' },
        { name: 'Django', Icon: SiDjango, color: '#5eead4' },
        { name: 'Express', Icon: SiExpress, color: '#d1d5db' },
        { name: 'Django REST', Icon: FaServer, color: '#f97316' },
        { name: 'FastAPI', Icon: SiFastapi, color: '#14b8a6' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', Icon: SiMysql, color: '#60a5fa' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#38bdf8' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#22c55e' },
        { name: 'SQL', Icon: FaDatabase, color: '#cbd5e1' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', Icon: FaGitAlt, color: '#f97316' },
        { name: 'GitHub', Icon: FaGithub, color: '#e5e7eb' },
        { name: 'VS Code', Icon: FaCode, color: '#3b82f6' },
        { name: 'Figma', Icon: SiFigma, color: '#a855f7' },
        { name: 'Postman', Icon: SiPostman, color: '#f97316' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', Icon: FaAws, color: '#f59e0b' },
      ],
    },
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
            Tools and technologies I work with to build Modern, Responsive Web Applications.
          </p>
        </motion.div>

        {/* Skills Boxes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="glass-effect rounded-xl p-6 border border-purple-500/20 shadow-[0_0_28px_rgba(139,92,246,0.07)] transition-all duration-300 hover:border-purple-400/45 hover:shadow-[0_0_36px_rgba(168,85,247,0.12)]"
            >
              <h3 className="text-purple-300 text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-5">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={`${category.title}-${skill.name}`}
                    whileHover={{ scale: 1.05 }}
                    className="min-h-[88px] rounded-xl border border-purple-500/15 bg-white/[0.04] hover:bg-purple-500/10 hover:border-purple-400/35 flex flex-col items-center justify-center px-2 py-3 text-center transition-colors duration-300"
                  >
                    <skill.Icon size={26} style={{ color: skill.color }} />
                    <p className="mt-2 text-xs font-semibold text-gray-100 leading-tight">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
