import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const logo = new URL("../assets/logo-sw-2.png", import.meta.url).href;

  const handleToggleNavbar = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="logo-sw" height="30px" />
        </div>
        <div className={`menu-icon ${toggleNav && "active"}`} onClick={handleToggleNavbar}>
            <span className="bar"></span>
            <span className={`bar middle ${toggleNav && "active"}`}></span>
            <span className="bar"></span>
        </div>
        <div className={`nav-links  ${toggleNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="Work">Work</NavLink>
            </li>
            <li>
              <NavLink to="About">About</NavLink>
            </li>
            <li>
              <NavLink to="Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
