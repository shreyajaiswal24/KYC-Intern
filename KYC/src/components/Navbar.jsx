import "./Navbar.css";
import SubNavbar from "./SubNavbar";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-top">
          <div className="logo">
            <span className="logo-icon">
              <img
                src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png"
                alt="KYC Logo"
                className="logo-img"
              ></img>
            </span>
            <span>KYC</span>
          </div>
          <input
            type="text"
            className="search-bar"
            placeholder="Search colleges, courses, locations..."
          />
        </div>
        <SubNavbar />
      </nav>
    </>
  );
}

export default Navbar;
