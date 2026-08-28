import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'The Mental Health App',
      description: 'Developed during my internship, this is a full-stack mental health web application built using Django (REST API) and ReactJS for individuals to access mental wellness resources and track their mental health.\nImplemented core features like user authentication, Breathing exercise, Journal Entries, CBT Checklist, and Crisis Helpline. Used Django REST Framework (DRF) to build APIs and ReactJS to handle dynamic, responsive UI. Integrated PostgreSQL as the primary database for secure and scalable data storage.\n\nFollowed a modular architecture by separating concerns resources in Django, and component-based structure in React',
      image: '🧠',
      tech: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/Khushbusaifi012/The-Mental-health-App',
      featured: true,
      live: 'https://themind.life/',
    },
    {
      id: 2,
      title: 'Loan Management System',
      description:
        'Built a modern Loan Management System dashboard to manage loans, applications, collaterals, and repayments.\nDeveloped responsive UI with React and Tailwind CSS and integrated APIs for real-time loan tracking and analytics.\nDesigned Django REST Framework backend for loan products, KYC applications, mutual fund collateral pledges, LTV-based eligibility, and approve/close workflows with PostgreSQL.',
      image: '💰',
      tech: ['ReactJS', 'Tailwind CSS', 'Django' ,"Django REST Framework", "PostgreSQL"],
      github: 'https://github.com/Khushbusaifi012/fintech-lms',
    },
    {
      id: 3,
      title: 'Homestays of India',
      description:
        'Contributed extensively to Homestays of India, a full-stack homestay booking platform for discovering and booking stays across India.\nBuilt and enhanced responsive frontend features including location-based search, date and guest selection, user login, wishlists, and dark mode UI.\nDeveloped backend functionality, API integrations, and database-driven features to support homestay listings, search workflows, and live website updates.\nWorked across the complete development process from frontend pages and UI improvements to backend logic.',
      image: '🏠',
      tech: ['Next.js', 'PHP', 'MySQL', 'Laravel'],
      live: 'https://test.homestaysofindia.com/',
    },
    {
      id: 4,
      title: 'Ebuild Bazaar Platforms',
      description:
        'Built Ebuild Bazaar Platforms, an eCommerce website for construction materials, renovation products, interior design, and professional home services across India.\nDesigned a Blinkit-inspired, mobile-first UI with fast browsing, category-based product discovery, trending picks, and quick-order style flows adapted for the building products marketplace.\nDeveloped full-stack features including shop sections, services (construction management, design, renovation, labour hire), project showcases, and enquiry/callback workflows.',
      image: '🏗️',
      tech: ['Next.js', 'PHP', 'MySQL', 'Laravel'],
      live: 'https://stagedev.ebuildbazaar.in/',
    },
  ];

  const descriptionLines = (description) =>
    String(description ?? '')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .filter(
        (line) =>
          !/^Deployed version runs with cloud PostgreSQL/i.test(line)
      );

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
    <section id="projects" className="pt-4 pb-10 md:pt-6 md:pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-teal mx-auto rounded-full"></div>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projectsData.map((project) => {
            const lines = descriptionLines(project.description);
            return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`group flex h-full rounded-xl border border-teal-500/15 bg-secondary p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-teal-400/35 hover:shadow-[0_12px_40px_-16px_rgba(45,212,191,0.18)] sm:p-7 ${
                project.featured
                  ? 'ring-1 ring-teal-500/30 border-teal-400/25 shadow-[0_8px_40px_-12px_rgba(45,212,191,0.2)]'
                  : ''
              }`}
            >
              <div className="flex h-full min-h-0 w-full flex-col">
                <div className="mb-2 text-3xl leading-none transition-transform duration-300 group-hover:scale-[1.03] sm:text-4xl">
                  {project.image}
                </div>

                <h3
                  className={`text-xl font-bold leading-snug text-white sm:text-2xl ${lines.length > 0 ? 'mb-3' : 'mb-6'}`}
                >
                  {project.title}
                </h3>

                {lines.length > 0 ? (
                  <ul className="mb-6 flex-grow space-y-2.5 text-sm leading-relaxed text-slate-400">
                    {lines.map((line, i) => (
                      <li key={i} className="flex gap-2.5">
                        <FaCheck
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-400/95"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mb-6 mt-auto">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={`${project.id}-${tech}-${index}`}
                        className="rounded-full border border-teal-500/25 bg-primary/90 px-3 py-1 text-xs font-medium text-teal-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-teal-500/15 pt-5">
                  <motion.a
                    href={project.live ?? project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
                  >
                    Open project
                    <FaExternalLinkAlt className="text-xs opacity-90" aria-hidden />
                  </motion.a>
                  {project.github ? (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 transition-colors hover:text-teal-400"
                    >
                      <FaGithub className="text-sm" aria-hidden />
                      Source
                    </motion.a>
                  ) : null}
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <motion.a
            href="https://github.com/khushbusaifi012"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(45, 212, 191, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-teal-400 text-[#0b0e14] font-bold rounded-lg hover:shadow-glow-teal transition-shadow duration-300"
          >
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
