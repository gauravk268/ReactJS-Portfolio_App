import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item nav-item brand">Gaurav</div>
      <div className="navbar-item"> </div>
      <div className="navbar-item navbar-link-wrapper" >
        <div className="navbar-link nav-item" >Resume</div>
        <div className="navbar-link nav-item" >Projects</div>
        <div className="navbar-link nav-item" >Courses</div>
      </div>
    </div>
  );
}

export default Navbar;