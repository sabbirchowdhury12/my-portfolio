import { Fade, Slide } from "react-awesome-reveal";
import Button from "../Button/Button";
import "./About.css";
const card = [
  {
    name: "experience",
    desc: "2 years working",
  },
  {
    name: "experience",
    desc: "2 years working",
  },
  {
    name: "experience",
    desc: "2 years working",
  },
];
const About = () => {
  return (
    <section className="about">
      <Slide triggerOnce>
        <div className="section__title">About Me</div>
      </Slide>
      <p className="section__subtitle">My Introduction</p>
      <div className="grid_container">
        <div className="img">
          <img
            src="http://localhost:3000/my-portfolio/static/media/avatar2.8281304283f70af75d47.png"
            alt=""
          />
        </div>

        <div className="info">
          <Slide direction="right" triggerOnce>
            <div className="card">
              {card.map((card) => {
                return (
                  <div className="box">
                    <p> {card.name}</p>
                    <p> {card.desc}</p>
                  </div>
                );
              })}
            </div>
            <Fade direction="right" triggerOnce>
              <p className="info_desc">
                Motivated software engineer seeking entry level employment with
                a growing company. Graduated from Full-stack Academy boot-camp
                at University of Illinois at Chicago. Freelance experience
                includes developing web projects utilizing Python 3, Node JS,
                React (JS, TS), HTML, CSS, WordPress, Databases and more.
                Excited to contribute to a team, continue learning, and add
                value to answer business needs with technology.
              </p>
            </Fade>

            <Button />
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;
