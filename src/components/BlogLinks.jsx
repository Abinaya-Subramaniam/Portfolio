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
  const [hoveredMedium, setHoveredMedium] = useState(false);
  const [hoveredInkwel, setHoveredInkwel] = useState(false);

  return (
    <section id="blog" className="blog-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="blog-content"
      >
        <h2 className="section-title">Blog</h2>
        
        <div className="blog-cards-container">
          {/* Medium Card - Now using separate state */}
          <motion.div 
            className="blog-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setHoveredMedium(true)}
            onHoverEnd={() => setHoveredMedium(false)}
          >
            <div className="card-header">
              <div className="blog-logo medium-logo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12l-6.5 9.5h-3.25l5.5-8.5-5.5-8.5h3.25l6.5 9.5zm-10.5-9.5h-3.25l-6.5 9.5 6.5 9.5h3.25l-5.5-8.5 5.5-8.5zm-6.5 0h-3.25l6.5 9.5-6.5 9.5h3.25l5.5-8.5-5.5-8.5z"/>
                </svg>
              </div>
              <h3>Medium Articles</h3>
            </div>
            
            {hoveredMedium && (
              <motion.div 
                className="blog-links-dropdown"
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
                    className="blog-post-link"
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
              className="card-view-all"
            >
              View All on Medium
            </a>
          </motion.div>
          
          {/* Inkwell Chronicles Card - Now using separate state */}
          <motion.div 
            className="blog-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onHoverStart={() => setHoveredInkwel(true)}
            onHoverEnd={() => setHoveredInkwel(false)}
          >
            <div className="card-header">
              <div className="blog-logo inkwel-logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  <path d="M2 2l7.586 7.586"/>
                  <circle cx="11" cy="11" r="2"/>
                </svg>
              </div>
              <h3>Inkwell Chronicles</h3>
            </div>
            
            {hoveredInkwel && (
              <motion.div 
                className="blog-links-dropdown"
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
                    className="blog-post-link"
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
              className="card-view-all"
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