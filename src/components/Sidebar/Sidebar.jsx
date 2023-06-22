import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container-left">
        <a
          href="https://github.com/Cyber-SW"
          style={{ color: "var(--clr-primary-200)" }}
          target="blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
        </a>
        <a
          href="https://www.codewars.com/users/Cyber-SW"
          target="blank"
          className="cw-icon"
        />
        <a
          href="https://www.linkedin.com/in/shawn-wolter-93a263195/"
          style={{ color: "var(--clr-primary-200)" }}
          target="blank"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            className="linkedin-icon"
          />
        </a>
      </div>
      <hr className="sidebar-vl-left" />
      <a href="mailto:woltersh@outlook.de" className="sidebar-right-mail">
        woltersh@outlook.de
      </a>
      <hr className="sidebar-vl-right" />
    </div>
  );
}

export default Sidebar;
