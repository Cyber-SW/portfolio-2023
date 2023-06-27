import AboutImage from "../../assets/about-triangle/about-triangle-image-white-mirror.png";
import "./aboutpage.css";
import { Element } from "react-scroll";
import { LanguageContext } from "../../context/lang.context";
import { useContext, useState, useEffect } from "react";
import Certificates from "../../../public/Documents/certificates Shawn Wolter.pdf";
import CV from "../../../public/Documents/cv-resume Shawn Wolter.pdf";
import Zeugnisse from "../../../public/Documents/Zeugnisse Shawn Wolter.pdf";
import Lebenslauf from "../../../public/Documents/cv-resume-german Shawn Wolter.pdf";
import { useSpring, useScroll, animated } from "@react-spring/web";

function AboutSection() {
  const { language } = useContext(LanguageContext);
  const [scrollVal, setScrollVal] = useState(0);
  const [mobile, setMobile] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    windowWidth < 1381 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  const [aboutAnimation1, aboutAnimationApi1] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  const [aboutAnimation2, aboutAnimationApi2] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  const [aboutAnimation3, aboutAnimationApi3] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  const [aboutAnimation4, aboutAnimationApi4] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(scrollYProgress.toFixed(2));
    },
  });

  useEffect(() => {
    scrollVal > 0.05
      ? aboutAnimationApi1.start({ opacity: 1, transform: "translateY(0rem)" })
      : aboutAnimationApi1.start({ opacity: 0, transform: "translateY(2rem)" });

    scrollVal > 0.13
      ? aboutAnimationApi2.start({ opacity: 1, transform: "translateY(0rem)" })
      : aboutAnimationApi2.start({ opacity: 0, transform: "translateY(2rem)" });

    if (mobile) {
      scrollVal > 0.2
        ? aboutAnimationApi3.start({
            opacity: 1,
            transform: "translateY(0rem)",
          })
        : aboutAnimationApi3.start({
            opacity: 0,
            transform: "translateY(2rem)",
          });
    } else {
      scrollVal > 0.15
        ? aboutAnimationApi3.start({
            opacity: 1,
            transform: "translateY(0rem)",
          })
        : aboutAnimationApi3.start({
            opacity: 0,
            transform: "translateY(2rem)",
          });
    }

    if (mobile) {
      scrollVal > 0.24
        ? aboutAnimationApi4.start({
            opacity: 1,
            transform: "translateY(0rem)",
          })
        : aboutAnimationApi4.start({
            opacity: 0,
            transform: "translateY(2rem)",
          });
    } else {
      scrollVal > 0.17
        ? aboutAnimationApi4.start({
            opacity: 1,
            transform: "translateY(0rem)",
          })
        : aboutAnimationApi4.start({
            opacity: 0,
            transform: "translateY(2rem)",
          });
    }
  }, [
    scrollVal,
    mobile,
    aboutAnimationApi1,
    aboutAnimationApi2,
    aboutAnimationApi3,
    aboutAnimationApi4,
  ]);

  return (
    <Element id="About" name="About Section">
      <section className="about-section-container">
        <animated.h1 className="section-headline" style={aboutAnimation1}>
          {language === "EN" ? "ABOUT ME" : "ÜBER MICH"}
        </animated.h1>
        <animated.hr style={aboutAnimation1} />

        <div className="about-container">
          <div className="about-left-container">
            <animated.div className="about-btn-img" style={aboutAnimation2}>
              <div className="about-btn-container">
                <a href={language === "EN" ? CV : Lebenslauf} target="blank">
                  <button
                    type="button"
                    id="cv"
                    className="about-cv-btn no-select"
                    style={
                      language === "DE"
                        ? { paddingTop: "0.3rem" }
                        : { paddingTop: "0" }
                    }
                  >
                    {language === "EN" ? "CV/\nRESUME" : "LEBENS-\nLAUF"}
                  </button>
                </a>
                <a
                  href={language === "EN" ? Certificates : Zeugnisse}
                  target="blank"
                >
                  <button
                    type="button"
                    id="certificates"
                    className="about-certificates-btn no-select"
                  >
                    {language === "EN" ? "CERTIFI-\nCATES" : "ZEUG-\nNISSE"}
                  </button>
                </a>
              </div>
              <div className="about-image-container">
                <img src={AboutImage} alt="about-image" />
              </div>
            </animated.div>

            <animated.div
              className="about-skills-container"
              style={aboutAnimation3}
            >
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node.Js</li>
                <li>Handlebars</li>
                <li>Axios</li>
                <li>Vite</li>
                <li>Git/GitHub</li>
              </ul>
            </animated.div>
          </div>

          <animated.div
            className="about-text-container"
            style={aboutAnimation4}
          >
            <h3>
              {language === "EN"
                ? "The short version of"
                : "Die Kurzversion von"}
            </h3>
            <h2>
              {language === "EN"
                ? "How I Became a Developer"
                : "Wie ich Entwickler geworden bin"}
            </h2>
            <p>
              {language === "EN"
                ? `Even during my apprenticeship as a media designer, I was
              fascinated by web technologies such as HTML and CSS. After
              completing the apprenticeship, I didn't know where the journey
              should go. So I started working on my own and created Shopify
              stores, logo designs, and video ads. I enjoyed building online
              stores so much that I began to watch coding videos on YouTube
              without understanding a single line of code. From then on it was
              clear to me, I would become a developer.`
                : `Schon während meiner Ausbildung zum Mediengestalter war ich von Webtechnologien wie HTML und CSS fasziniert. 
                Nach dem erfolgreichen Absolvieren der Ausbildung, wusste ich nicht wohin die Reise gehen sollte. 
                Also arbeitete ich eigenständig und erstellte Shopify Shops, Logodesigns und Video-Ads. 
                Das Erstellen von Online-Shops machte mir so sehr Spaß, dass ich anfing YouTube Videos übers Programmieren zu gucken, ohne auch nur eine Zeile Code zu verstehen. 
                Von da an war für mich klar, ich werde Entwickler.`}
            </p>
          </animated.div>
        </div>
      </section>
    </Element>
  );
}

export default AboutSection;
