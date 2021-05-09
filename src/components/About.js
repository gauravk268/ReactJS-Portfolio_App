import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";
import { useData } from "./contexts";

const About = () => {
  const { loading, data } = useData();
  return (
    <div className="section-about text-center">
      <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>

      <div className="wrapper">
        <div className="about desc p-5">
          <h1 className="heading h1">Hey, I'm Gaurav</h1>
          <h2>{!loading && data.aboutMsg}</h2>
          <a className="btn btn-info" href="#projects">
            My Projects
          </a>
        </div>
        <img
          className="avatar"
          src="/assets/images/profile-orig.png"
          alt="gaurav"
        />
      </div>
    </div>
  );
};

export default About;
