import React from "react";
import Project from "../project/Project";
import "./Projects.css";


function Projects({ allProjects }) {
  console.log(allProjects);
  return (
    <div>
      <div className="projects-header">
        <h1> My Projects</h1>
      </div>
      <div className="projects-container">
        {allProjects.map((project) => {
          return <Project className='project' project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
