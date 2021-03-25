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
          <a href="/about">About</a>
        </div>
        <div className="navbar-right-child navbar-item">
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-right-child navbar-item">
          <a href="/cart">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
