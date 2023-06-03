import { useState } from "react";
import { useScroll, useSpring, animated } from "@react-spring/web";
import TriangleSVG from "../assets/triangle.svg";

// const PAGE_COUNT = 5;

function HeroSection() {
  const [scrollVal, setScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress }}) => {
      setScrollVal(scrollYProgress * 20 + 0.2);
    },
  });

  // const props = useSpring({
  //     opacity: 1,
  //     delay: 700,
  //     from: {
  //       opacity: 0,
  //     } });

  console.log("SCROLL VAL", scrollVal);
  console.log("SCROLL PROGRESS", scrollYProgress)

  return (
    <div className="hero-section">
      {/* <animated.div style={props} className="section-container">
               <h1 className="hero-headline">"If you can get 1% better each day for one year, <br/> you’ll end up 37 times better by the time you’re done."</h1>
               <h2>– James Clear, Atomic Habits –</h2>
            </animated.div> */}
      {/* <animated.div style={props} className="section-container">
                <h1 className="hero-headline"></h1>
               
            </animated.div> */}

    {scrollVal ?
      <animated.img
        style={{
          transform: `scale(${scrollVal}) translate(0, -50px)`,
          position: "fixed",
          top: "-80px",
          width: "100vw",
        }}
        src={TriangleSVG}
        alt="triangle svg"
      /> : scrollVal > 0.7 ?
      <animated.img
        style={{
          transform: `scale(${scrollVal}) translate(0, -50px)`,
          position: "fixed",
          top: "-80px",
          width: "100vw",
        }}
        src={TriangleSVG}
        alt="triangle svg"
      /> : scrollVal > 1.2 ?
      <animated.img
        style={{
          transform: `scale(${scrollVal}) translate(0, -50px)`,
          position: "fixed",
          top: "-80px",
          width: "100vw",
        }}
        src={TriangleSVG}
        alt="triangle svg"
      /> : scrollVal > 1.7 ?
      <animated.img
        style={{
          transform: `scale(${scrollVal}) translate(0, -50px)`,
          position: "fixed",
          top: "-80px",
          width: "100vw",
        }}
        src={TriangleSVG}
        alt="triangle svg"
      /> : ""}
    </div>
  );
}

export default HeroSection;
