import React from "react";
import { useData } from "./contexts";
import ProjectCard from "./ProjectCard";

import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import "./Project.css";

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

          <Slider projects={data.projects} />
        </div>
      </div>
    </section>
  );
}

function Slider({ projects }) {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="Conatainer">
      <div className="Children">
        {children}
        <div className="Arrow Left" onClick={handleClick} data-position={position - 1}>
          {"<"}
        </div>
        <div className="Arrow Right" right onClick={handleClick} data-position={position + 1}>
          {">"}
        </div>
      </div>
      <div className="Dots">
        {Array(...Array(total)).map((val, index) => (
          <div className="Dot" key={index} onClick={handleClick} data-position={index}>
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

export default Projects;
