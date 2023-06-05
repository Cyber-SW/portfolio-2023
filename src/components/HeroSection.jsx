import { useState } from "react";
import { useScroll, animated } from "@react-spring/web";
import TriangleSVG from "../assets/triangle.svg";

function HeroSection() {
  const [scrollVal, setScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(Math.exp(scrollYProgress * 9) * 0.2)
    },
  });


  console.log("SCROLL VAL", scrollVal);
  console.log("SCROLL PROGRESS", scrollYProgress);

  return (
    <section>
      <div className="triangle-hero">
        <animated.img
          style={{
            transform: `scale(${scrollVal}) translate(0, -50px)`,
            position: "fixed",
            top: "60px",
            width: "100vw",
          }}
          src={TriangleSVG}
          alt="triangle svg"
        />
        {scrollVal >= 2 ? (
          <animated.img
            style={{
              transform: `scale(${scrollVal / Math.exp(1)}) translate(0, -50px)`,
              position: "fixed",
              top: "60px",
              width: "100vw",
            }}
            src={TriangleSVG}
            alt="triangle svg"
          />
        ) : (
          ""
        )}
        {scrollVal >= 4 ? (
          <animated.img
            style={{
              transform: `scale(${scrollVal / Math.exp(2)}) translate(0, -50px)`,
              position: "fixed",
              top: "60px",
              width: "100vw",
            }}
            src={TriangleSVG}
            alt="triangle svg"
          />
        ) : (
          ""
        )}
        {scrollVal >= 8 ? (
          <animated.img
            style={{
              transform: `scale(${scrollVal / Math.exp(3)}) translate(0, -50px)`,
              position: "fixed",
              top: "60px",
              width: "100vw",
            }}
            src={TriangleSVG}
            alt="triangle svg"
          />
        ) : (
          ""
        )}
        {scrollVal >= 16 ? (
          <animated.img
            style={{
              transform: `scale(${scrollVal / Math.exp(4)}) translate(0, -50px)`,
              position: "fixed",
              top: "60px",
              width: "100vw",
            }}
            src={TriangleSVG}
            alt="triangle svg"
          />
        ) : (
          ""
        )}
        {scrollVal >= 32 ? (
          <animated.img
            style={{
              transform: `scale(${
                scrollVal / Math.exp(5)
              }) translate(0, -50px)`,
              position: "fixed",
              top: "60px",
              width: "100vw",
            }}
            src={TriangleSVG}
            alt="triangle svg"
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default HeroSection;
