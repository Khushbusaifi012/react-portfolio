import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaXTwitter, FaPhoneFlip } from 'react-icons/fa6';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'khushbusaifi27@gmail.com',
      href: 'mailto:khushbusaifi27@gmail.com',
    },
    {
      icon: FaPhoneFlip,
      title: 'Phone',
      value: '+91 8527929886',
      href: 'tel:+918527929886',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-teal mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and projects.
            Feel free to reach out if you&apos;d like to collaborate!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-xl border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="inline-block text-4xl mb-4 text-teal-400 group-hover:text-teal-300"
              >
                <info.icon />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
              <p className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Prefer Direct Messaging? Find Me On Social Media:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="https://github.com/khushbusaifi012"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 glass-effect rounded-lg hover:bg-teal-500/20 transition-all duration-300 border border-teal-500/20 hover:border-teal-400 text-gray-300 hover:text-teal-400 font-semibold"
              title="GitHub"
            >
              <FaGithub size={20} />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/khushbu-saifi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 glass-effect rounded-lg hover:bg-teal-500/20 transition-all duration-300 border border-teal-500/20 hover:border-teal-400 text-gray-300 hover:text-teal-400 font-semibold"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://x.com/khushbu_S012"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 glass-effect rounded-lg hover:bg-teal-500/20 transition-all duration-300 border border-teal-500/20 hover:border-teal-400 text-gray-300 hover:text-teal-400 font-semibold"
              title="X (Twitter)"
            >
              <FaXTwitter size={20} />
              X
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
