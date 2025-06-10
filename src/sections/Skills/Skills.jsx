import SkillList from "../../common/SkillList";
import checkmarkIcon from "./../../assets/checkmark-dark.svg";
import styles from "./SkillsStyles.module.css";
// import checkmark from "./../../assets/checkmark-light.svg";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="HTML" alt="Checkmark icon" />
        <SkillList src={checkmarkIcon} skill="CSS" alt="Checkmark icon" />
        <SkillList
          src={checkmarkIcon}
          skill="JavaScript"
          alt="Checkmark icon"
        />
        <SkillList
          src={checkmarkIcon}
          skill="TypeScript"
          alt="Checkmark icon"
        />
        <SkillList src={checkmarkIcon} skill="Node" alt="Checkmark icon" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="React" alt="Checkmark icon" />
        <SkillList
          src={checkmarkIcon}
          skill="React Native"
          alt="Checkmark icon"
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="Git" alt="Checkmark icon" />
        <SkillList src={checkmarkIcon} skill="Bootstrap" alt="Checkmark icon" />
      </div>
    </section>
  );
}

export default Skills;
