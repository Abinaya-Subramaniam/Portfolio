import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const Education = ({ darkMode }) => {
  const educationData = [
    {
      id: 1,
      title: "BSc (Hons) in Artificial Intelligence",
      institution: "University of Moratuwa",
      period: "2022 - Present",
      description: "CGPA: 3.78 - Currently in my second year of studies, focusing on machine learning, data science, and AI.",
      icon: <FaUniversity />,
      iconBg: "#4e54c8"
    },
    {
      id: 2,
      title: "Advanced Level",
      institution: "J/Methodist Girls' High School",
      period: "2019 - 2021",
      description: " Z-Score:1.9788 - Completed A/Ls with 3As in Physical Science, Combined Mathematics, and Chemistry.",
      icon: <FaSchool />,
      iconBg: "#f39c12"
    },
    {
      id: 3,
      title: "Ordinary Level",
      institution: "J/Methodist Girls' High School",
      period: "2013 - 2018",
      description: "Completed O/Ls with 9As in English Medium.",
      icon: <FaSchool />,
      iconBg: "#2ecc71"
    }
  ];

  return (
    <section 
      id="education" 
      style={{
        padding: '4rem 2rem',
        background: darkMode 
          ? 'linear-gradient(to bottom, #1a1a1a 0%, #2d2d2d 100%)' 
          : 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            color: darkMode ? '#fff' : '#2c3e50',
            background: darkMode 
              ? 'linear-gradient(90deg, #4e54c8, #8f94fb)' 
              : 'linear-gradient(90deg, #3498db, #2980b9)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Education Timeline
        </motion.h2>

        <div style={{
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: darkMode ? '#444' : '#ddd',
            borderRadius: '10px',
            '@media (max-width: 768px)': {
              left: '31px'
            }
          }
        }}>
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                marginBottom: '3rem',
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                '@media (max-width: 768px)': {
                  justifyContent: 'flex-start'
                }
              }}
            >
              <div style={{
                width: 'calc(50% - 40px)',
                padding: '1.5rem',
                background: darkMode ? '#2d2d2d' : 'white',
                borderRadius: '12px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                '@media (max-width: 768px)': {
                  width: 'calc(100% - 80px)',
                  marginLeft: '80px'
                }
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: index % 2 === 0 ? 'calc(100% + 20px)' : '-60px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: item.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  boxShadow: '0 0 0 4px ' + (darkMode ? '#2d2d2d' : 'white'),
                  '@media (max-width: 768px)': {
                    left: '-60px'
                  }
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '0.5rem',
                  color: darkMode ? '#fff' : '#2c3e50'
                }}>
                  {item.title}
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: darkMode ? '#bbb' : '#7f8c8d'
                }}>
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span>{item.period}</span>
                </div>
                <p style={{
                  color: darkMode ? '#ccc' : '#34495e',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;