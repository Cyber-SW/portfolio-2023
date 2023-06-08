import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const logo = new URL("../assets/logo-sw-2.png", import.meta.url).href;

  const handleToggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-links  ${toggleNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="About" className="nav-align">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="Work" className="nav-align">WORK</NavLink>
            </li>
            <li>
              <NavLink to="Contact" className="nav-align">CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-logo">
          <img src={logo} alt="logo-sw" />
        </div>
        <div className={`nav-links  ${toggleNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="GitHub" className="github-link"><FontAwesomeIcon icon={faGithub} size="2x" /></NavLink>
            </li>
            <li>
              <NavLink to="LinkedIn"><FontAwesomeIcon icon={faLinkedin} size="2x" /></NavLink>
            </li>
            <li>
              <NavLink to="CodeWars" className={`codewars-icon  ${toggleNav && "active"}`}></NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`menu-icon ${toggleNav && "active"}`}
          onClick={handleToggleNavbar}
        >
          <span className="bar"></span>
          <span className={`bar middle ${toggleNav && "active"}`}></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
