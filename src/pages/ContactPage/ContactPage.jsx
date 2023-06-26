import "./contactpage.css";
import { Element } from "react-scroll";
import { LanguageContext } from "../../context/lang.context";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function ContactPage() {
  const { language } = useContext(LanguageContext);
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
    windowWidth < 768 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  return (
    <Element id="Contact" name="Contact Section">
      <section className="contact-section-container">
        <h1 className="section-headline">
          {language === "EN" ? "CONTACT" : "KONTAKT"}
        </h1>
        <hr />

        <div className="contact-container">
          <h3>{language === "EN" ? "What´s next?" : "Was jetzt?"}</h3>
          <h2>{language === "EN" ? "Get in Touch" : "Kontakt aufnehmen"}</h2>
          <p>
            {language === "EN"
              ? `I am currently looking for a full-time job as a junior developer so
            if you have any job opportunities, want to start a project together,
            or just want to say hi, feel free to click the button below.`
              : `Ich bin derzeit auf der Suche nach einer Vollzeitstelle als Junior Entwickler. Wenn du also irgendwelche Jobangebote hast, ein gemeinsames Projekt starten möchtest oder einfach nur Hallo sagen willst, klicke auf die Schaltfläche.`}
          </p>
          <a href="mailto:woltersh@outlook.de">
            <button type="button" className="contact-btn">
              {language === "EN" ? "SAY HELLO" : "SAG HALLO"}
            </button>
          </a>
        </div>
        {mobile ? (
          <div className="contact-social-btn">
            <a
              href="https://github.com/Cyber-SW"
              style={{ color: "var(--clr-primary-200)" }}
              target="blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="contact-github-icon"
              />
            </a>
            <a
              href="https://www.codewars.com/users/Cyber-SW"
              target="blank"
              className="contact-cw-icon"
            />
            <a
              href="https://www.linkedin.com/in/shawn-wolter-93a263195/"
              style={{ color: "var(--clr-primary-200)" }}
              target="blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className="contact-linkedin-icon"
              />
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="contact-credits">
          <a
            href="https://github.com/Cyber-SW/portfolio-2023"
            target="blank"
            className="credits-link"
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
            className="credits-link"
          >
            <h4>Inspiration</h4>
          </a>
        </div>
      </section>
    </Element>
  );
}

export default ContactPage;
