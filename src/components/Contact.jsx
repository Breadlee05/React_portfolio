import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>Thanks for visiting my portfolio! Looking forward to connecting with you.</p>
        
        <div className="contact-links">
          <a href="mailto:breadlee05@gmail.com">
            <FaEnvelope /> Email
          </a>
          <a href="https://linkedin.com/in/breadlee05" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/Breadlee05" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://instagram.com/breadlee05" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

