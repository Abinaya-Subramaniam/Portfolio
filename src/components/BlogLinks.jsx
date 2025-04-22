import React, { useState } from 'react';
import { motion } from 'framer-motion';

const blogData = {
  medium: [
    { title: "Handling Missing Values in Datasets", url: "https://medium.com/learning-data/handling-missing-data-in-a-dataset-imputation-methods-explained-3e76ca6b4723?source=user_profile_page---------1-------------67613e3a5b51----------------------" },
    { title: "Build a Web Content Extractor", url: "https://medium.com/ai-simplified-in-plain-english/build-a-web-content-extractor-and-q-a-system-with-langchain-hugging-face-b350f678120d?source=your_stories_page--------------------------------------------" },
    { title: "AI Search Algorithms Explained", url: "https://medium.com/ai-simplified-in-plain-english/ai-search-algorithms-uninformed-vs-informed-search-explained-with-real-world-examples-1e73ea9d5905?source=user_profile_page---------2-------------67613e3a5b51----------------------" },
    { title: "Data Engineering - Water Supply Analogy", url: "https://medium.com/@abi12subramaniam/data-engineering-1cf1dd13a9d9?source=user_profile_page---------9-------------67613e3a5b51----------------------" },
    { title: "The Power of Prolog", url: "https://medium.com/@abi12subramaniam/the-power-of-prolog-a-comprehensive-guide-to-logic-programming-for-ai-8590fd58490e" }
  ],
  inkwel: [
    { title: "Neuroplasticity Challenges Traditional Views of Mind and Matter", url: "https://inkwellchronicles360.wordpress.com/2024/06/28/neuroplasticity-challenges-traditional-views-of-mind-and-matter/" },
    { title: "Can Consciousness be Digitized?", url: "https://inkwellchronicles360.wordpress.com/2024/09/30/mind-uploading-can-consciousness-be-digitized/" },
    { title: "Cursor AI - Your Coding Buddy", url: "https://inkwellchronicles360.wordpress.com/2024/12/15/cursor-ai-your-coding-buddy/" },
    { title: "Discriminative Vs Generative Models", url: "https://inkwellchronicles360.wordpress.com/2024/11/29/discriminative-vs-generative-models/" },
    { title: "Joy of Missing Out", url: "https://inkwellchronicles360.wordpress.com/2024/08/12/jomo-the-joy-of-missing-out/" }
  ]
};

const BlogLinks = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="blog" style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(to bottom, #e3f2fd 0%, #bbdefb 100%)'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          color: '#0d47a1',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>Blog</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          '@media (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr'
          }
        }}>
          {/* Medium Card */}
          <motion.div 
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 10px 20px rgba(30, 136, 229, 0.1)',
              transition: 'all 0.3s ease'
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setActiveCard('medium')}
            onMouseLeave={() => setActiveCard(null)}
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
                borderRadius: '50%',
                background: '#1e88e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M22 12l-6.5 9.5h-3.25l5.5-8.5-5.5-8.5h3.25l6.5 9.5zm-10.5-9.5h-3.25l-6.5 9.5 6.5 9.5h3.25l-5.5-8.5 5.5-8.5zm-6.5 0h-3.25l6.5 9.5-6.5 9.5h3.25l5.5-8.5-5.5-8.5z"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#0d47a1',
                margin: 0
              }}>Medium Articles</h3>
            </div>
            
            {(activeCard === 'medium') && (
              <motion.div 
                style={{
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {blogData.medium.map((blog, index) => (
                  <a 
                    key={index}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '0.8rem 0',
                      color: '#424242',
                      textDecoration: 'none',
                      borderBottom: '1px solid #e0e0e0',
                      transition: 'all 0.2s ease',
                      ':hover': {
                        color: '#1e88e5',
                        paddingLeft: '0.5rem'
                      }
                    }}
                  >
                    {blog.title}
                  </a>
                ))}
              </motion.div>
            )}
            
            <a 
              href="https://medium.com/@abi12subramaniam"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                color: '#1e88e5',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                ':hover': {
                  color: '#0d47a1'
                }
              }}
            >
              View All on Medium
            </a>
          </motion.div>
          
          {/* Inkwell Chronicles Card */}
          <motion.div 
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 10px 20px rgba(30, 136, 229, 0.1)',
              transition: 'all 0.3s ease'
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onMouseEnter={() => setActiveCard('inkwel')}
            onMouseLeave={() => setActiveCard(null)}
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
                borderRadius: '50%',
                background: '#1e88e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  <path d="M2 2l7.586 7.586"/>
                  <circle cx="11" cy="11" r="2"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#0d47a1',
                margin: 0
              }}>Inkwell Chronicles</h3>
            </div>
            
            {(activeCard === 'inkwel') && (
              <motion.div 
                style={{
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {blogData.inkwel.map((blog, index) => (
                  <a 
                    key={index}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '0.8rem 0',
                      color: '#424242',
                      textDecoration: 'none',
                      borderBottom: '1px solid #e0e0e0',
                      transition: 'all 0.2s ease',
                      ':hover': {
                        color: '#1e88e5',
                        paddingLeft: '0.5rem'
                      }
                    }}
                  >
                    {blog.title}
                  </a>
                ))}
              </motion.div>
            )}
            
            <a 
              href="https://inkwellchronicles360.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                color: '#1e88e5',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                ':hover': {
                  color: '#0d47a1'
                }
              }}
            >
              View All on Inkwell Chronicles
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogLinks;