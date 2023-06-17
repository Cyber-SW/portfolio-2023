import AboutImage from "../../assets/about-triangle/about-triangle-image-white-mirror.png";
import "./aboutpage.css";

function AboutSection() {
  return (
    <section className="about-section-container">
      <h1 className="section-headline">ABOUT</h1>
      <hr />
      <div className="about-container">
        <div className="about-image-container">
          <img src={AboutImage} alt="about-image" />
        </div>
        <div className="about-skills-container">
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.Js</li>
            <li>Handlebars</li>
            <li>Axios</li>
            <li>Vite</li>
            <li>Git/GitHub</li>
          </ul>
        </div>
        <div className="about-text-container">
          <h3>The short version of</h3>
          <h2>How I Became a Developer</h2>
          <p>
            Even during my apprenticeship as a media designer, I was fascinated
            by web technologies such as HTML and CSS. After completing the
            apprenticeship, I didn't know where the journey should go. So I
            started working on my own and created Shopify stores, logo designs,
            and video ads. I enjoyed building online stores so much that I began
            to watch coding videos on YouTube without understanding a single
            line of code. From then on it was clear to me, I would become a
            developer.
          </p>
        </div>
        <div className="about-btn-container">
          <button type="button" id="cv" className="about-cv-btn">
            CV/
            <br />
            RESUME
          </button>
          <button
            type="button"
            id="certificates"
            className="about-certificates-btn"
          >
            CERTIFI-CATIONS
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
