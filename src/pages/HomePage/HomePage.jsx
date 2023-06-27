import "./homepage.css";
import * as Scroll from "react-scroll";
import { Element } from "react-scroll";
import { LanguageContext } from "../../context/lang.context";
import { useContext, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

function HeroSection() {
  const [mobile, setMobile] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [btnAnimation, setBtnAnimation] = useState(false);
  const { language } = useContext(LanguageContext);

  let Link = Scroll.Link;

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

  const activateBtnAnimation = () => {
    setBtnAnimation(true);
  };

  useEffect(() => {
    setTimeout(activateBtnAnimation, mobile ? 1750 : 2500);
  }, []);

  const heroAnimation1 = useSpring({
    from: { opacity: 0, transform: "translateY(5rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: mobile ? 500 : 1250,
  });

  const heroAnimation2 = useSpring({
    from: { opacity: 0, transform: "translateY(5rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: mobile ? 750 : 1500,
  });

  const heroAnimation3 = useSpring({
    from: { opacity: 0, transform: "translateY(5rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: mobile ? 1000 : 1750,
  });

  const heroAnimation4 = useSpring({
    from: { opacity: 0, transform: "translateY(5rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: mobile ? 1250 : 2000,
  });

  const heroAnimationBtn = useSpring({
    from: { opacity: 0, transform: "translateY(5rem)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: mobile ? 1500 : 2250,
  });

  return (
    <Element id="Home" name="Home Page">
      <section className="hero-section-container">
        <div className="hero-headline-container">
          <animated.h3 style={heroAnimation1}>
            {language === "EN"
              ? "Welcome to my portfolio page"
              : "Willkommen auf meiner Portfolio-Seite"}
          </animated.h3>
          <animated.h1 style={heroAnimation2}>
            {language === "EN" ? "I am Shawn Wolter," : "Ich bin Shawn Wolter"}
          </animated.h1>
          <animated.h2 style={heroAnimation3}>
            {language === "EN"
              ? "Web Developer and Media Designer."
              : "Web Entwickler und Mediengestalter."}
          </animated.h2>
          <animated.p style={heroAnimation4}>
            {language === "EN"
              ? `Design and technology interest me since I was a little kid when I
            was very passionate about drawing and playing with Legos. Things
            need to be functional but also need to look good, that was my motto
            and is to this day.`
              : `Design und Technologie begleiten mich schon seit meiner Kindheit, als ich noch gern gezeichnet oder mit Legos gespielt habe. Für mich müssen die Dinge funktional sein, aber eben auch gut aussehen. Das war mein Motto und ist es bis heute.`}
          </animated.p>
          <Link to="Projects" smooth={true}>
            <animated.button
              type="button"
              className={`hero-section-btn  ${
                btnAnimation && "active"
              } no-select`}
              style={heroAnimationBtn}
            >
              {language === "EN"
                ? "CHECK OUT\nMY WORK"
                : "SIEH DIR MEINE ARBEIT AN"}
            </animated.button>
          </Link>
        </div>
      </section>
    </Element>
  );
}

export default HeroSection;
