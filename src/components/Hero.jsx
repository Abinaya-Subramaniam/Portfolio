import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import abinayaImage from '../assets/images/abinaya.jpeg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [animationComplete, setAnimationComplete] = useState(false);

  const roles = ['AI Undergraduate', 'Data Science Enthusiast'];

  useEffect(() => {
    if (animationComplete) return;

    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        if (loopNum === 0) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (loopNum === 1) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (loopNum === 2) {
          setAnimationComplete(true);
        }
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 30 : 150);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, animationComplete]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-content"
        >
          <h1>Hi, I'm <span className="highlight">Abinaya</span>!</h1>
          <h2 className="typing-animation">
            {text}
            {!animationComplete && <span className="cursor">|</span>}
          </h2>
          <p className="welcome-text">
            Welcome to my portfolio! I'm passionate about creating intelligent solutions and 
            exploring data-driven insights.
          </p>
          <div className="hero-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1C0irvy7Ufk0tgn1rZeO0Qh7OxqFa9Gt_/view?usp=sharing" 
              target='_blank'
              className="btn btn-primary"
            >
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn btn-secondary"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
        
        <div className="hero-image-container">
          <motion.div 
            className="image-frame"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={abinayaImage} alt="Abinaya" className="hero-image" />
          
            <div className="image-decorator top-left"></div>
            <div className="image-decorator top-right"></div>
            <div className="image-decorator bottom-left"></div>
            <div className="image-decorator bottom-right"></div>
     
            <motion.div 
              className="tech-icon python"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg viewBox="0 0 128 128">
                <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-14.759 15.426-14.759h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="scale(.58824)"/>
              </svg>
            </motion.div>
            <motion.div 
              className="tech-icon tensorflow"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <svg viewBox="0 0 128 128">
                <path fill="#FF6F00" d="M1.089.02h124.902v124.902H1.089V.02z"/>
                <path fill="#FFF" d="M27.925 107.147V20.755l35.938 14.749v14.148H45.832v28.418h18.031v14.149H45.832v14.928h35.938v-14.928h-17.98v-14.149h17.98v-14.148h-17.98V65.41h35.938v41.737H27.925z"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;