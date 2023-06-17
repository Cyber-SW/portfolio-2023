// import { useEffect, useState } from "react";
// import {
//   useScroll,
//   useSpring,
//   useSpringRef,
//   animated,
// } from "@react-spring/web";
// import TriangleSVG from "../../assets/triangle.svg";
// import HeroTriangleSVG from "../../assets/hero-triangle-5.svg";
// import HeroTriangleImage1 from "../../assets/hero-tirangle-new/hero-triangle-frame-1.png";
// import HeroTriangleImage2 from "../../assets/hero-tirangle-new/hero-triangle-frame-2.png";
// import HeroTriangleImage3 from "../../assets/hero-tirangle-new/hero-triangle-frame-3.png";
// import HeroTriangleImage4 from "../../assets/hero-tirangle-new/hero-triangle-frame-4.png";
import "./homepage.css";

function HeroSection() {
  // let [countImage, setCountImage] = useState(1);
  // const [displayImage, setDisplayImage] = useState(HeroTriangleImage1);
  // const [scrollVal, setScrollVal] = useState(0);
  // const [headlineFade, setHeadlineFade] = useState(null);
  // const heroHeadlineApi = useSpringRef();

  // const { scrollYProgress } = useScroll({
  //   onChange: ({ value: { scrollYProgress } }) => {
  //     setScrollVal(Math.exp(scrollYProgress * 9.2) * 0.2);
  //   },
  // });

  // useEffect(() => {
  //   if (scrollVal > 0.44) {
  //     heroHeadlineApi.start();
  //     setHeadlineFade(false);
  //   } else if (scrollVal < 0.44) {
  //     setHeadlineFade(true);
  //     heroHeadlineApi.start();
  //   }
  // }, [scrollVal]);

  // console.log("SCROLL VAL", scrollVal);
  // console.log("SCROLL PROGRESS", scrollYProgress);

  // function handleTriangleGallery(e) {
  //   e.target.id === "forth"
  //     ? setCountImage((countImage += 1))
  //     : setCountImage((countImage -= 1));
  //   if (countImage < 1) {
  //     setCountImage(4);
  //   }
  //   if (countImage > 4) {
  //     setCountImage(1);
  //   }
  // }

  // useEffect(() => {
  //   countImage === 1
  //     ? setDisplayImage(HeroTriangleImage1)
  //     : countImage === 2
  //     ? setDisplayImage(HeroTriangleImage2)
  //     : countImage === 3
  //     ? setDisplayImage(HeroTriangleImage3)
  //     : countImage === 4
  //     ? setDisplayImage(HeroTriangleImage4)
  //     : "";
  // }, [countImage]);

  return (
    <section className="hero-section-container">
      <div className="hero-container">
        <div className="hero-headline-container">
          <h3>Hello, my name is</h3>
          <h1>Shawn Wolter.</h1>
          <h2>I am a Hamburg based Web Developer and Media Designer.</h2>
          <p>
            Design and technology interest me since I was a little kid when I
            was very passionate about drawing and playing with Legos. Things
            need to be functional but also need to look good, that was my motto
            and is to this day.
          </p>
          <button>Check out my work!</button>
        </div>
        {/* <div className="hero-triangle-svg-container">
          <img
            src={displayImage}
            alt="hero triangle svg"
            className="hero-triangle-svg"
          />
          <button
            type="button"
            id="back"
            className="triangle-btn-back"
            onClick={handleTriangleGallery}
          >BACK</button>
          <button
            type="button"
            id="forth"
            className="triangle-btn-forth"
            onClick={handleTriangleGallery}
          >NEXT</button>
        </div> */}
      </div>

      {/* <animated.div className="hero-headline-container" style={heroHeadline}>
        <h1>
          "If you can get 1% better each day for one year, you'll end up 37
          times better by the time you're done."
        </h1>
        <h2>James Clear, Atomic Habits</h2>
      </animated.div> */}
      {/* <div className="hero-triangle-container">
        <div className="hero-triangle">
          <img
            className="triangle"
            style={{
              transform: `scale(${scrollVal})`,
            }}
            src={TriangleSVG}
            alt="triangle svg"
          />
          {scrollVal >= 2 ? (
            <img
              className="triangle"
              style={{
                transform: `scale(${scrollVal / Math.exp(1)})`,
              }}
              src={TriangleSVG}
              alt="triangle svg"
            />
          ) : (
            ""
          )}
          {scrollVal >= 4 ? (
            <img
              className="triangle"
              style={{
                transform: `scale(${scrollVal / Math.exp(2)})`,
              }}
              src={TriangleSVG}
              alt="triangle svg"
            />
          ) : (
            ""
          )}
          {scrollVal >= 8 ? (
            <img
              className="triangle"
              style={{
                transform: `scale(${scrollVal / Math.exp(3)})`,
              }}
              src={TriangleSVG}
              alt="triangle svg"
            />
          ) : (
            ""
          )}
          {scrollVal >= 16 ? (
            <img
              className="triangle"
              style={{
                transform: `scale(${scrollVal / Math.exp(4)})`,
              }}
              src={TriangleSVG}
              alt="triangle svg"
            />
          ) : (
            ""
          )}
          {scrollVal >= 32 ? (
            <img
              className="triangle"
              style={{
                transform: `scale(${scrollVal / Math.exp(5)})`,
              }}
              src={TriangleSVG}
              alt="triangle svg"
            />
          ) : (
            ""
          )}
        </div>
      </div> */}
    </section>
  );
}

export default HeroSection;
