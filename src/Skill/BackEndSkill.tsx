const backEndFristGroupSkills = [
  {
    icon: "bx bx-badge-check",
    name: "Node  JS",
    level: "Beginner",
  },
  {
    icon: "bx bx-badge-check",
    name: "Mongoose",
    level: "Beginner",
  },
  {
    icon: "bx bx-badge-check",
    name: "Firbase",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "Vercel",
    level: "Intermediate",
  },
];
const backEndSecondGroupSkills = [
  {
    icon: "bx bx-badge-check",
    name: "Express JS",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "MongoDB",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "JWT",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "Shocket io",
    level: "Beginner",
  },
];

const BackEndSkill = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Backend Development</h3>
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
