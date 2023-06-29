import { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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
import MongoDb from "../assets/projects-section/mongodb-plain-grey.svg";
import Hbs from "../assets/projects-section/handlebars-grey.svg";

function Blogbytes() {
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
            <a href="https://github.com/Cyber-SW/blogbytes" target="blank">
              <FontAwesomeIcon icon={faGithub} className="github-link" />
            </a>
            <a href="https://blogbytes.cyclic.app/" target="blank">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="external-link"
              />
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
              {language === "EN" ? "What is Blogbytes?" : "Was ist Blogbytes?"}
            </label>
            <div className="content">
              <p>
                {language === "EN" ? (
                  <>
                    Blogbytes is an blogging website where users can create,
                    read, update, delete and comment and like blogs. This
                    project was created in collaboration with{" "}
                    <a
                      href="https://www.linkedin.com/in/muhammad-hussain-kamran-/"
                      target="blank"
                      className="credit-link"
                    >
                      Muhammad Hussain
                    </a>
                    , with the goal of learning the GitHub workflow.
                  </>
                ) : (
                  <>
                    Blogbytes ist eine Blogging-Website, auf der Benutzer Blogs
                    erstellen, lesen, aktualisieren, löschen, kommentieren und
                    liken können. Dieses Projekt wurde in Zusammenarbeit mit{" "}
                    <a
                      href="https://www.linkedin.com/in/muhammad-hussain-kamran-/"
                      target="blank"
                      className="credit-link"
                    >
                      Muhammad Hussain
                    </a>{" "}
                    erstellt, mit dem Ziel, den GitHub-Workflow zu erlernen.
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
                {language === "EN"
                  ? `The biggest challenge was creating a like button with handlebars
                because unlike in React it is not so easy to do this in the
                frontend. In addition, all likes of a blog need to be stored in
                the database, because every user must see the total likes of a
                blog.`
                  : `Die größte Herausforderung war die Erstellung eines Like-Buttons mit handlebars, da es im Gegensatz zu React nicht so einfach ist, dies im Frontend zu tun. Außerdem müssen alle Likes eines Blogs in der Datenbank gespeichert werden, da jeder Nutzer die gesamten Likes eines Blogs sehen muss.`}
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
                ? "How did we overcome it?"
                : "Wie haben wir sie überwunden?"}
            </label>
            <div className="content">
              <p>
                {language === "EN"
                  ? `When a user likes a blog, the database checks if the blog-ID is already on his list of liked blogs. If that's the case, the blog-ID is removed from the list and the number of likes is decreased by one, otherwise, the likes are increased by one and the blog-ID is added to the list.`
                  : `Wenn ein Benutzer einen Blog liked, wird in der Datenbank geprüft, ob die Blog-ID bereits auf seiner Liste der geliketen Blogs ist. Wenn dies der Fall ist, wird die Blog-ID von der Liste entfernt und die Anzahl der Likes um einen verringert, andernfalls werden die Likes um einen erhöht und die Blog-ID wird der Liste hinzugefügt.`}
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
                <img
                  src={MongoDb}
                  alt="mongodb logo"
                  width={mobile ? "12rem" : "17rem"}
                />
                <img
                  src={ExJs}
                  alt="express logo"
                  width={mobile ? "35rem" : "45rem"}
                />
                <FontAwesomeIcon icon={faNodeJs} size={"2x"} />
                <img
                  src={Hbs}
                  alt="hbs logo"
                  width={"52rem"}
                  style={{ marginBottom: "1.2rem" }}
                />
                <FontAwesomeIcon icon={faGitAlt} size={"2x"} />
                <FontAwesomeIcon icon={faGithub} size={"2x"} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Blogbytes;
