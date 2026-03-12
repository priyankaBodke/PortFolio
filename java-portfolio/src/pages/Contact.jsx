import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./style.css";

export default function Contact() {
  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <p className="contact-intro">
        I’d love to connect! Whether you have a question, want to collaborate, 
        or discuss opportunities in <strong>Java Backend, Spring Boot, or React development.</strong>
      </p>
      <div className="contact-roles">

  <h3>💼 Open to Opportunities</h3>
  <p>I am currently looking for opportunities in the following roles:</p>

  <div className="roles-list">

    <div className="role-card">
      <h4>Frontend Developer</h4>
      <p>Building responsive user interfaces using HTML, CSS, JavaScript and React.</p>
    </div>

    <div className="role-card">
      <h4>Backend Developer</h4>
      <p>Developing secure and scalable APIs using Java, Spring Boot, Hibernate and MySQL.</p>
    </div>

    <div className="role-card">
      <h4>Data Management</h4>
      <p>Handling database design, queries, and data operations using MySQL and JDBC.</p>
    </div>

  </div>

</div>

      <div className="contact-cards">

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h4>Email</h4>
          <a href="mailto:priyankabodke123@gmail.com">
            priyankabodke123@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="icon" />
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/priyanka-bodke-200422269/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/priyanka-bodke
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="icon" />
          <h4>GitHub</h4>
          <a
            href="https://github.com/priyankabodke"
            target="_blank"
            rel="noreferrer"
          >
            github.com/priyankabodke
          </a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h4>Phone</h4>
          <p>+91 8237894515</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h4>Location</h4>
          <p>Pune, Maharashtra, India</p>
        </div>

      </div>

    </motion.section>
  );
}