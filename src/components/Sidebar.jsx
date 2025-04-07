import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope, FaLinkedin, FaGithub, FaChevronRight } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        className={`sidebar ${isOpen ? 'open' : ''}`}
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="sidebar-content">
          <div className="sidebar-header">
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              AS
            </motion.div>
            <h2>Abinaya Subramaniam</h2>
            <div className="title-tags">
              <span>AI Undergraduate</span>
              <span>Data Science</span>
            </div>
          </div>
          
          <nav className="sidebar-nav">
            <motion.a 
              href="#home" 
              className="nav-link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaHome className="nav-icon" />
              <span>Home</span>
              <FaChevronRight className="nav-arrow" />
            </motion.a>
            
            <motion.a 
              href="#about" 
              className="nav-link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaUser className="nav-icon" />
              <span>About Me</span>
              <FaChevronRight className="nav-arrow" />
            </motion.a>
            
            <motion.a 
              href="#projects" 
              className="nav-link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaCode className="nav-icon" />
              <span>Portfolio</span>
              <FaChevronRight className="nav-arrow" />
            </motion.a>
            
            <motion.a 
              href="#skills" 
              className="nav-link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaCode className="nav-icon" />
              <span>Skills</span>
              <FaChevronRight className="nav-arrow" />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="nav-link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
              <FaChevronRight className="nav-arrow" />
            </motion.a>
          </nav>
          
          <div className="sidebar-social">
            <motion.a
              href="https://www.linkedin.com/in/abinaya-subramaniam-b2a16425b/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#0A66C2' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Abinaya-Subramaniame" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#333' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      <motion.button 
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <RiCloseFill className="toggle-icon" />
        ) : (
          <>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </>
        )}
      </motion.button>
    </>
  );
};

export default Sidebar;