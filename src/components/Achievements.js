import React from "react";

function Achievements(props) {
  return (
    <div className="section-achiev p-5" id="achiev">
      <h1 className="heading">Achievements</h1>
      <ul>
        <h4>
          <li className="achiev detail">
            Participated in the e-Yantra competition 2019-20 (IIT Bombay).
          </li>
          <li className="achiev detail">
            Runner Up in Embedded System Design Event of Avishkar 2019 (MNNIT
            Allahabad).
          </li>
          <li className="achiev detail">
            Participated in the IARC challenge in Techkriti 2019 (IIT Kanpur).
          </li>
          <li className="achiev detail">
            Participated in the IARC and Manual Robotics event of Avishkar 2018
            (MNNIT Allahabad).
          </li>
        </h4>
      </ul>
    </div>
  );
}

export default Achievements;
