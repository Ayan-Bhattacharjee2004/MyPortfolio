import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Project description goes here.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Project description goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
