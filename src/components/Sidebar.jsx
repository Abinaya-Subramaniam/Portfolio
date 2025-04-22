import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope, FaLinkedin, FaGithub, FaChevronRight } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        const toggleButton = document.querySelector('.sidebar-toggle');
        if (toggleButton && !toggleButton.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'black',
              zIndex: 999,
              display: window.innerWidth > 768 ? 'none' : 'block'
            }}
          />
        )}
      </AnimatePresence>

      <motion.div 
        ref={sidebarRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '280px',
          height: '100vh',
          background: 'linear-gradient(to bottom, #0d47a1, #1e88e5)',
          zIndex: 1000,
          padding: '2rem 1.5rem',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
          '@media (max-width: 768px)': {
            width: '250px'
          }
        }}
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            marginBottom: '2rem',
            position: 'relative'
          }}>
            <motion.div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e88e5',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              AS
            </motion.div>
            
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: window.innerWidth > 768 ? 'none' : 'block'
              }}
            >
              <RiCloseFill />
            </button>
            
            <h2 style={{
              color: 'white',
              marginBottom: '0.5rem',
              fontSize: '1.3rem',
              '@media (max-width: 768px)': {
                fontSize: '1.1rem'
              }
            }}>Abinaya Subramaniam</h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <span style={{
                padding: '0.3rem 0.8rem',
                borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '0.8rem'
              }}>AI Undergraduate</span>
              <span style={{
                padding: '0.3rem 0.8rem',
                borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '0.8rem'
              }}>Data Science Enthusiast</span>
            </div>
          </div>
          
          <nav style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <motion.a 
              href="#home" 
              onClick={handleNavClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.8rem 1rem',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                ':hover': {
                  background: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaHome style={{
                marginRight: '1rem',
                fontSize: '1.2rem'
              }} />
              <span>Home</span>
              <FaChevronRight style={{
                marginLeft: 'auto',
                fontSize: '0.9rem'
              }} />
            </motion.a>
            
            <motion.a 
              href="#about" 
              onClick={handleNavClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.8rem 1rem',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                ':hover': {
                  background: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaUser style={{
                marginRight: '1rem',
                fontSize: '1.2rem'
              }} />
              <span>About Me</span>
              <FaChevronRight style={{
                marginLeft: 'auto',
                fontSize: '0.9rem'
              }} />
            </motion.a>
            
            <motion.a 
              href="#projects" 
              onClick={handleNavClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.8rem 1rem',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                ':hover': {
                  background: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaCode style={{
                marginRight: '1rem',
                fontSize: '1.2rem'
              }} />
              <span>Projects</span>
              <FaChevronRight style={{
                marginLeft: 'auto',
                fontSize: '0.9rem'
              }} />
            </motion.a>
            
            <motion.a 
              href="#skills" 
              onClick={handleNavClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.8rem 1rem',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                ':hover': {
                  background: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaCode style={{
                marginRight: '1rem',
                fontSize: '1.2rem'
              }} />
              <span>Skills</span>
              <FaChevronRight style={{
                marginLeft: 'auto',
                fontSize: '0.9rem'
              }} />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              onClick={handleNavClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.8rem 1rem',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                ':hover': {
                  background: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaEnvelope style={{
                marginRight: '1rem',
                fontSize: '1.2rem'
              }} />
              <span>Contact</span>
              <FaChevronRight style={{
                marginLeft: 'auto',
                fontSize: '0.9rem'
              }} />
            </motion.a>
          </nav>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            <motion.a
              href="https://www.linkedin.com/in/abinaya-subramaniam-b2a16425b/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                fontSize: '1.5rem',
                transition: 'all 0.2s ease'
              }}
              whileHover={{ y: -3, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Abinaya-Subramaniam" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                fontSize: '1.5rem',
                transition: 'all 0.2s ease'
              }}
              whileHover={{ y: -3, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      <motion.button 
        className="sidebar-toggle"
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 999,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #1e88e5, #0d47a1)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <RiCloseFill style={{
            fontSize: '1.5rem'
          }} />
        ) : (
          <>
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'white',
              margin: '3px 0',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'white',
              margin: '3px 0',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'white',
              margin: '3px 0',
              transition: 'all 0.3s ease'
            }}></span>
          </>
        )}
      </motion.button>
    </>
  );
};

export default Sidebar;

