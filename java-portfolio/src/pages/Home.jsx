import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css"; // we'll add this next

export default function Home() {
  return (
    <motion.section
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="overlay"></div>
      <div className="home-content">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span>Priyanka Bodke</span>
        </motion.h1>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Java Full Stack Developer 
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I build secure, scalable, and modern web applications using 
          <strong> Java, Spring Boot, React, and MySQL.</strong>  
          I love turning ideas into real-world applications with clean code and elegant design.
        </motion.p>

        <motion.div
          className="btn-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
         <a href="/Priyanka_resume.pdf" className="btn" download>
  Download Resume
</a>


         
          <a href="https://github.com/priyankabodke" target="_blank" className="btn outline">⭐ GitHub</a>
        </motion.div>

        <motion.div
          className="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="https://www.linkedin.com/in/priyanka-bodke-200422269/" target="_blank" title="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/priyankabodke" target="_blank" title="GitHub">
            <FaGithub size={28} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
