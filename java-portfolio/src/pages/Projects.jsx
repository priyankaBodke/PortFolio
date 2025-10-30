import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "🏦 Bank Management System",
      tech: "Java | JDBC | MySQL | Servlet",
      desc: "A full-stack banking application with account creation, transactions, and loan modules.",
      link: "https://github.com/priyankaBodke/Banking-Application-System",
    },
    
    {
      title: "🧑‍🎓 Student Management System",
      tech: "Core Java | OOP Concepts | Collections Framework",
      desc: "Console-based Java application to manage student records using OOP principles and Java Collections like ArrayList and HashMap for data storage and manipulation.",
      link: "",

    },
    {
        title: "🚗 Car Rental Application",
        tech: "Core Java | OOP Concepts",
        desc: "Console-based car rental system built using Object-Oriented Programming principles. It allows users to view available cars, book rentals, and manage customer details using classes and inheritance.",
        link: "https://github.com/priyankaBodke/Car-Rental-System",

            },
    {
      title: "🛒 E-Commerce Website (Backend)",
tech: "Java | Spring Boot | MySQL | REST API",
desc: "Backend application implementing CRUD operations for products,and MySQL. APIs are tested and verified using Postman.",
link: "https://github.com/priyankaBodke/E-Commerce-Website-Backend-",

    },
    {
      title: "🌐 Portfolio Website",
      tech: "React | CSS | Framer Motion | Router",
      desc: "Personal developer portfolio showcasing projects, skills, and contact info.",
      link: "",
    },
  ];

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        A collection of full-stack and backend projects I’ve built using Java, React, and modern technologies.
      </p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3>{p.title}</h3>
            <p className="tech">{p.tech}</p>
            <p className="desc">{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="github-btn">
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
