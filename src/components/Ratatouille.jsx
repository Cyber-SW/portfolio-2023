import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { LanguageContext } from "../context/lang.context";
import ExJs from "../assets/projects-section/express-original-grey.svg";
import React from "../assets/projects-section/react-original-grey.svg";
import MongoDb from "../assets/projects-section/mongodb-plain-grey.svg";
import Jwt from "../assets/projects-section/jwtio-json-web-token-grey.svg";
import Vite from "../assets/projects-section/vite-js-logo-grey.svg";
import Axios from "../assets/projects-section/Axios-logo-grey.svg";
import RatatouilleAd from "../assets/projects-section/ratatouille-advertisement.mp4";

function Ratatouille() {
  const [selectedSection, setSelectedSection] = useState("one");

  const { language } = useContext(LanguageContext);

  function handleSelect(e) {
    setSelectedSection(e.target.id);
  }

  return (
    <>
      <div className="projects-text-container">
        <div className="projects-head">
          <h3>
            {language === "EN" ? "Time Limit: 9 Days" : "Zeitlimit: 9 Tage"}
          </h3>
          <div className="projects-links">
            <a href="https://github.com/Cyber-SW/ratatouille" target="blank">
              <div className="github-link" />
            </a>
            <a href="https://ratatouilleai.netlify.app/" target="blank">
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
              {language === "EN"
                ? "What is Ratatouille?"
                : "Was ist Ratatouille?"}
            </label>
            <div className="content">
              <p>
                {language === "EN"
                  ? `Ratatouille is a dish generator and eating habits organizer
                powered by OpenAi´s artificial intelligence ChatGPT. It is
                optimized for mobile and HD screens upwards.`
                  : `Ratatouille ist ein Rezeptgenerator und Essensplaner, der mit der künstlichen Intelligenz ChatGPT von OpenAi angetrieben wird. Es ist für Mobilgeräte und HD-Bildschirme aufwärts optimiert.`}
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
                {language === "EN"
                  ? `The biggest challenge was handling React's asynchronous
                behavior, especially when retrieving data from the database or
                API´s. This gets even more difficult when you have to wait for
                two API calls before you can display the data.`
                  : `Die größte Herausforderung war der Umgang mit dem asynchronen Verhalten von React, insbesondere beim Abrufen von Daten aus der Datenbank oder von APIs. Dies wird noch schwieriger, wenn man zwei API-Abfragen abwarten muss, bevor man die Daten anzeigen kann.`}
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
                {language === "EN"
                  ? `I have used promises in the frontend to only proceed with the
                execution of the code when the data requested by the backend is
                available. I also used promises in the backend for the API calls
                to make sure everything works properly. For data from the
                database, I used useEffect, which requests the data from the
                database at each page reload to display them.`
                  : `Ich habe Promises im Frontend verwendet, um die Ausführung des Codes nur dann fortzusetzen, wenn die vom Backend angeforderten Daten verfügbar sind. Außerdem habe ich im Backend Promises für die API-Abfragen verwendet, um sicherzustellen, dass alles ordnungsgemäß funktioniert. Für die Daten aus der Datenbank habe ich useEffect verwendet, das bei jedem Neuladen der Seite die Daten aus der Datenbank anfordert, um sie anzuzeigen.`}
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
              <div className="icon-container margin">
                <FontAwesomeIcon icon={faJs} size={"2x"} />
                <FontAwesomeIcon icon={faHtml5} size={"2x"} />
                <FontAwesomeIcon icon={faCss3} size={"2x"} />
                <img src={MongoDb} alt="mongodb logo" width={"17rem"} />
                <img src={ExJs} alt="express logo" width={"45rem"} />
                <img src={React} alt="react logo" width={"33rem"} />
                <FontAwesomeIcon icon={faNodeJs} size={"2x"} />
                <img src={Jwt} alt="jwt logo" width={"85rem"} />
                <img src={Vite} alt="vite logo" width={"30rem"} />
                <img
                  src={Axios}
                  alt="axios logo"
                  width={"90rem"}
                  style={{ marginBottom: "1.5rem" }}
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
            <div className="content">
              <video className="video-ad" controls>
                <source src={RatatouilleAd} type="video/mp4" />
                {language === "EN"
                  ? "Your browser does not support videos."
                  : "Dein Browser unterstützt keine Videos."}
              </video>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Ratatouille;
