import AboutImage from "../../assets/about-triangle/about-triangle-image-white-mirror.png";
import "./aboutpage.css";
import { Element } from "react-scroll";
import { LanguageContext } from "../../context/lang.context";
import { useContext } from "react";
import Certificates from "../../../public/Documents/certificates Shawn Wolter.pdf";
import CV from "../../../public/Documents/cv-resume Shawn Wolter.pdf";
import Zeugnisse from "../../../public/Documents/Zeugnisse Shawn Wolter.pdf";
import Lebenslauf from "../../../public/Documents/cv-resume-german Shawn Wolter.pdf";

function AboutSection() {
  const { language } = useContext(LanguageContext);

  return (
    <Element id="About" name="About Section">
      <section className="about-section-container">
        <h1 className="section-headline">
          {language === "EN" ? "ABOUT ME" : "ÜBER MICH"}
        </h1>
        <hr />

        <div className="about-container">
          <div className="about-left-container">
            <div className="about-btn-img">
              <div className="about-btn-container">
                <a href={language === "EN" ? CV : Lebenslauf} target="blank">
                  <button
                    type="button"
                    id="cv"
                    className="about-cv-btn"
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
                    className="about-certificates-btn"
                  >
                    {language === "EN" ? "CERTIFI-\nCATES" : "ZEUG-\nNISSE"}
                  </button>
                </a>
              </div>
              <div className="about-image-container">
                <img src={AboutImage} alt="about-image" />
              </div>
            </div>

            <div className="about-skills-container">
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
            </div>
          </div>

          <div className="about-text-container">
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
          </div>
        </div>
      </section>
    </Element>
  );
}

export default AboutSection;
