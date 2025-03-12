import React from "react";
import { useData } from "./contexts";

import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";

function Projects(props) {
  const { data } = useData();

  return (
    <section className="projects" id="projects">
      <div className="wrapper container">
        <h1 className="display-6">Projects</h1>
        <hr />
        <div className="row">
          {data.projects.map((project) => {
            return <ProjectCard project={project} key={project.key} />;
          })}
        </div>
        <Slider projects={data.projects} />
      </div>
    </section>
  );
}

function Slider({ projects }) {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="Container">
      <div className="Children">
        {children}
        <div
          className="Arrow Left"
          onClick={handleClick}
          data-position={position - 1}
        >
          {"<"}
        </div>
        <div
          className="Arrow Right"
          right
          onClick={handleClick}
          data-position={position + 1}
        >
          {">"}
        </div>
      </div>
      <div className="Dots">
        {Array(...Array(total)).map((val, index) => (
          <div
            className="Dot"
            key={index}
            onClick={handleClick}
            data-position={index}
          >
            {index === position ? "● " : "○ "}
          </div>
        ))}
      </div>
    </div>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <Carousel>
      {projects.map((project) => {
        return (
          <Slide right>
            <ProjectCard project={project} key={project.key} />
          </Slide>
        );
      })}
    </Carousel>
  );
}

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

export default Projects;
