import { Slide } from "react-awesome-reveal";
import FrontEndSkill from "./FrontEndSkill";
import BackEndSkill from "./BackEndSkill";
import "./Skill.css";

const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Skills</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <p className="section__subtitle">My technical level</p>
      </Slide>
      <div className="skills__container container grid">
        <Slide direction="left" triggerOnce>
          <FrontEndSkill />
        </Slide>
        <Slide direction="right" triggerOnce>
          <BackEndSkill />
        </Slide>
      </div>
    </section>
  );
};

export default Skill;
