import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-gradient-to-b from-primary via-secondary to-primary text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <footer className="border-t border-teal-500/20 bg-black/50 py-8 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/khushbusaifi012', label: 'GitHub', Icon: FaGithub },
              { href: 'https://www.linkedin.com/in/khushbu-saifi', label: 'LinkedIn', Icon: FaLinkedin },
              { href: 'https://x.com/khushbu_S012', label: 'X', Icon: FaXTwitter },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg p-2.5 text-gray-400 transition-colors hover:bg-teal-500/10 hover:text-teal-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-gray-400">© 2026 Khushbu Saifi. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Designed & Built With <span className="text-red-500">❤️</span>{' '}
            <span className="text-teal-400">React</span>
          </p>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-teal-400 text-[#0b0e14] shadow-lg shadow-teal-900/40 transition-transform hover:scale-105"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
