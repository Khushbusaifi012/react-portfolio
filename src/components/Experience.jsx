import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCheck } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      position: 'Software Developer',
      company: 'Kliff Technologies',
      location: 'India',
      periodDisplay: 'Jul 2026 — Present',
      logo: '/images/Kliff.png',
      logoClass: 'bg-white',
      highlights: [
        'Worked on both frontend and backend development for client websites using MERN Stack, PHP, Laravel and MySQL.',
        'Built responsive web pages, developed backend functionality, integrated APIs and worked with database-driven features.',
        'Worked directly on client requirements and converted them into website features, updates and custom solutions.',
        'Managed live websites and regularly updated project files and content using FileZilla and server environments.',
        'Built and delivered custom dashboards for the company, and worked on their development, updates, and backend functionality using PHP, Laravel, and MySQL.',
      ],
    },
    {
      position: 'Software Engineer Intern',
      company: 'Insybit',
      location: 'Gurgaon',
      periodDisplay: 'Aug 2025 — Jan 2026',
      logo: '/images/Insybit.jpg',
      logoClass: 'bg-black/40',
      highlights: [
        'Developed and enhanced 5–6 responsive frontend pages and backend features using React.js and Python, contributing to production-ready web applications.',
        'Built 2 interactive analytics dashboards using React.js by integrating 14–15 REST APIs, enabling real-time reporting and data visualization.',
        'Deployed 2–3 AI-powered web applications on AWS EC2, Firebase, and Vercel, ensuring scalable cloud hosting and reliable deployments.',
        'Improved the UI/UX of the TripongoStays hotel booking platform by implementing responsive layouts and enhancing user experience across multiple modules.',
        'Collaborated with cross-functional teams to debug issues, implement new features, and maintain production applications using Git-based workflows.',
      ],
    },
    {
      position: 'Software Developer Intern',
      company: 'Essentia Softserv',
      location: 'Noida',
      periodDisplay: 'Feb 2025 — Jul 2025',
      logo: '/images/Essentia.jpg',
      logoClass: 'bg-white',
      highlights: [
        'Developed 14–15 REST APIs using Django REST Framework (DRF) for authentication, CRUD operations, and business workflows across 2–3 enterprise projects.',
        'Integrated frontend and backend services using FastAPI across 3–4 modules, enabling efficient API-driven communication.',
        'Built and enhanced dashboard interfaces and responsive web pages using Phoenix LiveView (Elixir), improving UI responsiveness and user experience.',
        'Assisted in deploying applications on AWS EC2 and supported production deployment activities.',
        'Collaborated with cross-functional teams using Git to implement new features, resolve bugs, and improve application performance.',
      ],
    },
    {
      position: 'Software Developer Intern',
      company: 'LovenHeal',
      location: 'Pune',
      periodDisplay: 'Sep 2024 — Jan 2025',
      logo: '/images/Lovenheal.jpg',
      logoClass: 'bg-[#4a1942]/90',
      highlights: [
        'Developed backend services and RESTful APIs using Flask for application logic, user management, and data processing within a sales portal application.',
        'Built 5–6 responsive frontend pages using React.js, HTML, CSS, and JavaScript to improve user experience.',
        'Integrated 4–5 REST APIs to enable seamless communication between frontend and backend modules.',
        'Participated in feature development, debugging, testing, and deployment activities while collaborating with the development team.',
        'Contributed to improving application functionality by implementing new features and resolving UI and backend issues.',
      ],
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
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
          <div className="w-24 h-1 bg-gradient-teal mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-teal-500/50 hover:border-teal-400 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute -left-4 top-0 w-8 h-8 bg-gradient-teal rounded-full flex items-center justify-center border-4 border-secondary"
              >
                <FaBriefcase className="text-white text-sm" />
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-xl border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-teal-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-300 mb-3">{exp.location}</p>
                    <p className="text-sm text-gray-400 mb-4">{exp.periodDisplay}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-gray-300 leading-relaxed"
                        >
                          <FaCheck
                            className="mt-1 h-3 w-3 shrink-0 text-teal-400"
                            aria-hidden
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="shrink-0 self-center sm:self-start">
                    <div
                      className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center overflow-hidden rounded-xl border border-teal-500/30 p-1.5 shadow-lg ${exp.logoClass ?? 'bg-white/5'}`}
                    >
                      <motion.img
                        src={exp.logo}
                        alt={exp.company}
                        whileHover={{ scale: 1.03 }}
                        className="max-h-full max-w-full object-contain"
                      />
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
