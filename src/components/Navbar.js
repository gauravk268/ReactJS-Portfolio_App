import { useState } from "react";

const Navbar = () => {
  const [hiddenState, setHiddenState] = useState(false);
  var count = 1;
  const handleMenu = () => {
    setHiddenState(!hiddenState);
  };

  return (
    <nav className="navbar">
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
        <a className="navbar-right-child navbar-item" href="#projects">
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
              href="https://gauravk268.github.io/images/Resume_Gaurav_Kumar.pdf"
            >
              Resume
            </a>
            <a className="navbar-hidden-item" href="#projects">
              Projects
            </a>
            <a className="navbar-hidden-item" href="#achiev">
              Achievements
            </a>
            <a className="navbar-hidden-item" href="#contact">
              Contact
            </a>
          </div>
        )}
      </div>

      <a
        className="btn top btn-primary rounded-circle btn"
        onClick=""
        href="#brand"
      >
        &#8682;
      </a>
    </nav>
  );
};

export default Navbar;
