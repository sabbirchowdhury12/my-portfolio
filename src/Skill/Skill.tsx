import { FC } from "react";
import { Slide } from "react-awesome-reveal";
import FrontEndSkill from "./FrontEndSkill";
import BackEndSkill from "./BackEndSkill";
import "./Skill.css";

const Skill: FC = () => {
  return (
    <section className="skills" id="skill">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Skills</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <p className="section__subtitle">My technical Skills level</p>
      </Slide>
      <div className="skill_container  grid">
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
