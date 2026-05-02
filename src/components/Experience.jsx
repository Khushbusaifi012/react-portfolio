import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCheck } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      position: 'Software Engineer Intern',
      company: 'Insybit',
      location: 'India',
      periodDisplay: 'Aug 2025 — Jan 2026',
      logo: '/images/Insybit.jpg',
      logoClass: 'bg-black/40',
      highlights: [
        'Contributed to both frontend and backend development using ReactJS and Python.',
        'Built interactive dashboards and data-driven interfaces using Python and React.',
        'Deployed AI-powered dashboards on Firebase, Vercel, and AWS (EC2) for hosting and access.',
        'Worked on TripongoStays: designed and improved the UI for a hotel and property booking platform.',
      ],
    },
    {
      position: 'Software Development Intern',
      company: 'Essentia Softserv',
      location: 'India',
      periodDisplay: 'Feb 2025 — Jul 2025',
      logo: '/images/Essentia.jpg',
      logoClass: 'bg-white',
      highlights: [
        'Worked on full-stack development of web applications as a Software Development Intern.',
        'Developed backend services using Python and Django.',
        'Integrated front-end with back-end services using FastAPI and Django REST Framework.',
        'Contributed to company-level projects including front-end development using Elixir and Python.',
        'Deployed and managed company projects on Amazon Web Services (EC2).',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Reach Love N Heal Pvt Ltd',
      location: 'Pune, India',
      periodDisplay: 'Sep 2024 — Jan 2025',
      logo: '/images/Lovenheal.jpg',
      logoClass: 'bg-[#4a1942]/90',
      highlights: [
        'Worked on web applications using Flask to build web services.',
        'Worked on frontend and backend using Flask for data handling and application logic.',
        'Worked with APIs to connect frontend and backend smoothly.',
        'Created and improved web pages using HTML, CSS, JavaScript, and ReactJS for better user experience.',
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
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full" />
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
              className="relative pl-8 border-l-2 border-purple-500/50 hover:border-purple-400 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute -left-4 top-0 w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center border-4 border-secondary"
              >
                <FaBriefcase className="text-white text-sm" />
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-purple-400 font-semibold mb-2">
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
                            className="mt-1 h-3 w-3 shrink-0 text-purple-400"
                            aria-hidden
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="shrink-0 self-center sm:self-start">
                    <div
                      className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center overflow-hidden rounded-xl border border-purple-500/30 p-1.5 shadow-lg ${exp.logoClass ?? 'bg-white/5'}`}
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
