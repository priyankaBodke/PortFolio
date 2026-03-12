import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import './style.css';

export default function Certifications() {
  const certifications = [
    {
      title: "Python and Java: Master Backend & Frontend Web Development",
      source: "Udemy",
      link: "https://www.linkedin.com/posts/priyanka-bodke-200422269_udemy-fullstackdevelopment-java-activity-7433486634978893824-j5X4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEG8cKABJ-FC4OSh0rTWBkiKCtdenNedDPcS",
    },
    {
      title: "React JS",
      source: "Udemy",
      link: "https://www.linkedin.com/posts/priyanka-bodke-200422269_reactjs-udemy-frontenddeveloper-activity-7415388361818976256-A_NI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEG8cKABJ-FC4OSh0rTWBkiKCtdenNedDPc",
    },
    {
      title: "JavaScript",
      source: "Simplilearn",
      link: "https://www.linkedin.com/posts/priyanka-bodke-200422269_javascript-upskilling-simplilearn-activity-7408454826344484864-L4hn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEG8cKABJ-FC4OSh0rTWBkiKCtdenNedDPc",
    },
    {
      title: "Java Programming",
      source: "Simplilearn",
      link: "https://www.linkedin.com/posts/priyanka-bodke-200422269_simplilearn-java-programming-activity-7396623274203328512-wCd_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEG8cKABJ-FC4OSh0rTWBkiKCtdenNedDPc",
    },
    {
      title: "Core Java Industrial Questions",
      source: "Udemy (Yuva Intern Java Development)",
      link: "https://www.linkedin.com/posts/priyanka-bodke-200422269_java-corejava-kiranacademy-activity-7394068548555407360-uCfB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEG8cKABJ-FC4OSh0rTWBkiKCtdenNedDPc",
    },
    {
      title: "Yuva Intern Java Internship",
      source: "Yuva Intern",
      link: "https://www.linkedin.com/posts/priyanka-bodke-200422269_internship-javadevelopment-learningjourney-activity-7382469749420580865-qCR1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEG8cKABJ-FC4OSh0rTWBkiKCtdenNedDPc",
    },
  ];

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="projects-title">My Certifications</h2>
      <p className="projects-subtitle">
        Certificates I have earned from Udemy and Simplilearn to enhance my skills.
      </p>

      <div className="projects-grid">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            className="project-card" // reuse the same project-card style
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3>{cert.title}</h3>
            <p className="tech">{cert.source}</p>
            <a href={cert.link} target="_blank" rel="noreferrer" className="github-btn">
              <FaExternalLinkAlt className="github-icon" /> View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}