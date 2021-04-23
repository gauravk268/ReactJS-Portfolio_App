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
          {data[0].achievements.map((achiev) => {
            return <li className="achiev detail">{achiev}</li>;
          })}
          {/* <li className="achiev detail">
            Awarded Best Domain Name and got appreciated for minimalistic
            approach for project in Hack36 4.0 2021 (MNNIT Allahabad).
          </li>
          <li className="achiev detail">
            First Runner Up in Embedded System Design Event of Avishkar-2019
            (MNNIT Allahabad).
          </li>
          <li className="achiev detail">
            Participated in the IARC challenge in Techkriti 2019 (IIT Kanpur).
          </li>
          <li className="achiev detail">
            School Captain at JNV Sonbhadra (07/2016-04/2017)
          </li> */}
        </h3>
      </ul>
    </div>
  );
}

export default Achievements;
