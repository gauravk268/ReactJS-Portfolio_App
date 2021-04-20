import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card col-lg-4 col-md-6 col-12 mb-5 d-flex">
      <div className="card flex-fill">
        <img
          className="card-img-top"
          src={props.project.image}
          alt="Card cap"
        />
        <div className="card-body">
          <h4 className="project-card card-title">{props.project.title}</h4>
          <p className="project-card card-text">{props.project.description}</p>
        </div>
        <div className="card-footer">
          {props.project.demoLink && (
            <a className="btn btn-info" href={props.project.demoLink}>
              Live
            </a>
          )}
          {props.project.githubLink && (
            <a className="btn btn-primary" href={props.project.demoLink}>
              Github Repo
            </a>
          )}
          {/* <a className="btn btn-primary" href={props.project.githubLink}>
            Github Repo
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
