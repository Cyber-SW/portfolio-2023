import "./homepage.css";
import * as Scroll from "react-scroll";
import { Element } from "react-scroll";
import { LanguageContext } from "../../context/lang.context";
import { useContext } from "react";

function HeroSection() {
  const { language } = useContext(LanguageContext);

  let Link = Scroll.Link;

  return (
    <Element id="Home" name="Home Page">
      <section className="hero-section-container">
        <div className="hero-headline-container">
          <h3>
            {language === "EN"
              ? "Welcome to my portfolio page"
              : "Willkommen auf meiner Portfolio-Seite"}
          </h3>
          <h1>
            {language === "EN" ? "I am Shawn Wolter," : "Ich bin Shawn Wolter"}
          </h1>
          <h2>
            {language === "EN"
              ? "Web Developer and Media Designer."
              : "Web Entwickler und Mediengestalter."}
          </h2>
          <p>
            {language === "EN"
              ? `Design and technology interest me since I was a little kid when I
            was very passionate about drawing and playing with Legos. Things
            need to be functional but also need to look good, that was my motto
            and is to this day.`
              : `Design und Technologie begleiten mich schon seit meiner Kindheit, als ich noch gern gezeichnet oder mit Legos gespielt habe. Für mich müssen die Dinge funktional sein, aber eben auch gut aussehen. Das war mein Motto und ist es bis heute.`}
          </p>
          <Link to="Projects" smooth={true}>
            <button type="button" className="hero-section-btn">
              {language === "EN"
                ? "CHECK OUT\nMY WORK"
                : "SIEH DIR MEINE ARBEIT AN"}
            </button>
          </Link>
        </div>
      </section>
    </Element>
  );
}

export default HeroSection;
