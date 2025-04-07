import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Heart Disease Prediction",
    description: "A machine learning model to predict heart disease using various health metrics.",
    tags: ["Python", "Scikit-learn"],
    link: "https://github.com/Abinaya-Subramaniam/Heart-Disease-Prediction"
  },
  {
    id: 2,
    title: "Movie Review Sentiment Analysis",
    description: "Sentiment analysis of movie reviews using NLP techniques.",
    tags: ["Python", "NLTK", "Flask"],
    link: "https://github.com/Abinaya-Subramaniam/Movie-Review-Analysis"
  },
  {
    id: 3,
    title: "Own Portfolio",
    description: "A personal portfolio website showcasing my projects and skills.",
    tags: ["React", "Tailwind CSS"],
    link: "https://github.com/Abinaya-Subramaniam/Portfolio"
  },
  {
    id: 4,
    title: "Currency Converter",
    description: "A simple web application to convert currencies using real-time exchange rates.",
    tags: ["React", "CSS", "Bootstrap"],
    link: "https://mycurrencyconverter123.netlify.app/"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Extract all unique tags from projects
  const allTags = ["All", ...new Set(projectsData.flatMap(project => project.tags))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="projects-content"
      >
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-filter">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="project-card"
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;