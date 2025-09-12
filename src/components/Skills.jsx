import React from "react";
import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaGitAlt,
  FaServer
} from "react-icons/fa";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 80, icon: <FaJs /> },
  { name: "React", level: 70, icon: <FaReact /> },
  { name: "REST API", level: 70, icon: <FaServer /> },
  { name: "Express.js", level: 70, icon: <FaNodeJs /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs /> },
  { name: "MongoDB", level: 70, icon: <FaDatabase /> },
  { name: "Python", level: 60, icon: <FaPython /> },
  { name: "Git", level: 90, icon: <FaGitAlt /> },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              >
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
