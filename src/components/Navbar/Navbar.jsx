import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import * as Scroll from "react-scroll";
import SWLogo from "../../assets/logo-sw-2.png";
import "./navbar.css";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  let Link = Scroll.Link;

  const handleToggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-links  ${toggleNav && "active"}`}>
          <ul>
            <li>
              <Link to="About" smooth={true}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="Work" smooth={true}>
                WORK
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <Link to="Home" smooth={true}>
          <div className="nav-logo">
            <img src={SWLogo} alt="logo-sw" />
          </div>
        </Link>

        <div className={`nav-icons  ${toggleNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="https://github.com/Cyber-SW" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.linkedin.com/in/shawn-wolter-93a263195/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.codewars.com/users/Cyber-SW"
                target="_blank"
                className="cw-icon"
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
