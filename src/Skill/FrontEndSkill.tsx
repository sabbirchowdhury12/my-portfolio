import mehu from "../assets/mehu-2.jpg";

const frontedFristGroupSkill = [
  {
    icon: mehu,
    name: "HTML",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "Typescript",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "BOOTSTRAP",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "GIT",
    level: "Advanced",
  },
];

const frontedSecondGroupSkill = [
  {
    icon: "bx bx-badge-check",
    name: "CSS",
    level: "Advanced",
  },
  // {
  //   icon: "bx bx-badge-check",
  //   name: "Styled-components",
  //   level: "Advanced",
  // },
  {
    icon: "bx bx-badge-check",
    name: "JAVASCRIPT",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "React JS",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "TAILWIND",
    level: "Advanced",
  },
];

const FrontEndSkill = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Frontend Development </h3>
      <div className="skill_box">
        <div className="skill_group">
          {frontedFristGroupSkill.map((skill, ind) => {
            return (
              <div className="skills__data">
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
          {frontedSecondGroupSkill.map((skill, ind) => {
            return (
              <div className="skills__data">
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
