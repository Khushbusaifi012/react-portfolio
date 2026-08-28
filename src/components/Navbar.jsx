import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { Icon: FaGithub, href: 'https://github.com/Khushbusaifi012', label: 'GitHub' },
    { Icon: FaLinkedin, href: 'https://linkedin.com/in/khushbu-saifi', label: 'LinkedIn' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 24);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinkClass =
    'cursor-pointer px-3 xl:px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-transparent hover:text-teal-300 hover:bg-teal-500/10 transition-all duration-300';

  const activeNavClass =
    '!text-teal-300 bg-teal-500/15 !border-teal-400/30 shadow-[0_0_20px_rgba(45,212,191,0.12)]';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-teal-500/20 bg-[#0b0e14]/90 shadow-lg shadow-black/30 backdrop-blur-xl'
            : 'border-b border-teal-500/10 bg-[#0b0e14]/60 backdrop-blur-xl'
        }`}
      >
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal-600 via-teal-400 to-teal-300 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden
        />

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-14' : 'h-16'
            }`}
          >
            <Link
              to="hero"
              smooth
              duration={500}
              offset={-70}
              className="group flex items-center gap-2.5 cursor-pointer"
              aria-label="Scroll to top"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-400/40 bg-teal-400 shadow-[0_0_16px_rgba(45,212,191,0.35)]"
              >
                <span className="text-sm font-bold text-[#0b0e14]">KS</span>
              </motion.div>
              <span className="hidden sm:inline text-lg font-bold text-white">
                Khushbu
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1 rounded-full border border-teal-500/10 bg-white/[0.03] p-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  duration={500}
                  spy
                  offset={-70}
                  activeClass={activeNavClass}
                  className={navLinkClass}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden md:flex items-center gap-3">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-teal-500/10 hover:text-teal-400"
                  >
                    <item.Icon size={18} />
                  </motion.a>
                ))}
              </div>

              <Link
                to="contact"
                smooth
                duration={500}
                offset={-70}
                className="hidden sm:inline-flex"
              >
                <motion.span
                  whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(45,212,191,0.4)' }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-[#0b0e14] shadow-lg shadow-teal-900/30"
                >
                  Let&apos;s Talk
                </motion.span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-teal-500/10 hover:text-teal-400 lg:hidden"
              >
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed left-4 right-4 top-[4.5rem] z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl border border-teal-500/20 bg-[#111620]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      to={item.to}
                      smooth
                      duration={500}
                      spy
                      offset={-70}
                      activeClass="!text-teal-300 bg-teal-500/15 border-teal-400/30"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl border border-transparent px-4 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-teal-500/10 hover:text-teal-300"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-teal-500/15 pt-4">
                <div className="flex gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="rounded-lg p-2.5 text-gray-400 transition-colors hover:bg-teal-500/10 hover:text-teal-400"
                    >
                      <item.Icon size={18} />
                    </a>
                  ))}
                </div>

                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-[#0b0e14]"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
