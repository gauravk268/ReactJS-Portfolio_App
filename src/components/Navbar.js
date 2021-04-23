const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-child navbar-left">
        <div className="navbar-left-child navbar-brand">
          <a href="/">Gaurav</a>
        </div>
      </div>
      <div className="navbar-child navbar-right">
        <div className="navbar-right-child navbar-item">
          <a href="/#projects">Projects</a>
        </div>
        <div className="navbar-right-child navbar-item">
          <a href="/#achiev">Achievements</a>
        </div>
        <div className="navbar-right-child navbar-item">
          <a href="/contact">Contact</a>
        </div>
      </div>
      <a href=".navbar" className="btn top btn-primary">
        &#8682;
      </a>
    </div>
  );
};

export default Navbar;
