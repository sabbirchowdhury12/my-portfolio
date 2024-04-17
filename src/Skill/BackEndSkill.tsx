import { FC } from "react";
import {
  backEndFristGroupSkills,
  backEndSecondGroupSkills,
} from "../utiles/data";

const BackEndSkill: FC = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Backend Technology</h3>
      <div className="skill_box">
        <div className="skill_group">
          {backEndFristGroupSkills.map((skill) => (
            <div className="skills__data">
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skill_group">
          {backEndSecondGroupSkills.map((skill) => (
            <div className="skills__data">
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackEndSkill;
