import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          <p>
          I am Abinaya Subramaniam, a second undergraduate pursuing a BSc Honours in Artificial Intelligence at the
University of Moratuwa, with a keen interest in Machine Learning and Data Science. I am passionate about utilizing data and AI to solve realworld problems. I thrive on exploring innovative solutions, continuous learning, and applying my skills to impactful projects that advance the field of artificial intelligence.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;