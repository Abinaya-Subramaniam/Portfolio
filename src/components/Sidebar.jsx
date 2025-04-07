import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope, FaLinkedin, FaGithub, FaBehance, FaFacebook, FaDribbble } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        className={`sidebar ${isOpen ? 'open' : ''}`}
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="logo">AS</div>
            <h2>Abinaya Subramaniam</h2>
            <p>AI Undergraduate</p>
            <p>Data Science Enthusiast</p>
          </div>
          
          <nav className="sidebar-nav">
            <a href="#home" className="nav-link">
              <FaHome className="nav-icon" />
              <span>Home</span>
            </a>
            <a href="#about" className="nav-link">
              <FaUser className="nav-icon" />
              <span>About Me</span>
            </a>
            <a href="#projects" className="nav-link">
              <FaCode className="nav-icon" />
              <span>Portfolio</span>
            </a>
            <a href="#skills" className="nav-link">
              <FaCode className="nav-icon" />
              <span>Skills</span>
            </a>
            <a href="#contact" className="nav-link">
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </a>
          </nav>
          
          <div className="sidebar-social">
            <a href="https://www.linkedin.com/in/abinaya-subramaniam-b2a16425b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Abinaya-Subramaniame" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

          </div>
        </div>
      </motion.div>
      
      <button 
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '×' : '☰'}
      </button>
    </>
  );
};

export default Sidebar;