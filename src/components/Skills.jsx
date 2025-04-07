import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "R"]
    },
    {
      title: "Machine Learning Libraries & Frameworks",
      skills: ["Scikit-learn", "TensorFlow", "Keras"]
    },
    {
      title: "Data Manipulation & Analysis Libraries",
      skills: ["Pandas", "Numpy", "Matplotlib"]
    },
    {
      title: "Notebooks and IDE",
      skills: ["Jupyter Notebook", "Google Colab"]
    },
    {
      title: "Data Storage",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="skills-content"
      >
        <h2 className="section-title">Tech Stack / Skills</h2>
        
        <div className="skills-grid">
          {skillsCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="github-text">
                  Feel free to check out my repositories! <a href = "https://github.com/Abinaya-Subramaniam?tab=repositories" target="_blank"> My GitHub Repos</a>
                  
                </p>
      </motion.div>
    </section>
  );
};

export default Skills;