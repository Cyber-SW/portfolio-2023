import "./homepage.css";

function HeroSection() {

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
          <a href=""><button type="button" className="hero-section-btn">Check out my work!</button></a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
