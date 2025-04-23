import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import abinayaImage from '../assets/images/abinaya.jpeg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const [messages, setMessages] = useState([
    { 
      text: "Hi there! I'm Abinaya's AI assistant. Ask me anything about her skills, projects, or experience!", 
      sender: 'bot' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const roles = ['AI Undergraduate', 'Data Science Enthusiast', 'Machine Learning Explorer'];

  // Typing animation effect
  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
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
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call your FastAPI backend
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputMessage }),
      });

      const data = await response.json();
      const botMessage = { text: data.answer, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling API:', error);
      const errorMessage = { 
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f0f7ff 0%, #e1ecf7 100%)',
        position: 'relative'
      }}
    >
      {/* Chatbot toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #3498db, #2980b9)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          zIndex: 1000
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* Chatbot UI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isChatOpen ? 1 : 0,
          y: isChatOpen ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          bottom: '5rem',
          right: '2rem',
          width: '350px',
          maxHeight: '500px',
          borderRadius: '16px',
          background: 'white',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 999,
          visibility: isChatOpen ? 'visible' : 'hidden'
        }}
      >
        <div style={{
          background: 'linear-gradient(90deg, #3498db, #2980b9)',
          color: 'white',
          padding: '1rem',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Abinaya's AI Assistant
        </div>
        
        <div style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                padding: '0.75rem 1rem',
                borderRadius: message.sender === 'user' 
                  ? '16px 16px 0 16px' 
                  : '16px 16px 16px 0',
                background: message.sender === 'user' 
                  ? 'linear-gradient(135deg, #3498db, #2980b9)' 
                  : '#f5f7fa',
                color: message.sender === 'user' ? 'white' : '#2c3e50',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              {message.text}
            </motion.div>
          ))}
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                alignSelf: 'flex-start',
                padding: '0.75rem 1rem',
                borderRadius: '16px 16px 16px 0',
                background: '#f5f7fa',
                color: '#2c3e50',
                display: 'flex',
                gap: '0.5rem'
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#3498db',
                animation: 'pulse 1.5s infinite ease-in-out'
              }}></div>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#3498db',
                animation: 'pulse 1.5s infinite ease-in-out',
                animationDelay: '0.3s'
              }}></div>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#3498db',
                animation: 'pulse 1.5s infinite ease-in-out',
                animationDelay: '0.6s'
              }}></div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSendMessage} style={{
          display: 'flex',
          borderTop: '1px solid #eaeaea',
          padding: '0.75rem'
        }}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about Abinaya..."
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              border: '1px solid #eaeaea',
              borderRadius: '24px',
              outline: 'none',
              fontSize: '0.9rem',
              marginRight: '0.5rem'
            }}
          />
          <button
            type="submit"
            disabled={!inputMessage.trim()}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3498db, #2980b9)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </motion.div>

      {/* Hero content */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          alignItems: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            order: 1,
            textAlign: 'center'
          }}
        >
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: '#2c3e50'
          }}>
            Hi, I'm <span style={{
              fontWeight: '700',
              background: 'linear-gradient(90deg, #3498db, #2980b9)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Abinaya</span>!
          </h1>
          
          <h2 style={{ 
            minHeight: '3rem',
            fontSize: '1.5rem',
            color: '#3498db',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {text}
            <motion.span 
              style={{ 
                marginLeft: '0.2rem',
                color: '#2980b9'
              }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity 
              }}
            >
              |
            </motion.span>
          </h2>
          
          <p style={{ 
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#34495e',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Welcome to my portfolio! I'm passionate about creating intelligent solutions and 
            exploring data-driven insights.
          </p>
          
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1MBEKjf3_LKFhLcWNGwBbNfO30M9vbadU/view?usp=sharing" 
              target='_blank'
              rel='noopener noreferrer'
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                fontWeight: '600',
                textDecoration: 'none',
                background: 'linear-gradient(45deg, #3498db, #2980b9)',
                color: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                fontWeight: '600',
                textDecoration: 'none',
                border: '2px solid #3498db',
                color: '#3498db',
                background: 'transparent',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
        
        <div style={{ 
          order: 0,
          display: 'flex',
          justifyContent: 'center'
        }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: 'relative',
              width: '300px',
              height: '300px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              background: 'white'
            }}
          >
            <img 
              src={abinayaImage} 
              alt="Abinaya" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} 
            />
            
            <div style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              border: '3px solid #3498db',
              borderRadius: '10px',
              top: '-15px',
              left: '-15px',
              borderRight: 'none',
              borderBottom: 'none'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              border: '3px solid #3498db',
              borderRadius: '10px',
              top: '-15px',
              right: '-15px',
              borderLeft: 'none',
              borderBottom: 'none'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              border: '3px solid #3498db',
              borderRadius: '10px',
              bottom: '-15px',
              left: '-15px',
              borderRight: 'none',
              borderTop: 'none'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              border: '3px solid #3498db',
              borderRadius: '10px',
              bottom: '-15px',
              right: '-15px',
              borderLeft: 'none',
              borderTop: 'none'
            }}></div>
            
            <motion.div 
              style={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#3776AB',
                color: 'white',
                top: '20%',
                left: '10%',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 128 128">
                <path fill="white" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-14.759 15.426-14.759h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="scale(.58824)"/>
              </svg>
            </motion.div>
            <motion.div 
              style={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FF6F00',
                color: 'white',
                top: '70%',
                right: '15%',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
              }}
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
              <svg width="24" height="24" viewBox="0 0 128 128">
                <path fill="white" d="M27.925 107.147V20.755l35.938 14.749v14.148H45.832v28.418h18.031v14.149H45.832v14.928h35.938v-14.928h-17.98v-14.149h17.98v-14.148h-17.98V65.41h35.938v41.737H27.925z"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;