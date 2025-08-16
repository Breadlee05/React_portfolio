import React from "react";
import "../styles/About.css";
import resume from "../assets/breadlee_resume.pdf";
import profile from "../assets/profile2.jpg"; // Add your image in assets folder

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I’m a Computer Science graduate passionate about building web applications that are both functional and user-friendly. I work with React on the frontend and Express on the backend, connecting them through REST APIs.
        </p>
        <p>
          I’m comfortable with HTML, CSS, JavaScript, React, Node, and Express, and have built several projects sharpening my skills in creating responsive, interactive apps. During my internship, I worked on both frontend and backend—improving layouts, adding features, and collaborating with the team to enhance overall user experience.
        </p>
        <p>
          I’m looking for an opportunity to prove myself, keep learning, and grow as a developer.
        </p>
        <p>
          <strong>Tech Stack:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, REST API, MongoDB, Git
        </p>
        <a href={resume} download="My_Resume.pdf" className="resume-btn">
          Download Resume
        </a>
      </div>

      <div className="about-image">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}
