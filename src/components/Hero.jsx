import React from "react";
import "../styles/Hero.css";
import profilePic from "../assets/profile3.jpg"; // Add your profile pic here

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
};


  return (
    <section id="home" className="hero">

      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="hero-image" />
        <h1 className="hero-title">Hi, I'm <span>Breadlee</span></h1>
        <p className="hero-subtitle">Web Developer | React Enthusiast</p>
        <button className="hero-button" onClick={scrollToAbout}>
          About Me
        </button>
        <button className="hero-button" onClick={scrollToProjects}>Explore My Work</button>
      </div>
    </section>
  );
};

export default Hero;
