import { useState, useContext } from "react";
import { LanguageContext } from "../../context/lang.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
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
              <Link to="Projects" smooth={true}>
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

        <div className="nav-logo">
          <Link to="Home" smooth={true}>
            <img src={SWLogo} alt="logo-sw" />
          </Link>
        </div>

        <div className="lang-btn-container">
          {language === "EN" ? (
            <button
              type="button"
              id="DE"
              className="lang-btn"
              onClick={toggleLanguage}
            >
              GERMAN
            </button>
          ) : (
            <button
              type="button"
              id="EN"
              className="lang-btn"
              onClick={toggleLanguage}
            >
              ENGLISCH
            </button>
          )}
          <FontAwesomeIcon icon={faLanguage} size="2x" className="lang-icon" />
        </div>
        {/* <div
          className={`menu-icon ${toggleNav && "active"}`}
          onClick={handleToggleNavbar}
        >
          <span className="bar"></span>
          <span className={`bar middle ${toggleNav && "active"}`}></span>
          <span className="bar"></span>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
