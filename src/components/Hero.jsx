import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import abinayaImage from '../assets/images/abinaya.jpeg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Artificial Intelligence Undergraduate', 'Data Science Enthusiast'];

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 30 : 150);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-content"
        >
          <h1>Hi, I'm <span className="highlight">Abinaya</span>!</h1>
          <h2 className="typing-animation">
            {text}
            <span className="cursor">|</span>
          </h2>
          <p className="welcome-text">
            Welcome to my portfolio! I'm passionate about creating intelligent solutions and 
            exploring data-driven insights.
          </p>
          <div className="hero-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              download 
              className="btn btn-primary"
            >
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn btn-secondary"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
        
        <div className="hero-image-wrapper">
          <img src={abinayaImage} alt="Abinaya" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;