import React from "react";
import { useData } from "./contexts";
import ProjectCard from "./ProjectCard";

function Projects(props) {
  const { data } = useData();

  return (
    <div className="section-project p-5" id="projects">
      <div className="wrapper container">
        <h1 className="display-4">Projects</h1>
        <hr />
        <div className="row">
          {data.projects.map((project) => {
            return <ProjectCard project={project} key={project.key} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
