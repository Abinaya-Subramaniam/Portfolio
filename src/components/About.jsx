import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlightedWords = [
    "Abinaya Subramaniam",
    "BSc Honours in Artificial Intelligence",
    "University of Moratuwa",
    "Machine Learning",
    "Data Science",
    "data",
    "AI",
    "real-world problems",
    "innovative solutions",
    "continuous learning",
    "impactful projects",
    "artificial intelligence"
  ];

  const highlightText = (text) => {
    return text.split(' ').map((word, i) => {
      const cleanWord = word.replace(/[.,]/g, '');
      const isHighlighted = highlightedWords.includes(cleanWord) || 
                          highlightedWords.some(hl => cleanWord.includes(hl));
      
      return isHighlighted ? (
        <motion.span
          key={i}
          className="highlight-word"
          initial={{ opacity: 0.8 }}
          whileHover={{ 
            scale: 1.1,
            color: 'var(--accent-color)',
            transition: { duration: 0.2 }
          }}
        >
          {word}{' '}
        </motion.span>
      ) : (
        <React.Fragment key={i}>{word}{' '}</React.Fragment>
      );
    });
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <motion.h2 
          className="section-title"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>
        
        <div className="about-text-container">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p>
              {highlightText("I am Abinaya Subramaniam, a second Year undergraduate pursuing a BSc (Hons) in Artificial Intelligence at University of Moratuwa, with a keen interest in Machine Learning and Data Science. I am passionate about utilizing data  and AI  to solve real-world problems. I thrive on exploring innovative solutions, continuous learning, and applying my skills to impactful projects that advance the field of artificial intelligence.")}
            </p>
          </motion.div>
          
          <motion.div 
            className="ai-icon"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
              <path d="M16 17a3 3 0 1 1-6 0c0-1.5 3-4.5 3-4.5s3 3 3 4.5z"/>
              <path d="M8 17a3 3 0 1 0 6 0c0-1.5-3-4.5-3-4.5S8 15.5 8 17z"/>
              <path d="M12 8v4"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;