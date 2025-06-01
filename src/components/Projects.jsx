import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: "NeuroSync",
    description: "AI Platform designed to assist Sri Lankan children with Autism Spectrum Disorder",
    tags: ["Python", "FastAPI", "Computer Vision","Deep Learning"],
    link: "https://github.com/Abinaya-Subramaniam/neurosync_WBC",
    image: "https://i.imgur.com/kIkXyRB.png"
  },
  {
    id: 3,
    title: "IPL StatZone",
    description: "Interactive dashboard to explore IPL data (2008-2024) with player/team comparisons and visualizations.",
    tags: ["Python", "Streamlit", "Pandas"],
    link: "https://github.com/Abinaya-Subramaniam/IPL_statsZone",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Insurance Agents Performance Predictor",
    description: "Web app converting currencies using real-time exchange rates with clean interface.",
    tags: ["Machine Learning", "Python", "Streamlit"],
    link: "https://github.com/Abinaya-Subramaniam/insurance_agents_performance_predictor",
    image: "https://i.imgur.com/weXQbxk.jpeg"
  },
  {
    id: 4,
    title: "ZenPlateX (Ongoing)",
    description: "AI Platform platform designed to provide personalized accessible nutrition support",
    tags: ["Python", "Machine Learning", "Computer Vision", "NLP"],
    link: "#",
    image: "https://i.imgur.com/TlNnDDN.jpeg"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const allTags = ["All", ...new Set(projectsData.flatMap(project => project.tags))];
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #f0f7ff 0%, #d0e3ff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30, 136, 229, 0.1) 0%, rgba(30, 136, 229, 0) 70%)',
      }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h2 style={{
            fontSize: '2.8rem',
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
          }}>
            Featured Projects
          </h2>
          <p style={{
            color: '#4a5568',
            fontSize: '1.1rem',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Here are some of my recent projects. Click to explore the code and live demos.
          </p>
        </motion.div>
        
        <motion.div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {allTags.map(tag => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '50px',
                background: activeFilter === tag ? '#1e88e5' : 'rgba(255, 255, 255, 0.8)',
                color: activeFilter === tag ? 'white' : '#1e88e5',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(30, 136, 229, 0.1)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          },
          '@media (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
          }
        }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(30, 136, 229, 0.1)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{
                height: '180px',
                background: `url(${project.image}) center/cover`,
                position: 'relative',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(30, 136, 229, 0.2), rgba(13, 71, 161, 0.5))'
                }
              }}></div>
              
              <div style={{
                padding: '1.8rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#0d47a1',
                  marginBottom: '0.8rem'
                }}>{project.title}</h3>
                <p style={{
                  color: '#4a5568',
                  marginBottom: '1.5rem',
                  flex: 1,
                  lineHeight: '1.6'
                }}>{project.description}</p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.tags.map(tag => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        padding: '0.4rem 0.9rem',
                        borderRadius: '50px',
                        background: '#e3f2fd',
                        color: '#1e88e5',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        boxShadow: '0 2px 4px rgba(30, 136, 229, 0.1)'
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.7rem 1.2rem',
                      borderRadius: '8px',
                      background: '#1e88e5',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      flex: 1,
                      justifyContent: 'center'
                    }}
                  >
                    <FiGithub />
                    View Code
                  </motion.a>
                  
                  {project.id === 4 && ( 
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.7rem 1.2rem',
                        borderRadius: '8px',
                        background: 'white',
                        color: '#1e88e5',
                        border: '1px solid #1e88e5',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        flex: 1,
                        justifyContent: 'center'
                      }}
                    >
                      <FiExternalLink />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;