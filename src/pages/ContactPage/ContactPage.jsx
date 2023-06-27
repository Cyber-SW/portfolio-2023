import "./contactpage.css";
import { Element } from "react-scroll";
import { LanguageContext } from "../../context/lang.context";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useSpring, useScroll, animated } from "@react-spring/web";

function ContactPage() {
  const { language } = useContext(LanguageContext);
  const [mobile, setMobile] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollVal, setScrollVal] = useState(0);

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

  const [contactsAnimation1, contactsAnimationApi1] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  const [contactsAnimation2, contactsAnimationApi2] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  const [contactsAnimation3, contactsAnimationApi3] = useSpring(() => ({
    opacity: 0,
  }));

  const [contactsAnimation4, contactsAnimationApi4] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(scrollYProgress.toFixed(2));
    },
  });

  useEffect(() => {
    scrollVal > 0.73
      ? contactsAnimationApi1.start({
          opacity: 1,
          transform: "translateY(0rem)",
        })
      : contactsAnimationApi1.start({
          opacity: 0,
          transform: "translateY(2rem)",
        });

    scrollVal > 0.84
      ? contactsAnimationApi2.start({
          opacity: 1,
          transform: "translateY(0rem)",
        })
      : contactsAnimationApi2.start({
          opacity: 0,
          transform: "translateY(2rem)",
        });

    scrollVal > 0.99
      ? contactsAnimationApi3.start({
          opacity: 1,
        })
      : contactsAnimationApi3.start({
          opacity: 0,
        });

    scrollVal > 0.97
      ? contactsAnimationApi4.start({
          opacity: 1,
          transform: "translateY(0rem)",
        })
      : contactsAnimationApi4.start({
          opacity: 0,
          transform: "translateY(2rem)",
        });
  }, [
    scrollVal,
    contactsAnimationApi1,
    contactsAnimationApi2,
    contactsAnimationApi3,
    contactsAnimationApi4,
  ]);

  return (
    <Element id="Contact" name="Contact Section">
      <section className="contact-section-container">
        <animated.h1 className="section-headline" style={contactsAnimation1}>
          {language === "EN" ? "CONTACT" : "KONTAKT"}
        </animated.h1>
        <animated.hr style={contactsAnimation1} />

        <animated.div className="contact-container" style={contactsAnimation2}>
          <h3>{language === "EN" ? "What´s next?" : "Was jetzt?"}</h3>
          <h2>{language === "EN" ? "Get in Touch" : "Kontakt aufnehmen"}</h2>
          <p>
            {language === "EN"
              ? `I am currently looking for a full-time job as a junior developer so
            if you have any job opportunities, want to start a project together,
            or just want to say hi, feel free to click the button below.`
              : `Ich bin derzeit auf der Suche nach einer Vollzeitstelle als Junior Entwickler. Wenn du also irgendwelche Jobangebote hast, ein gemeinsames Projekt starten möchtest oder einfach nur Hallo sagen willst, klicke auf die Schaltfläche.`}
          </p>
          <a href="mailto:woltersh@outlook.de" className="no-select">
            <button type="button" className="contact-btn no-select">
              {language === "EN" ? "SAY HELLO" : "SAG HALLO"}
            </button>
          </a>
        </animated.div>
        {mobile ? (
          <animated.div
            className="contact-social-btn"
            style={contactsAnimation4}
          >
            <a
              href="https://github.com/Cyber-SW"
              className="no-select"
              style={{ color: "var(--clr-primary-200)" }}
              target="blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="contact-github-icon no-select"
              />
            </a>
            <a
              href="https://www.codewars.com/users/Cyber-SW"
              target="blank"
              className="contact-cw-icon no-select"
            />
            <a
              href="https://www.linkedin.com/in/shawn-wolter-93a263195/"
              className="no-select"
              style={{ color: "var(--clr-primary-200)" }}
              target="blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className="contact-linkedin-icon no-select"
              />
            </a>
          </animated.div>
        ) : (
          ""
        )}
        <animated.div className="contact-credits" style={contactsAnimation3}>
          <a
            href="https://github.com/Cyber-SW/portfolio-2023"
            target="blank"
            className="credits-link no-select"
          >
            <h4>
              Designed & developed by Shawn Wolter
              <br />
              with React and Vite.
            </h4>
          </a>
          <a
            href="https://v4.brittanychiang.com/"
            target="blank"
            className="credits-link no-select"
          >
            <h4>Inspiration</h4>
          </a>
        </animated.div>
      </section>
    </Element>
  );
}

export default ContactPage;
