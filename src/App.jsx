import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BlogLinks from './components/BlogLinks';
import Contact from './components/Contact';
import './assets/styles/global.css';

const App = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BlogLinks />
        <Contact />
      </main>
    </div>
  );
};

export default App;