import React from "react";
import { useData } from "./contexts";

function Skills(props) {
  const { data } = useData();

  return (
    <div className="section-skills p-5">
      <div className="wrapper container">
        <div className="display-4">I can work with</div>
        <hr />
        <div className="skills-holder row">
          {data.skills.map((skill, index) => {
            return (
              <li
                className="display-8 col-lg-4 col-md-4 col-sm-6 col-xs-10 h4"
                key={index}
              >
                {skill}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
<h1>Skills</h1>;
