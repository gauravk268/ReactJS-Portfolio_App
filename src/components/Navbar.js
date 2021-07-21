import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [hiddenState, setHiddenState] = useState(false);
  const handleMenu = () => {
    setHiddenState(!hiddenState);
  };

  const loc = useLocation().pathname;
  let navStyle={}, hiddenMenuStyle={};
  if (loc !== "/") {
    navStyle = {
      background: `linear-gradient(90deg, #8e2de2 0%, rgba(74, 0, 224, 0.84) 98.64%)`,
    };
    hiddenMenuStyle = {
      color: "rgb(99, 20, 177)",
      backgroundColor: "#FFEEFF",
      padding: "1vw",
    };
  }

  return (
    <nav className="navbar" style={navStyle}>
      <div className="navbar-child navbar-left">
        <div className="navbar-brand" id="brand">
          <a href="/">Gaurav</a>
        </div>
      </div>
      <div className="navbar-child nav-gap"></div>
      <div className="navbar-child navbar-right">
        <a
          className="navbar-right-child navbar-item"
          href="https://gauravk268.github.io/images/Resume_Gaurav_Kumar.pdf"
        >
          Resume
        </a>
        <a
          className="navbar-right-child navbar-item"
          href="#projects"
        >
          Projects
        </a>
        <a className="navbar-right-child navbar-item" href="#achiev">
          Achievements
        </a>
        <a className="navbar-right-child navbar-item" href="#contact">
          Contact
        </a>
      </div>

      <div className="navbar-hidden-right btn" onClick={handleMenu}>
        &#9776;
        {hiddenState && (
          <div className="navbar-hidden-menu">
            <a
              className="navbar-hidden-item"
              style={hiddenMenuStyle}
              href="https://gauravk268.github.io/images/Resume_Gaurav_Kumar.pdf"
            >
              Resume
            </a>
            <a
              className="navbar-hidden-item"
              style={hiddenMenuStyle}
              href="#projects"
            >
              Projects
            </a>
            <a
              className="navbar-hidden-item"
              style={hiddenMenuStyle}
              href="#achiev"
            >
              Achievements
            </a>
            <a
              className="navbar-hidden-item"
              style={hiddenMenuStyle}
              href="#contact"
            >
              Contact
            </a>
          </div>
        )}
      </div>

      <a className="btn top btn-primary rounded-circle btn" href="#brand">
        &#8682;
      </a>
    </nav>
  );
};

export default Navbar;
