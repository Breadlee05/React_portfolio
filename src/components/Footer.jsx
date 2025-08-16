import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Breadlee. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://linkedin.com/in/breadlee05" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Breadlee05" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/breadlee05" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

