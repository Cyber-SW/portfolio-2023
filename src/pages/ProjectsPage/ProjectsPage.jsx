import "./projectspage.css";
import RetroSpaceOne from "../../components/RetroSpaceOne";
import Ratatouille from "../../components/Ratatouille";
import Blogbytes from "../../components/Blogbytes";
import RetroSpaceOneCollage from "../../assets/projects-section/triangle-collage-retro-space-one.png";
import RetroSpaceOneCollageMobile from "../../assets/projects-section/triangle-collage-retro-space-one-mobile.png";
import BlogbytesCollage from "../../assets/projects-section/triangle-collage-blogbytes.png";
import BlogbytesCollageMobile from "../../assets/projects-section/triangle-collage-blogbytes-mobile.png";
import RatatouilleCollage from "../../assets/projects-section/triangle-collage-ratatouille-2.png";
import RatatouilleCollageMobile from "../../assets/projects-section/triangle-collage-ratatouille-mobile.png";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { LanguageContext } from "../../context/lang.context";
import { useContext } from "react";

function ProjectsPage() {
  let [countProject, setCountProject] = useState(1);
  const [displayProject, setDisplayProject] = useState(RetroSpaceOneCollage);
  const [projectName, setProjectName] = useState("");
  const [mobile, setMobile] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { language } = useContext(LanguageContext);

  function handleProjectGallery(e) {
    e.target.id === "forth"
      ? setCountProject((countProject += 1))
      : setCountProject((countProject -= 1));
    if (countProject < 1) {
      setCountProject(3);
    }
    if (countProject > 3) {
      setCountProject(1);
    }
  }

  useEffect(() => {
    countProject === 1
      ? (mobile
          ? setDisplayProject(RetroSpaceOneCollageMobile)
          : setDisplayProject(RetroSpaceOneCollage),
        setProjectName("Retro Space One"))
      : countProject === 2
      ? (mobile
          ? setDisplayProject(BlogbytesCollageMobile)
          : setDisplayProject(BlogbytesCollage),
        setProjectName("Blogbytes"))
      : countProject === 3
      ? (mobile
          ? setDisplayProject(RatatouilleCollageMobile)
          : setDisplayProject(RatatouilleCollage),
        setProjectName("Ratatouille"))
      : "";
  }, [countProject, mobile]);

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
    windowWidth < 1300 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  return (
    <Element id="Projects" name="Projects Section">
      <section className="projects-section-container">
        <h1 className="section-headline">
          {language === "EN" ? "PROJECTS" : "PROJEKTE"}
        </h1>
        <hr />

        <div className="projects-container">
          <div className="project-title">
            <h3>
              {language === "EN" ? "Featured Project" : "Ausgewähltes Projekt"}
            </h3>
            <h2>{projectName}</h2>
          </div>

          <div className="triangle-svg-container">
            <img
              src={displayProject}
              alt="triangle svg"
              className="triangle-svg"
            />
            <div className="projects-btn-container">
              <button
                type="button"
                id="back"
                className="triangle-btn-back"
                onClick={handleProjectGallery}
              >
                {language === "EN" ? "BACK" : "ZURÜCK"}
              </button>
              <button
                type="button"
                id="forth"
                className="triangle-btn-forth"
                onClick={handleProjectGallery}
              >
                {language === "EN" ? "NEXT" : "NÄCHSTES"}
              </button>
            </div>
          </div>

          {countProject === 1 && <RetroSpaceOne />}
          {countProject === 2 && <Blogbytes />}
          {countProject === 3 && <Ratatouille />}
        </div>
      </section>
    </Element>
  );
}

export default ProjectsPage;
