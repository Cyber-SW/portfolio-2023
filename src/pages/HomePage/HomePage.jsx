import "./homepage.css";
import * as Scroll from "react-scroll";
import { Element } from "react-scroll";

function HeroSection() {
  let Link = Scroll.Link;

  return (
    <Element id="Home" name="Home Page">
      <section className="hero-section-container">
        <div className="hero-headline-container">
          <h3>Welcome to my portfolio</h3>
          <h1>I am Shawn Wolter,</h1>
          <h2>Web Developer and Media Designer.</h2>
          <p>
            Design and technology interest me since I was a little kid when I
            was very passionate about drawing and playing with Legos. Things
            need to be functional but also need to look good, that was my motto
            and is to this day.
          </p>
          <Link to="Work" smooth={true}>
            <button type="button" className="hero-section-btn">
              CHECK OUT MY WORK
            </button>
          </Link>
        </div>
      </section>
    </Element>
  );
}

export default HeroSection;
