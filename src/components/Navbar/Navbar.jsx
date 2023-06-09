import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SWLogo from "../../assets/logo-sw-2.png";
// import CWIconWhite from "../../assets/codewars-white.svg";
// import CWIconOrange from "../../assets/codewars-orange.svg";
import "./navbar.css";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-links  ${toggleNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="About" className="nav-align about-link">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="Work" className="nav-align">
                WORK
              </NavLink>
            </li>
            <li>
              <NavLink to="Contact" className="nav-align">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-logo">
          <img src={SWLogo} alt="logo-sw" />
        </div>
        <div className={`nav-icons  ${toggleNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="GitHub">
                <FontAwesomeIcon icon={faGithub} size="2x" className="
                github-icon"/>
              </NavLink>
            </li>
            <li>
              <NavLink to="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="CodeWars"
                className={(isActive) =>
                  isActive ? "cw-icon" : "cw-icon active"
                }
              ></NavLink>
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
