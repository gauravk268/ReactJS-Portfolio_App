import React from "react";
import { useData } from "./contexts";
import ProjectCard from "./ProjectCard";

function Projects(props) {
  const { projects } = useData();

  return (
    <div className="section-project" id="projects">
      <h1 className="heading">Projects</h1>
      <hr />
      <div className="row">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.key} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
