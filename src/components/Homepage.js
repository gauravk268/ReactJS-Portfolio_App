import React from "react";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Courses from "./Courses";
import Achievements from "./Achievements";
import Feedback from "./Feedback";

function Homepage(props) {
  return (
    <div className="section-homepage">
      <About />
      <Education />
      <Skills />
      <Projects />
      <Courses />
      <Achievements />
      <Feedback />
    </div>
  );
}

export default Homepage;
