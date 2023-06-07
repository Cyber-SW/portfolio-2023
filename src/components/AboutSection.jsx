import { useEffect, useState } from "react";
import {
  useScroll,
  useSpring,
  useSpringRef,
  animated,
} from "@react-spring/web";
import AboutImage from "../assets/triangle-photo.png";

function AboutSection() {
  const [scrollVal, setScrollVal] = useState(0);
  const [headlineFade, setHeadlineFade] = useState(null);
  const [textFade, setTextFade] = useState(null);
  const aboutHeadlineApi = useSpringRef();
  const aboutTextApi = useSpringRef();
  const imageApi = useSpringRef();

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(scrollYProgress);
    },
  });

  useEffect(() => {
    if (scrollVal > 0.9) {
      aboutHeadlineApi.start();
      setHeadlineFade(false);
    } else if (scrollVal < 0.9) {
      setHeadlineFade(true);
      aboutHeadlineApi.start();
    }
  }, [scrollVal]);

  useEffect(() => {
    if (scrollVal > 0.99) {
      aboutTextApi.start();
      imageApi.start();
      setTextFade(false);
    } else if (scrollVal < 0.99) {
      setTextFade(true);
      aboutTextApi.start();
      imageApi.start();
    }
  }, [scrollVal]);

  const aboutHeadline = useSpring({
    ref: aboutHeadlineApi,
    from: { opacity: 0, translateY: "5rem" },
    to: { opacity: 1, translateY: "0" },
    reverse: headlineFade,
  });

  const aboutText = useSpring({
    ref: aboutTextApi,
    from: { opacity: 0, translateY: "5rem" },
    to: { opacity: 1, translateY: "0" },
    reverse: textFade,
  });

  const aboutImage = useSpring({
    ref: imageApi,
    from: { opacity: 0 },
    to: { opacity: 1 },
    reverse: textFade,
  });

  console.log("SCROLL VAL", scrollVal);
  console.log("SCROLL PROGRESS", scrollYProgress);

  return (
    <section className="about-section-container">
      <animated.div className="about-text-container" style={aboutText}>
        <h1>ABOUT</h1>
        <p>
          I am a Business-oriented Web-Developer with a Media-Designer
          background, always curious about the newest tech trends and
          technologies. My open mindset and the ability to adapt quickly give me
          a significant competitive advantage in a rapidly developing industry.
          My goal is to provide this advantage to companies giving them a
          headstart over their competition and making them succeed in the
          international tech market.
        </p>
        <button className="about-btn">CV/Resume</button>
        <button className="about-btn">Certificates</button>
      </animated.div>
      <div className="about-image-container">
        <animated.div
          className="about-headline-container"
          style={aboutHeadline}
        >
          <h1>Hi I am Shawn,</h1>
          <h2 className="about-subline">
            Web Developer
            <br />
            Media Designer
            <br />
            Gamer
          </h2>
        </animated.div>
        <animated.img
          className="about-image"
          src={AboutImage}
          alt="about image"
          style={aboutImage}
        />
      </div>
    </section>
  );
}

export default AboutSection;
