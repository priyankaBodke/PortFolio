import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(" Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        alert(" Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert(" Error connecting to server.");
    }
  };

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
        I’d love to connect! Whether you have a question, want to collaborate, or just say hi — 
        feel free to reach out anytime. I’m always open to discussing <strong>Java backend projects, React apps, or new opportunities.</strong>
      </p>

      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h4>Email</h4>
          <a href="mailto:priyankabodke123@gmail.com">priyankabodke123@gmail.com</a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="icon" />
          <h4>LinkedIn</h4>
          <a href="https://linkedin.com/in/priyankabodke" target="_blank" rel="noreferrer">
            linkedin.com/in/priyankabodke
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="icon" />
          <h4>GitHub</h4>
          <a href="https://github.com/priyankabodke" target="_blank" rel="noreferrer">
            github.com/priyankabodke
          </a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h4>Phone</h4>
          <p>+918237894515</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h4>Location</h4>
          <p>Pune, Maharashtra, India</p>
        </div>
      </div>

      {/* Contact Form */}
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3>Send a Message</h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </motion.form>
    </motion.section>
  );
}
