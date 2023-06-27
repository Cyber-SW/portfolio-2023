import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/lang.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "@react-spring/web";
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

  const handleLanguageToggle = (e) => {
    toggleLanguage(e);
    handleToggleNavbar();
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

  const navAnimation1 = useSpring({
    from: { opacity: 0, transform: "translateY(1rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const navAnimation2 = useSpring({
    from: { opacity: 0, transform: "translateY(1rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 150,
  });

  const navAnimation3 = useSpring({
    from: { opacity: 0, transform: "translateY(1rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
  });

  const navAnimationLangBtn = useSpring({
    from: { opacity: 0, transform: "translateY(1rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 450,
  });

  const navAnimationLogo = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: mobile ? 250 : 1000,
  });

  return (
    <nav className={"navbar " + navstate}>
      <div className="nav-container no-select">
        <div className={`nav-links  ${toggleNav && "active"}`}>
          <ul>
            <animated.li style={navAnimation1}>
              <Link to="About" smooth={true} onClick={handleToggleNavbar}>
                {language === "EN" ? "ABOUT ME" : "ÜBER MICH"}
              </Link>
            </animated.li>
            <animated.li style={navAnimation2}>
              <Link to="Projects" smooth={true} onClick={handleToggleNavbar}>
                {language === "EN" ? "PROJECTS" : "PROJEKTE"}
              </Link>
            </animated.li>
            <animated.li style={navAnimation3}>
              <Link to="Contact" smooth={true} onClick={handleToggleNavbar}>
                {language === "EN" ? "CONTACT" : "KONTAKT"}
              </Link>
            </animated.li>
            {mobile ? (
              <li
                className={`lang-btn-container-mobile ${toggleNav && "active"}`}
              >
                {language === "EN" ? (
                  <button
                    type="button"
                    id="DE"
                    className="lang-btn"
                    onClick={handleLanguageToggle}
                  >
                    GERMAN
                  </button>
                ) : (
                  <button
                    type="button"
                    id="EN"
                    className="lang-btn"
                    onClick={handleLanguageToggle}
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

        <animated.div className="nav-logo no-select" style={navAnimationLogo}>
          <Link to="Home" smooth={true}>
            <img src={SWLogo} alt="logo-sw" />
          </Link>
        </animated.div>

        {!mobile ? (
          <animated.div
            className={`lang-btn-container ${toggleNav && "active"}`}
            style={navAnimationLangBtn}
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
          </animated.div>
        ) : (
          ""
        )}

        {mobile && (
          <animated.div
            className={`menu-icon ${toggleNav && "active"}`}
            onClick={handleToggleNavbar}
            style={navAnimationLogo}
          >
            <span className="bar"></span>
            <span className={`bar middle ${toggleNav && "active"}`}></span>
            <span className="bar"></span>
          </animated.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
