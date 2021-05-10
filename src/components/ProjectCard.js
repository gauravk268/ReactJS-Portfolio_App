import React from "react";

function ProjectCard(props) {
  return (
    <section className="project-card col-lg-4 col-md-5 col-sm-6 col-xs-12 mb-5 d-flex">
      <div className="card flex-fill">
        <img
          className="card-img-top"
          src={props.project.image}
          alt="Card cap"
        />
        <div className="project-card-overlay">
          <div className="card-body">
            <p className="card-title h6">
              <strong>{props.project.title}</strong>
            </p>
            <p className="card-text desc">{props.project.description}</p>
          </div>
          <div className="card-footer">
            {props.project.seeMoreLink && (
              <a
                className="btn btn-warning m-1"
                href={props.project.seeMoreLink}
              >
                See More
              </a>
            )}
            {props.project.demoLink && (
              <a className="btn btn-info m-1" href={props.project.demoLink}>
                Live
              </a>
            )}
            {props.project.githubLink && (
              <a
                className="btn btn-primary m-1"
                href={props.project.githubLink}
              >
                Github
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
