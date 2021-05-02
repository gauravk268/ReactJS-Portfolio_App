import { useLocation } from "react-router-dom";

const Navbar = () => {
  const IsAtHome = () => {
    if (useLocation().pathname === "/")
      return (
        <div>
          <a className="navbar-right-child navbar-item" href="#achiev">
            Achievements
          </a>
          <a className="navbar-right-child navbar-item" href="/contact">
            Contact
          </a>
        </div>
      );
  };
  return (
    <div className="navbar">
      <div className="navbar-child navbar-left">
        <div className="navbar-brand" id="brand">
          <a href="/">Gaurav</a>
        </div>
      </div>
      <div className="navbar-child navbar-right">{IsAtHome()}</div>

      <a className="btn top btn-primary" href="#brand">
        &#8682;
      </a>
    </div>
  );
};

export default Navbar;
