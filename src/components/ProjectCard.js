import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card col-lg-4 col-md-6 col-sm-10 mb-5 d-flex">
      <div className="card flex-fill">
        <img
          className="card-img-top"
          src={props.project.image}
          alt="Card cap"
        />
        <div className="card-body">
          <h3 className="project-card card-title">
            <strong>{props.project.title}</strong>
          </h3>
          <p className="project-card card-text">{props.project.description}</p>
        </div>
        <div className="card-footer">
          {props.project.seeMoreLink && (
            <a className="btn btn-warning m-1" href={props.project.seeMoreLink}>
              See More
            </a>
          )}
          {props.project.demoLink && (
            <a className="btn btn-info m-1" href={props.project.demoLink}>
              Live
            </a>
          )}
          {props.project.githubLink && (
            <a className="btn btn-primary m-1" href={props.project.githubLink}>
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
