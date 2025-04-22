import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(to bottom, #bbdefb 0%, #90caf9 100%)'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          color: '#0d47a1',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>Contact Me</h2>
        
        <form style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 10px 20px rgba(30, 136, 229, 0.1)'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#1e88e5',
                  boxShadow: '0 0 0 3px rgba(30, 136, 229, 0.2)'
                }
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                ':focus': {
                  outline: 'none',
                  borderColor: '#1e88e5',
                  boxShadow: '0 0 0 3px rgba(30, 136, 229, 0.2)'
                }
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                resize: 'vertical',
                ':focus': {
                  outline: 'none',
                  borderColor: '#1e88e5',
                  boxShadow: '0 0 0 3px rgba(30, 136, 229, 0.2)'
                }
              }}
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '8px',
              background: 'linear-gradient(45deg, #1e88e5, #0d47a1)',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;