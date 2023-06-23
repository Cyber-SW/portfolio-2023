import { useState, useContext } from "react";
import { LanguageContext } from "../../context/lang.context";
import * as Scroll from "react-scroll";
import SWLogo from "../../assets/logo-sw-2.png";
import "./navbar.css";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const { language, toggleLanguage } = useContext(LanguageContext);

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
                {language === "EN" ? "ABOUT ME" : "ÜBER MICH"}
              </Link>
            </li>
            <li>
              <Link to="Work" smooth={true}>
                {language === "EN" ? "PROJECTS" : "PROJEKTE"}
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true}>
                {language === "EN" ? "CONTACT" : "KONTAKT"}
              </Link>
            </li>
          </ul>
        </div>
        <Link to="Home" smooth={true}>
          <div className="nav-logo">
            <img src={SWLogo} alt="logo-sw" />
          </div>
        </Link>

        <div className="lang-btn">
          {language === "EN" ? (
            <button type="button" id="DE" onClick={toggleLanguage}>
              Switch to German
            </button>
          ) : (
            <button type="button" id="EN" onClick={toggleLanguage}>
              Wechseln zu Englisch
            </button>
          )}
        </div>

        {/* <div className={`nav-icons  ${toggleNav && "active"}`}>
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
        </div> */}
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
