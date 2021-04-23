import React from "react";
import { useData } from "./contexts";

function Skills(props) {
  const { loading, data } = useData();

  return (
    <div className="section-skills p-5">
      <div className="wrapper">
        <div className="skills-holder">
          <h1 className="skills heading">Skills</h1>
          <hr />
          <ul className="list">
            <h3>
              {data[0].skills.map((skill) => {
                return <li>{skill}</li>;
              })}
              {/* <li>Data Structure & Operating Systems</li>
              <li>Web-Development</li>
              <li>Operating System</li>
              <li>DBMS</li>
              <li>Computer Networks</li>
              <li>Machine Learning</li> */}
            </h3>
          </ul>
        </div>

        <div className="lang-holder">
          <h1 className="lang heading">Languages</h1>
          <hr />
          <ul className="list">
            <h3>
              {data[0].languages.map((language) => {
                return <li>{language}</li>;
              })}
              {/* <li>C/C++</li>
              <li>Python3</li>
              <li>HTML, CSS</li>
              <li>JavaScript</li> */}
            </h3>
          </ul>
        </div>

        <div className="tools-holder">
          <h1 className="tools heading">Tools</h1>
          <hr />
          <ul className="list">
            <h3>
              {data[0].tools.map((tools) => {
                return <li>{tools}</li>;
              })}
              {/* <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>GitHub</li>
              <li>Bootstrap</li> */}
            </h3>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
<h1>Skills</h1>;
