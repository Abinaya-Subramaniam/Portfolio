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
          style={{
            fontWeight: '600',
            color: '#1e88e5',
            display: 'inline-block'
          }}
          initial={{ opacity: 0.8 }}
          whileHover={{ 
            scale: 1.1,
            color: '#0d47a1',
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
    <section id="about" style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(to bottom, #f5f9ff 0%, #e3f2fd 100%)'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <motion.h2 
          style={{
            fontSize: '2.5rem',
            color: '#0d47a1',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span style={{
            background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Me</span>
        </motion.h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          '@media (min-width: 768px)': {
            flexDirection: 'row'
          }
        }}>
          <motion.div 
            style={{
              flex: 1,
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#424242'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p style={{ marginBottom: '1rem' }}>
              {highlightText("I am Abinaya Subramaniam, a second Year undergraduate pursuing BSc (Hons) in Artificial Intelligence at University of Moratuwa, with a keen interest in Machine Learning and Data Science. I am passionate about utilizing data  and  AI  to solve real-world problems. I thrive on exploring innovative solutions, continuous learning, and applying my skills to impactful projects that advance the field of artificial intelligence.")}
            </p>
          </motion.div>
          
          <motion.div 
            style={{
              width: '120px',
              height: '120px',
              color: '#1e88e5',
              flexShrink: 0
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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