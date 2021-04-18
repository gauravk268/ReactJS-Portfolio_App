import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <h1>{props.project.title}</h1>
      <h3>{props.project.description}</h3>
      <button class="btn btn-link">
        <a href={props.project.githubLink}>See more</a>
      </button>
    </div>
  );
}

export default ProjectCard;
