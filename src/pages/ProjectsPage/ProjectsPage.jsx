import "./projectspage.css";
import RetroSpaceOneTriangle from "../../assets/projects-triangle/projects-carousel-triangle-1.png";
import BlogbytesTriangle from "../../assets/projects-triangle/projects-carousel-triangle-2.png";
import RatatouilleTriangle from "../../assets/projects-triangle/projects-carousel-triangle-3.png";

function ProjectsPage() {
  return (
    <section className="projects-section-container">
      <h1 className="section-headline">PROJECTS</h1>
      <hr />

      <div className="projects-container">
        <div className="carousel-item">
          <img
            src={RetroSpaceOneTriangle}
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={BlogbytesTriangle}
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={RatatouilleTriangle}
            className="carousel-image"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
