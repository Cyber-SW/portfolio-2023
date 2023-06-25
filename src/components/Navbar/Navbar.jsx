import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/lang.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import * as Scroll from "react-scroll";
import SWLogo from "../../assets/logo-sw-2.png";
import "./navbar.css";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [navstate, setNavstate] = useState("top");
  const [mobile, setMobile] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { language, toggleLanguage } = useContext(LanguageContext);

  let Link = Scroll.Link;

  const handleToggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const handleWindowWidthResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowWidthResize);

    return () => {
      window.removeEventListener("resize", handleWindowWidthResize);
    };
  }, []);

  useEffect(() => {
    windowWidth < 769 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  useEffect(() => {
    let prevScrollPos = 0;
    window.onscroll = function () {
      let y = window.scrollY;

      if (y > prevScrollPos) {
        setNavstate("down");
      }
      if (y < prevScrollPos) {
        setNavstate("up");
      }
      if (y === 0) {
        setNavstate("top");
      }
      prevScrollPos = y;
    };
  }, []);

  return (
    <nav className={"navbar " + navstate}>
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
            {mobile ? (
              <li
                className={`lang-btn-container-mobile ${toggleNav && "active"}`}
              >
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
                <FontAwesomeIcon
                  icon={faLanguage}
                  size="2x"
                  className="lang-icon"
                />
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>

        <div className="nav-logo">
          <Link to="Home" smooth={true}>
            <img src={SWLogo} alt="logo-sw" />
          </Link>
        </div>

        {!mobile ? (
          <div className={`lang-btn-container ${toggleNav && "active"}`}>
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
            <FontAwesomeIcon
              icon={faLanguage}
              size="2x"
              className="lang-icon"
            />
          </div>
        ) : (
          ""
        )}

        {mobile && (
          <div
            className={`menu-icon ${toggleNav && "active"}`}
            onClick={handleToggleNavbar}
          >
            <span className="bar"></span>
            <span className={`bar middle ${toggleNav && "active"}`}></span>
            <span className="bar"></span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
