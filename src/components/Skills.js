import React from "react";
import { useData } from "./contexts";

function Skills(props) {
  const { data } = useData();

  return (
    <section className="skills">
      <div className="wrapper container">
        <div className="display-6">I can work with</div>
        <hr />

        <div className="skills-holder text-center">
          {data.skills.map((skill, index) => {
            return (
              <li className="display-8 btn btn-info h4 mx-2" key={index}>
                {skill}
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
<h1>Skills</h1>;
