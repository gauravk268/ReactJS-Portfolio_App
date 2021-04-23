import React from "react";
import { useData } from "./contexts";

function Skills(props) {
  const { data } = useData();

  return (
    <div className="section-skills p-5">
      <div className="wrapper">
        <div className="skills-holder">
          <h1 className="skills heading">Skills</h1>
          <hr />
          <ul className="list">
            <h3>
              {data[0].skills.map((index, skill) => {
                return <li key={index}>{skill}</li>;
              })}
            </h3>
          </ul>
        </div>

        <div className="lang-holder">
          <h1 className="lang heading">Languages</h1>
          <hr />
          <ul className="list">
            <h3>
              {data[0].languages.map((index, language) => {
                return <li key={index}>{language}</li>;
              })}
            </h3>
          </ul>
        </div>

        <div className="tools-holder">
          <h1 className="tools heading">Tools</h1>
          <hr />
          <ul className="list">
            <h3>
              {data[0].tools.map((index, tools) => {
                return <li key={index}>{tools}</li>;
              })}
            </h3>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
<h1>Skills</h1>;
