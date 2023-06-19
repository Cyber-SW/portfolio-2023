import "./projectspage.css";
import RetroSpaceOne from "../../components/RetroSpaceOne";
import Ratatouille from "../../components/Ratatouille";
import Blogbytes from "../../components/Blogbytes";
import HeroTriangleImage1 from "../../assets/hero-tirangle-new/hero-triangle-frame-1.png";
import HeroTriangleImage2 from "../../assets/hero-tirangle-new/hero-triangle-frame-2.png";
import HeroTriangleImage3 from "../../assets/hero-tirangle-new/hero-triangle-frame-3.png";
import { useState, useEffect } from "react";

function ProjectsPage() {
  let [countProject, setCountProject] = useState(1);
  const [displayProject, setDisplayProject] = useState(HeroTriangleImage1);
  const [projectName, setProjectName] = useState("");

  function handleTriangleGallery(e) {
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
      ? (setDisplayProject(HeroTriangleImage1),
        setProjectName("Retro Space One"))
      : countProject === 2
      ? (setDisplayProject(HeroTriangleImage2), setProjectName("Blogbytes"))
      : countProject === 3
      ? (setDisplayProject(HeroTriangleImage3), setProjectName("Ratatouille"))
      : "";
  }, [countProject]);

  return (
    <section className="projects-section-container">
      <h1 className="section-headline">WORK</h1>
      <hr />

      <div className="projects-container">
        <div className="project-title">
          <h3>Featured Project</h3>
          <h2>{projectName}</h2>
        </div>

        <div className="triangle-svg-container">
          <img
            src={displayProject}
            alt="triangle svg"
            className="triangle-svg"
          />
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

        {countProject === 1 && <RetroSpaceOne />}
        {countProject === 2 && <Blogbytes />}
        {countProject === 3 && <Ratatouille />}
      </div>
    </section>
  );
}

export default ProjectsPage;
