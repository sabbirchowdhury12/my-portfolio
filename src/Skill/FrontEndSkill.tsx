import { FC } from "react";
import {
  frontedFristGroupSkills,
  frontedSecondGroupSkills,
} from "../utiles/data";

const FrontEndSkill: FC = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Frontend Technology </h3>
      <div className="skill_box">
        <div className="skill_group">
          {frontedFristGroupSkills.map((skill, ind) => {
            return (
              <div key={ind} className="skills__data">
                <i className="bx bx-badge-check"></i>

                {/* <img src={skill.icon} alt="" /> */}
                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skill_group">
          {frontedSecondGroupSkills.map((skill, ind) => {
            return (
              <div key={ind} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrontEndSkill;
