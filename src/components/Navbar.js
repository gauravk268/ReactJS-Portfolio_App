import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: "easeInOutCubic", });
  };

  return (
    <div className="navbar">
      <div className="navbar-child navbar-left">
        <div className="navbar-brand">
          <a href="/">Gaurav</a>
        </div>
      </div>
      <div className="navbar-child navbar-right">


        {(useLocation().pathname === "/") ? <Link className="navbar-right-child navbar-item" activeClass="active" to="projects" smooth={true} duration={700}>
          Projects</Link> : <a className="navbar-right-child navbar-item"  href="/#projects">Projects</a>}

        {(useLocation().pathname === "/") ? <Link className="navbar-right-child navbar-item" activeClass="active" to="achiev" smooth={true} duration={700}>
          Achievements
        </Link> : <a className="navbar-right-child navbar-item" href="/#achiev">Achievements</a>}

        <div className="navbar-right-child navbar-item">
          <a href="/contact">Contact</a>
        </div>

      </div>

      <button onClick={scrollToTop} className="btn top btn-primary" >
        &#8682;
      </button>


    </div>
  );
};

export default Navbar;
