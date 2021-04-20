import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects";

function Projects(props) {
  return (
    <div className="section-project" id="projects">
      <h1 className="heading">Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
