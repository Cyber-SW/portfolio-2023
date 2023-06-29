import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import p5Js from "../assets/projects-section/p5 JS-grey.svg";
import { LanguageContext } from "../context/lang.context";
import { useContext } from "react";

function RetroSpaceOne() {
  const [selectedSection, setSelectedSection] = useState("one");
  const [mobile, setMobile] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { language } = useContext(LanguageContext);

  function handleSelect(e) {
    setSelectedSection(e.target.id);
  }

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

  return (
    <>
      <div className="projects-text-container">
        <div className="projects-head">
          <h3>
            {language === "EN" ? "Time Limit: 6 Days" : "Zeitlimit: 6 Tage"}
          </h3>
          <div className="projects-links no-select">
            <a
              href="https://github.com/Cyber-SW/RETRO-SPACE-ONE"
              target="blank"
            >
              <FontAwesomeIcon icon={faGithub} className="github-link" />
            </a>
            <a
              href="https://cyber-sw.github.io/RETRO-SPACE-ONE/"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="external-link"
              />
            </a>
          </div>
        </div>

        <ul className="projects-text-accordion no-select">
          <li>
            <input
              type="radio"
              name="accordion"
              id="one"
              checked={selectedSection === "one"}
              onChange={handleSelect}
            />
            <label
              htmlFor="one"
              className={`label-clr  ${selectedSection === "one" && "active"}`}
            >
              <span
                className={`label-img  ${
                  selectedSection === "one" && "active"
                }`}
              />
              {language === "EN"
                ? "What is Retro Space One?"
                : "Was ist Retro Space One?"}
            </label>
            <div className="content">
              <p>
                {language === "EN" ? (
                  <>
                    Retro Space One is a highscore-based arcade space shooter in
                    retro design with increasing difficulty over time, and three
                    spaceships, each with different properties, the player can
                    choose from.
                  </>
                ) : (
                  <>
                    Retro Space One ist ein Highscore-basierter
                    Arcade-Weltraum-Shooter im Retro-Design mit über die Zeit
                    ansteigendem Schwierigkeitsgrad und drei Raumschiffen mit
                    unterschiedlichen Eigenschaften, aus denen der Spieler
                    wählen kann.
                  </>
                )}
              </p>
            </div>
            <hr className="content-hr" />
          </li>
          <li>
            <input
              type="radio"
              name="accordion"
              id="two"
              checked={selectedSection === "two"}
              onChange={handleSelect}
            />
            <label
              htmlFor="two"
              className={`label-clr  ${selectedSection === "two" && "active"}`}
            >
              <span
                className={`label-img  ${
                  selectedSection === "two" && "active"
                }`}
              />
              {language === "EN"
                ? "What was the biggest challenge?"
                : "Was war die größte Herausforderung?"}
            </label>
            <div className="content">
              <p>
                {language === "EN" ? (
                  <>
                    The biggest challenge was the calculation of the railgun
                    hitbox and the related calculation of the railgun laser
                    collision with the opponents.
                  </>
                ) : (
                  <>
                    Die größte Herausforderung war die Berechnung der
                    Railgun-Hitbox und die damit verbundene Berechnung der
                    Kollision des Railgun-Lasers mit den Gegnern.
                  </>
                )}
              </p>
            </div>
            <hr className="content-hr" />
          </li>
          <li>
            <input
              type="radio"
              name="accordion"
              id="three"
              checked={selectedSection === "three"}
              onChange={handleSelect}
            />
            <label
              htmlFor="three"
              className={`label-clr  ${
                selectedSection === "three" && "active"
              }`}
            >
              <span
                className={`label-img  ${
                  selectedSection === "three" && "active"
                }`}
              />
              {language === "EN"
                ? "How did I overcome it?"
                : "Wie habe ich sie überwunden?"}
            </label>
            <div className="content">
              <p>
                {language === "EN" ? (
                  <>
                    First, I colored the laser's hitbox red to make a change to
                    the code more visible. Then I used a condition and the four
                    coordinates of the corners of the laser hitbox to check if
                    there is an enemy in the area of the laser. The positions of
                    these four coordinates depend on the player's position at
                    the time the shoot button is pressed. If an opponent is
                    within the four coordinates, he is considered hit and
                    removed from the field.
                  </>
                ) : (
                  <>
                    Als erstes habe ich die Hitbox des Lasers rot eingefärbt, um
                    eine Änderung am Code besser sichtbar zu machen. Dann habe
                    ich mithilfe einer Condition und den vier Koordinaten, der
                    Eckpunkte der Laser-Hitbox überprüft, ob sich ein Gegner im
                    Bereich des Lasers befindet. Die Positionen dieser vier
                    Koordinaten sind von der Position des Spielers zum Zeitpunkt
                    des Drückens der Schusstaste abhängig. Befindet sich ein
                    Gegner innerhalb der vier Koordinaten, wird er als getroffen
                    angesehen und vom Spielfeld entfernt.
                  </>
                )}
              </p>
            </div>
            <hr className="content-hr" />
          </li>
          <li>
            <input
              type="radio"
              name="accordion"
              id="four"
              checked={selectedSection === "four"}
              onChange={handleSelect}
            />
            <label
              htmlFor="four"
              className={`label-clr  ${selectedSection === "four" && "active"}`}
            >
              <span
                className={`label-img  ${
                  selectedSection === "four" && "active"
                }`}
              />
              {language === "EN"
                ? "Used technologies"
                : "Verwendete Technologien"}
            </label>
            <div className="content">
              <div className="icon-container">
                <FontAwesomeIcon icon={faJs} size={"2x"} />
                <FontAwesomeIcon icon={faHtml5} size={"2x"} />
                <FontAwesomeIcon icon={faCss3} size={"2x"} />
                <img
                  src={p5Js}
                  alt="p5.js logo"
                  width={mobile ? "50rem" : "70rem"}
                />
                <FontAwesomeIcon icon={faGithub} size={"2x"} />
                <FontAwesomeIcon icon={faGitAlt} size={"2x"} />
              </div>
            </div>
            <hr className="content-hr" />
          </li>
          <li>
            <input
              type="radio"
              name="accordion"
              id="five"
              checked={selectedSection === "five"}
              onChange={handleSelect}
            />
            <label
              htmlFor="five"
              className={`label-clr  ${selectedSection === "five" && "active"}`}
            >
              <span
                className={`label-img  ${
                  selectedSection === "five" && "active"
                }`}
              />
              Extras
            </label>
            <div className="content pre-line">
              <p>
                {language === "EN"
                  ? `In case you want to play the game, here are the controls:
                  W = Move Up | S = Move Down | A = Move Left
                  D = Move Right | Space = Shoot | Have fun!`
                  : `Hier ist die Steuerung, falls du Retro Space One spielen möchtest: W = Hoch | S = Runter | A = Links
                  D = Rechts | Leertaste = Schießen | Viel Spaß!`}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RetroSpaceOne;
