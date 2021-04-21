import React from "react";

function Skills(props) {
  return (
    <div className="section-skills p-5">
      <div className="wrapper">
        <div className="skills-holder">
          <h1 className="skills heading">Skills</h1>
          <hr />
          <ul className="list">
            <h3>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Data Structure & Operating Systems</li>
              <li>Front-End Web-Development</li>
            </h3>
          </ul>
        </div>

        <div className="lang-holder">
          <h1 className="lang heading">Languages</h1>
          <hr />
          <ul className="list">
            <h3>
              <li>C/C++</li>
              <li>Python3</li>
              <li>HTML, CSS</li>
              <li>JavaScript</li>
              <li>NodeJS, ExpressJS</li>
            </h3>
          </ul>
        </div>

        <div className="tools-holder">
          <h1 className="tools heading">Tools</h1>
          <hr />
          <ul className="list">
            <h3>
              <li>Bootstrap</li>
              <li>OpenCV</li>
              <li>GitHub</li>
              <li>Ubuntu</li>
              <li>Jupyter Notebook</li>
            </h3>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
<h1>Skills</h1>;
