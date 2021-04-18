import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects";

function Projects(props) {
  return (
    <div className="p-5">
      <h1 className="heading">Projects</h1>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}

export default Projects;
