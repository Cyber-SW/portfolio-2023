import { useEffect, useState } from "react";
import { useScroll, useSpring, useSpringRef, animated } from "@react-spring/web";
import TriangleSVG from "../assets/triangle.svg";

function HeroSection() {
  const [scrollVal, setScrollVal] = useState(0);
  const [headlineFade, setHeadlineFade] = useState(null)
  const heroHeadlineApi = useSpringRef()

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(Math.exp(scrollYProgress * 9) * 0.2)
    },
  });

  useEffect(() => {
    if (scrollVal > 1) {
      heroHeadlineApi.start()
      setHeadlineFade(false)
    } else if (scrollVal < 1) {
      setHeadlineFade(true)
      heroHeadlineApi.start()
    }
  }, [scrollVal])

  const heroHeadline = useSpring({
    ref: heroHeadlineApi,
    from: { opacity: 1 },
    to: { opacity: 0 },
    reverse: headlineFade,
  })

  console.log("SCROLL VAL", scrollVal);
  console.log("SCROLL PROGRESS", scrollYProgress);

  return (
    <section>
      <animated.div className="hero-headline-container" style={ heroHeadline }>
        <h1>"If you can get 1% better each day for one year, <br/> you'll end up 37 times better by the time you're done."</h1>
        <h2>James Clear, Atomic Habits</h2>
      </animated.div>
      <div className="triangle-hero">
        <img
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
          <img
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
          <img
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
          <img
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
          <img
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
          <img
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
