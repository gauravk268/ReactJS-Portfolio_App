import React from "react";
import { useData } from "./contexts";

function Achievements(props) {
  const { data } = useData();
  return (
    <div className="section-achiev p-5" id="achiev">
      <div className="wrapper container">
        <h1 className="display-4">Achievements</h1>
        <hr />
        <ul>
          <h3>
            {data.achievements.map((achiev, index) => {
              return (
                <li key={index} className="display-8 achiev detail">
                  {achiev}
                </li>
              );
            })}
          </h3>
        </ul>
      </div>
    </div>
  );
}

export default Achievements;
