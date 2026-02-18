import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Developed a full-stack eCommerce web application using Django for selling girls clothing products. Implemented features including user registration/login, product catalog, cart, checkout, and admin panel for inventory management. Integrated Django templates for dynamic content rendering and used MYSQL for the database. Followed modular Django architecture with separate apps for user, product, cart, and order management',
      image: '🛍️',
      tech: ['Django', 'HTML', 'MySQL', 'CSS', 'JavaScript'],
      github: 'https://github.com/Khushbusaifi012/E-commerce_store',
      featured: true,
    },
    {
      id: 2,
      title: 'The Mental Health App',
      description: 'Developed during my internship, this is a full-stack mental health web application built using Django (REST API) and ReactJS for individuals to access mental wellness resources and track their mental health.\nImplemented core features like user authentication, Breathing exercise, Journal Entries, CBT Checklist, and Crisis Helpline. Used Django REST Framework (DRF) to build APIs and ReactJS to handle dynamic, responsive UI. Integrated PostgreSQL as the primary database for secure and scalable data storage.\n\nFollowed a modular architecture by separating concerns resources in Django, and component-based structure in React.',
      image: '🧠',
      tech: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/Khushbusaifi012/thementalhealthApp',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Forcasting App',
      description: 'A simple command line app that determines the weather of a place using API. Built a weather report application using Django framework. Integrated OpenWeatherMap API to fetch and display real-time weather based on city input',
      image: '🌤️',
      tech: ['HTML', 'CSS', 'Javascript', 'OpenWeather API', 'Django'],
      github: 'https://github.com/Khushbusaifi012/Weather_report',
      featured: true,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:  'Modern developer portfolio website with animations and responsive UI.',
      image: '👩‍💻',
      tech: ['ReactJS', 'Tailwind CSS'],
      github: 'https://github.com',
    },
    {
      id: 5,
      title: 'Loan Management System',
      description: 'Built a modern Loan Management System dashboard to manage loans, applications, collaterals, and repayments. Developed responsive UI with React and Tailwind CSS and integrated APIs for real-time loan tracking and analytics.',
      image: '💰',
      tech: ['ReactJS', 'Tailwind CSS', 'Django' ,"Django REST Framework", "PostgreSQL"],
      github: 'https://github.com/Khushbusaifi012/fintech-lms',
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 ${
                project.featured
                  ? 'lg:col-span-1 ring-2 ring-purple-500/50'
                  : ''
              }`}
            >
              {/* Glass Effect Background */}
              <div className="glass-effect absolute inset-0 opacity-50" />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Project Image/Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Details */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

               <p className="text-gray-300 mb-6 flex-grow">
              {project.description.split('. ').map((line, i) => (
              <span key={i} className="block">
              {line}.
              </span>
  ))}
</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */} 
                <div className="flex justify-center mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-gray-500"
                  >
                    <FaGithub size={18} />
                    Code
                  </motion.a>

               
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 glass-effect border border-purple-400/50 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="https://github.com/khushbusaifi012"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(167, 139, 250, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-purple text-white font-bold rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
