import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql, SiJavascript } from "react-icons/si";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava />, color: "#f89820" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
    { name: "Hibernate", icon: <SiHibernate />, color: "#59666c" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
    { name: "HTML", icon: <FaHtml5 />, color: "#e44d26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
    { name: "React", icon: <FaReact />, color: "#61dbfb" },
  ];

  return (
    <motion.section
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="skills-heading"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
         Technical Skills
      </motion.h2>

      <p className="skills-intro">
        Technologies I use to craft efficient and modern web applications.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
