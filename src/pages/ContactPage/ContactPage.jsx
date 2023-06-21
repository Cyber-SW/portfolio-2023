import "./contactpage.css";
import { Element } from "react-scroll";

function ContactPage() {
  return (
    <Element id="Contact" name="Contact Section">
      <section className="contact-section-container">
        <h1 className="section-headline">CONTACT</h1>
        <hr />

        <div className="contact-container">
          <h3>What´s next?</h3>
          <h2>Get in Touch</h2>
          <p>
            I am currently looking for a full-time job as a junior developer so
            if you have any job opportunities, want to start a project together,
            or just want to say hi, feel free to click the button below.
          </p>
          <a href="mailto:woltersh@outlook.de">
            <button type="button" className="contact-btn">
              SAY HELLO
            </button>
          </a>
        </div>
      </section>
    </Element>
  );
}

export default ContactPage;
