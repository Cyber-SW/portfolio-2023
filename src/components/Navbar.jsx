import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const logo = new URL("../assets/logo-sw-2.png", import.meta.url).href;

  const handleToggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="logo-sw" />
        </div>
        <div
          className={`menu-icon ${toggleNav && "active"}`}
          onClick={handleToggleNavbar}
        >
          <span className="bar"></span>
          <span className={`bar middle ${toggleNav && "active"}`}></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-links  ${toggleNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="About">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="Work">WORK</NavLink>
            </li>
            <li>
              <NavLink to="Contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
