import React from "react";
import "../styles/Project.css";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";

const projectsData = [
  {
    title: "Museum Chatbot Ticket Booking System (Full-Stack)",
    img: thumbnail1,
    description:
      "Built an interactive chatbot for booking museum tickets, guiding users to select museum, date, and number of tickets. Bookings are stored in MongoDB Atlas via an Express.js backend, returning a unique ticket ID for each booking. Frontend on Vercel and backend on Render, delivering a smooth user experience.",
    live: "https://museum-chatbot-breadlee.vercel.app/",
    github: "https://github.com/Breadlee05/Museum-Chatbot-Ticket-Booking-System-frontend",
  },
  {
    title: "Movie Watchlist App (Full-Stack)",
    img: thumbnail2,
    description:
      "Developed a full-stack app with secure JWT-based authentication for user login/signup, enabling users to manage personal movie watchlists (add/remove/update). Integrated with the OMDb movie database via REST API to fetch movie details. Built using React.js, Express.js, MongoDB Atlas, and deployed frontend on Vercel and backend on Render to deliver a responsive, user-friendly experience.",
    live: "https://movie-watchlist-breadlee.vercel.app/", 
    github: "https://github.com/Breadlee05/Movie-watchlist-Frontend",
  },
  {
    title: "Portfolio Website",
    img: thumbnail3,
    description:
      "Built a personal portfolio website with React.js to showcase my projects, skills, and achievements. Focused on creating a clean, responsive design for a smooth experience across devices. Deployed the site on Vercel for easy access.",
    live: "https://breadlee-portfolio.vercel.app/",
    github: "https://github.com/Breadlee05/React_portfolio",
  },
  {
    title: "IoT Intrusion Detection System",
    img: thumbnail4,
    description:
      "Developed a deep learning model to detect network intrusions in IoT devices using the UNSW-NB15 dataset. Implemented multiple models for accurate attack detection and integrated Twilio for real-time alerts. The system enhances IoT security with automated monitoring and notifications.",
    github: "https://github.com/Breadlee05/Efficient-intrusion-using-deep-learning-in-IOT",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.img}
              alt={project.title}
              className="project-thumbnail"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
