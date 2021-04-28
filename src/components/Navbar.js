import {Link, animateScroll as scroll}  from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({smooth:"easeInOutCubic",});
  };

  return (
    <div className="navbar">
      <div className="navbar-child navbar-left">
        <div className="navbar-brand">
          <a href="/">Gaurav</a>
        </div>
      </div>
      <div className="navbar-child navbar-right">

        <Link className="navbar-right-child navbar-item" activeClass="active" to="projects" smooth={true} duration={700}>
          Projects
        </Link>

        <Link className="navbar-right-child navbar-item" activeClass="active" to="achiev" smooth={true} duration={700}>
          Achievements
        </Link>

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
