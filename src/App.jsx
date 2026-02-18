import React, { useEffect } from 'react';
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
      
      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-purple-500/20 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Khushbu Saifi. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & Built with <span className="text-red-500">❤️</span> <span className="text-purple-400">React</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
