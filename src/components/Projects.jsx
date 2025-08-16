import React from 'react';
import "../styles/Project.css";
import thumbnail1 from "../assets/thumbnail1.png"; 
import thumbnail2 from "../assets/thumbnail2.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <img src={thumbnail1} alt="Online Chatbot Ticketing System" className="project-thumbnail" />
          <h3>Online Chatbot Ticketing System</h3>
          <p>
            I built a web-based chatbot application that simplifies the museum ticket booking experience. The chatbot guides users through the process of selecting museums, entering booking details like number of tickets, name, email, and choosing a payment method — all through an interactive chat interface.
          </p>
          <a href="https://github.com/Breadlee05/Online-chatbot" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="project-card">
          <img src={thumbnail2} alt="IoT Intrusion Detection System" className="project-thumbnail" />
          <h3>IoT Intrusion Detection System</h3>
          <p>
           For my final year project, I built a system that monitors IoT network traffic and detects intrusions using deep learning models. When it finds suspicious activity, it instantly sends an SMS alert via Twilio to notify the admin. The system achieves high accuracy in spotting threats and helps keep IoT networks secure in real time. It’s a practical way to improve IoT security with timely alerts
          </p>
          <a href="https://github.com/Breadlee05/Efficient-intrusion-using-deep-learning-in-IOT" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
