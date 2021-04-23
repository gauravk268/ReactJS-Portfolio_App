import React from "react";
import { useData } from "./contexts";

function Achievements(props) {
  const { data } = useData();
  return (
    <div className="section-achiev p-5" id="achiev">
      <h1 className="heading">Achievements</h1>
      <hr />
      <ul>
        <h3>
          {data[0].achievements.map((index, achiev) => {
            return (
              <li key={index} className="achiev detail">
                {achiev}
              </li>
            );
          })}
        </h3>
      </ul>
    </div>
  );
}

export default Achievements;
