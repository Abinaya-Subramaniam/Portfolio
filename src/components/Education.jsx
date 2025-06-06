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
      description: " Z-Score:1.9788 - Completed A/Ls with 3As in Physics, Combined Mathematics, and Chemistry.",
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
        padding: '4rem 1rem', // Reduced side padding for mobile
        background: darkMode 
          ? 'linear-gradient(to bottom, #1a1a1a 0%, #2d2d2d 100%)' 
          : 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        width: '100%', // Ensure full width on mobile
        padding: '0 15px' // Add padding to prevent content from touching edges
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', // Responsive font size
            marginBottom: '2rem',
            textAlign: 'center',
            background: darkMode 
              ? 'linear-gradient(90deg, #4e54c8, #8f94fb)' 
              : 'linear-gradient(90deg, #3498db, #2980b9)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            padding: '0 10px' // Add padding for smaller screens
          }}
        >
          Education Timeline
        </motion.h2>

        <div style={{
          position: 'relative',
          paddingTop: '20px',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '31px', // Consistent timeline position for all screen sizes
            width: '4px',
            height: '100%',
            background: darkMode ? '#444' : '#ddd',
            borderRadius: '10px'
          }
        }}>
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }} // Consistent animation direction
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'flex-start', // Consistent layout for all screen sizes
                width: '100%'
              }}
            >
              <div style={{
                width: 'calc(100% - 60px)', // Adjusted width for better mobile display
                marginLeft: '60px', // Space for timeline and icon
                padding: '1.2rem',
                background: darkMode ? '#2d2d2d' : 'white',
                borderRadius: '12px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '-40px',
                  width: '40px', // Slightly smaller icons on mobile
                  height: '40px',
                  borderRadius: '50%',
                  background: item.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1rem',
                  boxShadow: '0 0 0 4px ' + (darkMode ? '#2d2d2d' : 'white'),
                  zIndex: 1
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', // Responsive font size
                  marginBottom: '0.5rem',
                  color: darkMode ? '#fff' : '#2c3e50',
                  wordBreak: 'break-word' // Prevent text overflow on small screens
                }}>
                  {item.title}
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap', // Allow wrapping on small screens
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  color: darkMode ? '#bbb' : '#7f8c8d',
                  fontSize: 'clamp(0.9rem, 3vw, 1rem)' // Responsive font size
                }}>
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span>{item.period}</span>
                </div>
                <p style={{
                  color: darkMode ? '#ccc' : '#34495e',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.9rem, 3vw, 1rem)', // Responsive font size
                  marginTop: '0.5rem'
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