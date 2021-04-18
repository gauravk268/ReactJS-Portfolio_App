import React from "react";

function Skills(props) {
  return (
    <div className="section-skills">
      <div className="section-skills-wrapper container">
        <div className="skills-holder">
          <div className="skills headTitle">Skills</div>
          <ul className="skills-list">
            <h4>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Data Structure & Operating Systems</li>
              <li>Front-End Web-Development</li>
            </h4>
          </ul>
        </div>

        <div className="lang-holder">
          <div className="lang headTitle">Languages</div>
          <ul className="lang-list">
            <h4>
              <li>C/C++</li>
              <li>Python3</li>
              <li>HTML, CSS</li>
              <li>JavaScript</li>
              <li>NodeJS, ExpressJS</li>
            </h4>
          </ul>
        </div>

        <div className="tools-holder">
          <div className="tools headTitle">Tools</div>
          <ul className="frame-tools-list">
            <h4>
              <li>Bootstrap</li>
              <li>OpenCV</li>
              <li>GitHub</li>
              <li>Ubuntu</li>
              <li>Jupyter Notebook</li>
            </h4>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
<h1>Skills</h1>;
