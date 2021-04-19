import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card p-2">
      <h1 className="project-card title">{props.project.title}</h1>
      <h3 className="project-card desc px-5">{props.project.description}</h3>
      <button class="btn">
        <a href={props.project.githubLink}>See more</a>
      </button>
    </div>
  );
}

export default ProjectCard;
