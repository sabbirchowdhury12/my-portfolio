import { Link } from "react-scroll";
import { FC } from "react";
import "./Footer.css";
import { listNavBar } from "../utiles/data";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <h1 className="footer_title">Sabbir Chowdhury</h1>

        <ul className="footer_list">
          {listNavBar.map((nav, ind) => {
            return (
              <li key={ind}>
                <Link
                  to={nav.href}
                  className="footer_link"
                  spy={true}
                  smooth={true}
                  duration={50}
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/sabbir-chowdhury-891509257/"
            target={"_blank"}
            rel="noreferrer"
            className="footer_social_link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/sabbirchowdhury12"
            className="footer_social_link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100075403486886"
            className="footer_social_link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          {/* <a
            href="https://twitter.com"
            className="footer_social_link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a> */}
        </div>
        <span className="footer_copy">
          &#169; Copyright {"  "} 2023. {"  "}All rigths reserved by || Sabbir
          Chowdhury.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
