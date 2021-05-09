import React from "react";
import { useData } from "./contexts";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";

function Projects(props) {
  const { data } = useData();

  return (
    <div className="section-project" id="projects">
      <div className="wrapper container">
        <h1 className="display-6">Projects</h1>
        <hr />
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOutRight"
          duration="1"
        >
          <div className="row">
            {data.projects.map((project) => {
              return <ProjectCard project={project} key={project.key} />;
            })}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Projects;
