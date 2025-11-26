import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          <img src="/Priya_img.jpg" alt="Priyanka Bodke" />

           
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>About Me</h2>
          <p>
            Hello! I'm <span>Priyanka Bodke</span>, a dedicated and passionate 
            <strong> Java Full Stack Developer</strong> who loves building 
            modern, secure, and scalable web applications.
          </p>

          <p>
            I specialize in <strong>Java, Spring Boot, Hibernate,</strong> and 
            <strong> MySQL</strong> for backend development. On the frontend, 
            I create dynamic user interfaces using <strong>React, HTML, CSS,</strong> 
            and <strong>JavaScript.</strong>
          </p>

          <p>
            My goal is to deliver user-focused solutions with clean, efficient, 
            and maintainable code. I’m continuously exploring new technologies to 
            stay updated and improve development workflows.
          </p>

          <div className="about-highlights">
            <div>
              <h4>🎓 Education</h4>
              <p><strong>MCA</strong> – SNDT University</p>
              <p><strong>BCA</strong> – SPPU University</p>
            </div>
            <div>
              <h4>💼 Experience</h4>
              <p>Fresher</p>
            </div>
            <div>
              <h4>🌐 Interests</h4>
              <p>Java Backend Technologies, React Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
