const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-child navbar-left">
        <div className="navbar-brand" id="brand">
          <a href="/">Gaurav</a>
        </div>
      </div>
      <div className="navbar-child navbar-right">
        <a
          className="navbar-right-child navbar-item"
          href="https://gauravk268.github.io/images/Resume_Gaurav_Kumar.pdf"
        >
          Resume
        </a>
        <a className="navbar-right-child navbar-item" href="#achiev">
          Achievements
        </a>
        <a className="navbar-right-child navbar-item" href="#contact">
          Contact
        </a>
      </div>

      <a className="btn top btn-primary" href="#brand">
        &#8682;
      </a>
    </div>
  );
};

export default Navbar;
