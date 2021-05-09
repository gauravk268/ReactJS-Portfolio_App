import React from "react";
import { useData } from "./contexts";
import ScrollAnimation from "react-animate-on-scroll";

function Skills(props) {
  const { data } = useData();

  return (
    <div className="section-skills animate__animated animate__slideInRight">
      <div className="wrapper container">
        <div className="display-6">I can work with</div>
        <hr />
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOutLeft"
          duration="1"
        >
          <div className="skills-holder text-center">
            {data.skills.map((skill, index) => {
              return (
                <li className="display-8 btn btn-info h4 mx-2" key={index}>
                  {skill}
                </li>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Skills;
<h1>Skills</h1>;
