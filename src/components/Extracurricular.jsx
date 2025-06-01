import React from 'react';
import { motion } from 'framer-motion';
import { FaPenFancy, FaHandsHelping, FaUsers } from 'react-icons/fa';

const Extracurricular = ({ darkMode }) => {
  const activities = [
    {
      id: 1,
      title: "Content Writing",
      organization: "Medium & Inkwell Chronicles",
      role: "Blogger & Content Writer",
      period: "Summer 2023-2024",
      icon: <FaPenFancy />,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "AIESEC in Colombo South",
      organization: "AIESEC",
      role: "Information Technology Manager, MarCom Manager & Organizing Committee Member",
      period: "2023-2025",
      icon: <FaUsers />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Rotaract Club",
      organization: "University of Moratuwa",
      role: "Volunteer",
      period: "2023-1024",
      icon: <FaHandsHelping />,
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="extracurricular" style={{
      padding: '4rem 2rem',
      background: darkMode 
        ? 'linear-gradient(to bottom, #2d2d2d 0%, #1a1a1a 100%)' 
        : 'linear-gradient(to bottom, #e9ecef 0%, #dee2e6 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
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
              ? 'linear-gradient(90deg, #f39c12, #e67e22)' 
              : 'linear-gradient(90deg, #e67e22, #d35400)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Extracurricular Activities
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          },
          '@media (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
          }
        }}>
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                background: darkMode ? '#333' : 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                height: '150px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: darkMode ? 'brightness(0.7)' : 'none'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: getActivityColor(index),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}>
                  {activity.icon}
                </div>
              </div>
              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '0.5rem',
                  color: darkMode ? '#fff' : '#2c3e50'
                }}>
                  {activity.title}
                </h3>
                <p style={{
                  color: darkMode ? '#bbb' : '#7f8c8d',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  {activity.organization}
                </p>
                <p style={{
                  color: getActivityColor(index),
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  {activity.role} • {activity.period}
                </p>
                <p style={{
                  color: darkMode ? '#ccc' : '#34495e',
                  lineHeight: '1.6'
                }}>
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function for activity colors
const getActivityColor = (index) => {
  const colors = ['#4e54c8', '#f39c12', '#2ecc71'];
  return colors[index % colors.length];
};

export default Extracurricular;