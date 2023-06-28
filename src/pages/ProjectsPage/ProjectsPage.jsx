import "./projectspage.css";
import RetroSpaceOne from "../../components/RetroSpaceOne";
import Ratatouille from "../../components/Ratatouille";
import Blogbytes from "../../components/Blogbytes";
import RetroSpaceOneCollage from "../../assets/projects-section/triangle-collage-retro-space-one.png";
import RetroSpaceOneCollageMobile from "../../assets/projects-section/triangle-collage-retro-space-one-mobile-small.png";
import BlogbytesCollage from "../../assets/projects-section/triangle-collage-blogbytes.png";
import BlogbytesCollageMobile from "../../assets/projects-section/triangle-collage-blogbytes-mobile-small.png";
import RatatouilleCollage from "../../assets/projects-section/triangle-collage-ratatouille-2.png";
import RatatouilleCollageMobile from "../../assets/projects-section/triangle-collage-ratatouille-mobile-small.png";
import { useSpring, useScroll, animated } from "@react-spring/web";
import { useState, useEffect, useContext } from "react";
import { Element } from "react-scroll";
import { LanguageContext } from "../../context/lang.context";

function ProjectsPage() {
  let [countProject, setCountProject] = useState(1);
  const [displayProject, setDisplayProject] = useState(RetroSpaceOneCollage);
  const [projectName, setProjectName] = useState("");
  const [mobile, setMobile] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollVal, setScrollVal] = useState(0);

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
    windowWidth < 1381 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  const [projectsAnimation1, projectsAnimationApi1] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  const [projectsAnimation2, projectsAnimationApi2] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  const [projectsAnimation3, projectsAnimationApi3] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  const [projectsAnimation4, projectsAnimationApi4] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0rem)",
  }));

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(scrollYProgress.toFixed(2));
    },
  });

  useEffect(() => {
    scrollVal > 0.36
      ? projectsAnimationApi1.start({
          opacity: 1,
          transform: "translateY(0rem)",
        })
      : projectsAnimationApi1.start({
          opacity: 0,
          transform: "translateY(2rem)",
        });

    scrollVal > 0.48
      ? projectsAnimationApi2.start({
          opacity: 1,
          transform: "translateY(0rem)",
        })
      : projectsAnimationApi2.start({
          opacity: 0,
          transform: "translateY(2rem)",
        });

    scrollVal > 0.46
      ? projectsAnimationApi3.start({
          opacity: 1,
          transform: "translateY(0rem)",
        })
      : projectsAnimationApi3.start({
          opacity: 0,
          transform: "translateY(2rem)",
        });

    if (mobile) {
      scrollVal > 0.59
        ? projectsAnimationApi4.start({
            opacity: 1,
            transform: "translateY(0rem)",
          })
        : projectsAnimationApi4.start({
            opacity: 0,
            transform: "translateY(2rem)",
          });
    } else {
      scrollVal > 0.5
        ? projectsAnimationApi4.start({
            opacity: 1,
            transform: "translateY(0rem)",
          })
        : projectsAnimationApi4.start({
            opacity: 0,
            transform: "translateY(2rem)",
          });
    }
  }, [
    scrollVal,
    mobile,
    projectsAnimationApi1,
    projectsAnimationApi2,
    projectsAnimationApi3,
    projectsAnimationApi4,
  ]);

  return (
    <Element id="Projects" name="Projects Section">
      <section className="projects-section-container">
        <animated.h1 className="section-headline" style={projectsAnimation1}>
          {language === "EN" ? "PROJECTS" : "PROJEKTE"}
        </animated.h1>
        <animated.hr style={projectsAnimation1} />

        <div className="projects-container">
          <animated.div className="project-title" style={projectsAnimation3}>
            <h3>
              {language === "EN" ? "Featured Project" : "Ausgewähltes Projekt"}
            </h3>
            <h2>{projectName}</h2>
          </animated.div>

          <animated.div
            className="triangle-svg-container"
            style={projectsAnimation2}
          >
            <img
              src={displayProject}
              alt="triangle svg"
              className="triangle-svg"
            />
            <div className="projects-btn-container">
              <button
                type="button"
                id="back"
                className="triangle-btn-back no-select"
                onClick={handleProjectGallery}
              >
                {language === "EN" ? "BACK" : "ZURÜCK"}
              </button>
              <button
                type="button"
                id="forth"
                className="triangle-btn-forth no-select"
                onClick={handleProjectGallery}
              >
                {language === "EN" ? "NEXT" : "NÄCHSTES"}
              </button>
            </div>
          </animated.div>

          <animated.div style={projectsAnimation4}>
            {countProject === 1 && <RetroSpaceOne />}
            {countProject === 2 && <Blogbytes />}
            {countProject === 3 && <Ratatouille />}
          </animated.div>
        </div>
      </section>
    </Element>
  );
}

export default ProjectsPage;
