import { Link } from "react-scroll";
import { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <h1 className="footer_title">Tijani Sylla</h1>

        <ul className="footer_list">
          <li>
            <Link
              to="about"
              className="footer_link"
              spy={true}
              smooth={true}
              duration={50}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="footer_link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="qualification"
              className="footer_link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Qualifications
            </Link>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/tijanisylla"
            target={"_blank"}
            rel="noreferrer"
            className="footer_social_link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/tijanisylla"
            className="footer_social_link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://instagram.com/tijani__sylla/"
            className="footer_social_link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Youngsylla2"
            className="footer_social_link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; Copyright {"  "} 2023. {"  "}All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
