import React from "react";
import { useData } from "./contexts";
import ScrollAnimation from "react-animate-on-scroll";

function Achievements(props) {
  const { data } = useData();
  return (
    <div className="section-achiev" id="achiev">
      <div className="wrapper container">
        <h1 className="display-6">Achievements</h1>
        <hr />
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOutRight"
          duration="1"
        >
          <ul>
            <h3>
              {data.achievements.map((achiev, index) => {
                return (
                  <li key={index} className="h5 achiev detail">
                    {achiev}
                  </li>
                );
              })}
            </h3>
          </ul>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Achievements;
