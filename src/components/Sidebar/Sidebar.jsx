import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated } from "@react-spring/web";

function Sidebar() {
  const sidebarAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
  });

  return (
    <div className="sidebar">
      <animated.div className="sidebar-container-left" style={sidebarAnimation}>
        <a
          href="https://github.com/Cyber-SW"
          style={{ color: "var(--clr-primary-200)" }}
          target="blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon no-select" />
        </a>
        <a
          href="https://www.codewars.com/users/Cyber-SW"
          target="blank"
          className="cw-icon no-select"
        />
        <a
          href="https://www.linkedin.com/in/shawn-wolter-93a263195/"
          style={{ color: "var(--clr-primary-200)" }}
          target="blank"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            className="linkedin-icon no-select"
          />
        </a>
      </animated.div>
      <animated.hr className="sidebar-vl-left" style={sidebarAnimation} />
      <animated.a
        href="mailto:woltersh@outlook.de"
        className="sidebar-right-mail no-select"
        style={sidebarAnimation}
      >
        woltersh@outlook.de
      </animated.a>
      <animated.hr className="sidebar-vl-right" style={sidebarAnimation} />
    </div>
  );
}

export default Sidebar;
