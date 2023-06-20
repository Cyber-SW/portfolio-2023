import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import p5Js from "../assets/projects-section/p5 JS-grey.svg";

function RetroSpaceOne() {
  const [selectedSection, setSelectedSection] = useState("one");

  function handleSelect(e) {
    setSelectedSection(e.target.id);
  }

  return (
    <>
      <div className="projects-text-container">
        <div className="projects-head">
          <h3>Time Limit: 6 Days</h3>
          <div className="projects-links">
            <a
              href="https://github.com/Cyber-SW/RETRO-SPACE-ONE"
              target="blank"
            >
              <div className="github-link" />
            </a>
            <a
              href="https://cyber-sw.github.io/RETRO-SPACE-ONE/"
              target="blank"
            >
              <div className="external-link" />
            </a>
          </div>
        </div>

        <ul className="projects-text-accordion">
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
              What is Retro Space One?
            </label>
            <div className="content">
              <p>
                Retro-Space-One is a highscore-based arcade space shooter in
                retro design with increasing difficulty over time, and three
                spaceships, each with different properties, the player can
                choose from.
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
              What was the biggest challenge?
            </label>
            <div className="content">
              <p>
                The biggest challenge was the calculation of the railgun hitbox
                and the related calculation of the railgun laser collision with
                the opponents.
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
              How did I overcome it?
            </label>
            <div className="content">
              <p>
                To achieve the desired result, I colored the hitbox of the laser
                red to make a change to the code more visible. I then used an
                if-condition to see if the position of an opponent was in the
                area covered by the laser, which of course also depends on the
                position of the player. If the opponent is in the area, he is
                considered hit and removed from the playing field.
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
              Technologies
            </label>
            <div className="content">
              <div className="icon-container">
                <FontAwesomeIcon icon={faJs} size={"2x"} />
                <FontAwesomeIcon icon={faHtml5} size={"2x"} />
                <FontAwesomeIcon icon={faCss3} size={"2x"} />
                <img src={p5Js} alt="p5.js logo" width={"70rem"} />
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
            <div className="content">
              <p>
                In case you want to play the game, here are the controls:
                <br /> W = Move Up | S = Move Down | A = Move Left <br /> D =
                Move Right | Space = Shoot | Have fun!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RetroSpaceOne;
