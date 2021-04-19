import React from "react";

function ProjectCard(props) {
  return (
    <div className="projectCard p-2">
      <h1 className="project-card title">{props.project.title}</h1>
      <h3 className="project-card desc">{props.project.description}</h3>
      <button class="btn btn-primary">
        <a href={props.project.githubLink}>See more</a>
      </button>
    </div>
  );
}

export default ProjectCard;
