import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Home.css";
import { Fade } from "react-awesome-reveal";

const Social = () => {
  return (
    <div className="social-icon">
      <Fade direction="up" triggerOnce delay={100}>
        {" "}
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100075403486886"
        >
          {" "}
          <BsFacebook />{" "}
        </a>
      </Fade>
      <Fade direction="up" triggerOnce delay={200}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sabbir-chowdhury-891509257/"
        >
          {" "}
          <BsLinkedin />
        </a>
      </Fade>
      <Fade direction="up" triggerOnce delay={300}>
        {" "}
        <a target="_blank" href="https://github.com/sabbirchowdhury12">
          {" "}
          <BsGithub />
        </a>
      </Fade>
    </div>
  );
};

export default Social;
