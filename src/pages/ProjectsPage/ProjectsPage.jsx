import "./projectspage.css";
import HeroTriangleImage1 from "../../assets/hero-tirangle-new/hero-triangle-frame-1.png";
import HeroTriangleImage2 from "../../assets/hero-tirangle-new/hero-triangle-frame-2.png";
import HeroTriangleImage3 from "../../assets/hero-tirangle-new/hero-triangle-frame-3.png";
import HeroTriangleImage4 from "../../assets/hero-tirangle-new/hero-triangle-frame-4.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ChevronRightSVG from "../../assets/projects-section/chevron-right-solid-white.svg";
// import { animated, useSpring } from "@react-spring/web";

function ProjectsPage() {
  let [countImage, setCountImage] = useState(1);
  const [displayImage, setDisplayImage] = useState(HeroTriangleImage1);
  const [selectedSection, setSelectedSection] = useState("one");
  const [projectName, setProjectName] = useState("Retro Space One");

  function handleTriangleGallery(e) {
    e.target.id === "forth"
      ? setCountImage((countImage += 1))
      : setCountImage((countImage -= 1));
    if (countImage < 1) {
      setCountImage(4);
    }
    if (countImage > 4) {
      setCountImage(1);
    }
  }

  useEffect(() => {
    countImage === 1
      ? setDisplayImage(HeroTriangleImage1)
      : countImage === 2
      ? setDisplayImage(HeroTriangleImage2)
      : countImage === 3
      ? setDisplayImage(HeroTriangleImage3)
      : countImage === 4
      ? setDisplayImage(HeroTriangleImage4)
      : "";
  }, [countImage]);

  function handleSelect(e) {
    setSelectedSection(e.target.id);
  }

  return (
    <section className="projects-section-container">
      <h1 className="section-headline">PROJECTS</h1>
      <hr />

      <div className="projects-container">
        <div className="project-title">
          <h3>Featured Project</h3>
          <h2>{projectName}</h2>
        </div>

        <div className="triangle-svg-container">
          <img src={displayImage} alt="triangle svg" className="triangle-svg" />
          <button
            type="button"
            id="back"
            className="triangle-btn-back"
            onClick={handleTriangleGallery}
          >
            BACK
          </button>
          <button
            type="button"
            id="forth"
            className="triangle-btn-forth"
            onClick={handleTriangleGallery}
          >
            NEXT
          </button>
        </div>
        <div className="projects-text-container">
          <a href="">GitHub</a>
          <a href="">External Link</a>
          <h3>Time Limit: 6 Days</h3>

          <ul className="projects-text-accordion">
            <li>
              <input
                type="radio"
                name="accordion"
                id="one"
                checked={selectedSection === "one"}
                onChange={handleSelect}
              />
              <label htmlFor="one">
                <img
                  src={ChevronRightSVG}
                  width={"10rem"}
                  className={`label-img  ${
                    selectedSection === "one" && "active"
                  }`}
                />
                What is Retro-Space-One?
              </label>
              <div className="content">
                <p>
                  Retro-Space-One is a highscore based acarde retro space
                  shooter with increasing difficulty over time, and three
                  spaceships the player can choose from.
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
              <label htmlFor="two">
                <img
                  src={ChevronRightSVG}
                  width={"10rem"}
                  className={`label-img  ${
                    selectedSection === "two" && "active"
                  }`}
                />
                What was the biggest challenge?
              </label>
              <div className="content">
                <p>
                  The biggest challenge was the calculation of the railgun
                  hitbox and the related calculation of the railgun laser
                  collision with the opponents.
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
              <label htmlFor="three">
                <img
                  src={ChevronRightSVG}
                  width={"10rem"}
                  className={`label-img  ${
                    selectedSection === "three" && "active"
                  }`}
                />
                How did I overcome it?
              </label>
              <div className="content">
                <p>
                  To achieve the desired result, I colored the hitbox of the
                  laser red to make a change to the code more visible. I then
                  used an if-condition to see if the position of an opponent was
                  in the area covered by the laser, which of course also depends
                  on the position of the player. If the opponent is in the area,
                  he is considered hit and removed from the playing field.
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
              <label htmlFor="four">
                <img
                  src={ChevronRightSVG}
                  width={"10rem"}
                  className={`label-img  ${
                    selectedSection === "four" && "active"
                  }`}
                />
                Technologies
              </label>
              <div className="content">
                <p>Icons of: P5.js, JavaScript(ES6), HTML5, CSS3</p>
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
              <label htmlFor="five">
                <img
                  src={ChevronRightSVG}
                  width={"10rem"}
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

          {/* <h3>The Game</h3>
          <h2>What is Retro-Space-One?</h2>
          <p>
            Retro-Space-One is a highscore based acarde retro space shooter with
            increasing difficulty over time, and three spaceships the player can
            choose from.
          </p>
          <h3>Problem</h3>
          <h2>What was the biggest challenge?</h2>
          <p>
            The biggest challenge was the calculation of the railgun hitbox and
            the related calculation of the railgun laser collision with the
            opponents.
          </p>
          <h3>Solution</h3>
          <h2>How did I overcome it?</h2>
          <p>
            To achieve the desired result, I colored the hitbox of the laser red
            to make a change to the code more visible. I then used an
            if-condition to see if the position of an opponent was in the area
            covered by the laser, which of course also depends on the position
            of the player. If the opponent is in the area, he is considered hit
            and removed from the playing field.
          </p>
          <div>
            <h3>Technologies</h3>
            <p>Icons of: P5.js, JavaScript(ES6), HTML5, CSS3</p>
          </div>
          <div>
            <h3>Extras</h3>
            <p>
              CONTROLS: W = Up | S = Down | A = Left | D = Right | SPACE = Shoot
            </p>
          </div>
          <h3>Time Limit: 6 Days</h3> */}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
