import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import profilePic from "../assets/profile3.jpg";
import resume from "../assets/breadlee_resume.pdf";

const roles = [
  "Web Developer",
  "React Developer",
  "Fullstack Developer",
  "JavaScript Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true); // fade in
      }, 500); // fade transition duration
    }, 3000); // total time per role
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="hero-image" />
        <h1 className="hero-title">
          Hi, I'm <span>Breadlee</span>
        </h1>
        <p className="hero-subtitle">
          <span className={`hero-role ${fade ? "fade-in" : "fade-out"}`}>
            {roles[roleIndex]}
          </span>
        </p>
        <div className="hero-buttons">
          <button className="hero-button" onClick={scrollToProjects}>
            Explore My Projects
          </button>
          <a href={resume} download className="hero-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
