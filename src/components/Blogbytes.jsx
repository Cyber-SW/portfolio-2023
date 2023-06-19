import { useState } from "react";

function Blogbytes() {
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
            <a href="https://github.com/Cyber-SW/blogbytes" target="blank">
              <div className="github-link" />
            </a>
            <a href="https://blogbytes.cyclic.app/" target="blank">
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
              What is Blogbytes?
            </label>
            <div className="content">
              <p>
                Blogbytes is an blogging website where users can create, read,
                update, delete and comment and like blogs. This project was
                created in collaboration with{" "}
                <a
                  href="https://www.linkedin.com/in/muhammad-hussain-kamran-/"
                  target="blank"
                  style={{ color: "#A1A1A1" }}
                >
                  Muhammad Hussain
                </a>
                , with the goal of learning the GitHub workflow.
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
                The biggest challenge was creating a like button with handlebars
                because unlike in React it is not so easy to do this in the
                frontend. In addition, all likes of a blog need to be stored in
                the database, because every user must see the total likes of a
                blog.
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
              How did we overcome it?
            </label>
            <div className="content">
              <p>
                Before a new blog gets stored in the database, we checked if the
                liked blog is already in the user model or not. If that's the
                case, it is removed from the user model, and the number of likes
                is reduced by one, otherwise, the likes are increased by one and
                it is added to the user model.
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
              <p>
                <img src="" alt="Html5 Icon" width="60px" />
                Icons of: P5.js, JavaScript(ES6), HTML5, CSS3
              </p>
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
                CONTROLS: W = Up | S = Down | A = Left | D = Right | SPACE =
                Shoot
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Blogbytes;
