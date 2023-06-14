import { useEffect, useState } from "react";
import {
  useScroll,
  useSpring,
  useSpringRef,
  animated,
} from "@react-spring/web";
import AboutImage from "../../assets/about-triangle/about-triangle-image-white-mirror.png";
import "./aboutpage.css";

function AboutSection() {
  return (
    <section className="about-section-container">
      <h1 className="about-section-headline">ABOUT ME</h1>

      <div className="about-container">
        <div className="about-image-container">
          <img src={AboutImage} alt="about-image" />
        </div>
        <div className="about-text-container">
          <h2>How I became a developer</h2>
          <p>
            Even during my apprenticeship as a media designer, I was fascinated
            by web technologies such as HTML and CSS. After completing the
            apprenticeship, I didn't know where the journey should go. So I
            started working on my own and created Shopify stores, logo designs,
            and video ads. I enjoyed building online stores so much that I began
            to watch coding videos on youtube without understanding a single
            line of code. From then on it was clear to me, I would become a
            developer.
          </p>
        </div>
        <div className="about-skills-container">
          {/* <h2>My Toolkit</h2> */}
          <div className="about-skills">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.Js</li>
            </ul>
            <ul>
              <li>Git/GitHub</li>
              <li>Vite</li>
              <li>Axios</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
