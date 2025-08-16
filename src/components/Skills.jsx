// src/components/Skills.js
import React from "react";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "RestAPI", level: 70 },
  { name: "Express.js", level: 70 },
   { name: "Node.js", level: 70 },
    { name: "Mongodb", level: 65 },
    { name: "Python", level: 60 },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-name">{skill.name}</span>
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

