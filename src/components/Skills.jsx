import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "Keras"],
      icon: "🧠"
    },
    {
      title: "Data Analysis",
      skills: ["Pandas", "Numpy", "Matplotlib"],
      icon: "📊"
    },
    {
      title: "Development Tools",
      skills: ["Jupyter Notebook", "Google Colab"],
      icon: "🛠️"
    },
    {
      title: "Data Storage",
      skills: ["MySQL", "MongoDB"],
      icon: "🗄️"
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"],
      icon: "🔄"
    }
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #f5f9ff 0%, #e3f2fd 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, rgba(52, 152, 219, 0) 70%)',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41, 128, 185, 0.1) 0%, rgba(41, 128, 185, 0) 70%)',
        zIndex: 0
      }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#0d47a1',
            background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          My Tech Stack
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(30, 136, 229, 0.1)',
                borderTop: '4px solid #1e88e5',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: '#e3f2fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  color: '#0d47a1',
                  fontSize: '1.25rem',
                  margin: 0
                }}>{category.title}</h3>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.8rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                      color: '#1e88e5',
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      boxShadow: '0 4px 6px rgba(30, 136, 229, 0.1)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            fontSize: '1.1rem',
            color: '#424242'
          }}
        >
          Want to see my code? Check out my{" "}
          <motion.a
            href="https://github.com/Abinaya-Subramaniam?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1e88e5',
              fontWeight: '600',
              textDecoration: 'none',
              position: 'relative',
              display: 'inline-block'
            }}
            whileHover={{
              color: '#0d47a1'
            }}
          >
            <span style={{
              position: 'relative',
              zIndex: 1
            }}>
              GitHub repositories
            </span>
            <motion.span
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                height: '2px',
                background: '#1e88e5',
                zIndex: 0
              }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Skills;