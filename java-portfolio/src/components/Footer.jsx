import React from "react";
import "../pages/style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Priyanka Bodke | Java Full Stack Developer</p>
    </footer>
  );
}
