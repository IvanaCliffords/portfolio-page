import React from "react";
import "./Skills.css";
import { skillsData } from "./SkillsData";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-wrapper">
        {skillsData.map((skill, key) => {
          return (
            <div className={`skill-unit ${skill.containerClassName}`} key={skill.id}>
              <p className="text">{skill.stack}</p>
              <div className="skills-icon-wrapper">{skill.icon}</div>
              <p className="skill-name">{skill.skillName}</p>
            </div>
          );
        })}
      </div>  
    </section>
  );
};

export default Skills;

