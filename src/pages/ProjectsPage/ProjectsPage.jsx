import "./projectspage.css";
import HeroTriangleImage1 from "../../assets/hero-tirangle-new/hero-triangle-frame-1.png";
import HeroTriangleImage2 from "../../assets/hero-tirangle-new/hero-triangle-frame-2.png";
import HeroTriangleImage3 from "../../assets/hero-tirangle-new/hero-triangle-frame-3.png";
import HeroTriangleImage4 from "../../assets/hero-tirangle-new/hero-triangle-frame-4.png";
import { useState, useEffect } from "react";
// import { animated, useSpring } from "@react-spring/web";

function ProjectsPage() {
  let [countImage, setCountImage] = useState(1);
  const [displayImage, setDisplayImage] = useState(HeroTriangleImage1);
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
          <h2>What Was the Goal?</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <h2>How I Achieved it</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div>
            <h2>Technologies</h2>
            <p>Icons...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
