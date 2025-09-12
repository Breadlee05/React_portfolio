import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  const contacts = [
    { name: "Email", icon: <FaEnvelope />, link: "mailto:breadlee05@gmail.com" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/breadlee05" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Breadlee05" },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">Thanks for visiting my portfolio! I’m looking forward to connecting with you.</p>
      <div className="contact-links">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.link} target="_blank" rel="noreferrer">
            {contact.icon} {contact.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
