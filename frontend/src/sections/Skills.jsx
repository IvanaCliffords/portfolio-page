import React from "react";
import "./Skills.css";

// FRONTEND

import { UilHtml5Alt } from "@iconscout/react-unicons";
import { RiCss3Line } from "react-icons/ri";
import { UilJavaScript } from "@iconscout/react-unicons";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { SiMaterialui } from "react-icons/si";
import { SiSass } from "react-icons/si";

// BACKEND

import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiHeroku } from "react-icons/si";

// OTHER

import { UilCodeBranch } from "@iconscout/react-unicons";
import { AiFillApi } from "react-icons/ai";
import { SiNodedotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="custom-shape-divider-top-1651453844">
        <svg
          className="wave-svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="skills-wrapper">
        <div className="skill-unit first-container">
          <p className="frontend-text text">Frontend</p>
          <div className="skills-icon-wrapper">
            <UilHtml5Alt className="skills-icon frontend-icon" />
          </div>
          <p className="skill-name">Html</p>
        </div>
        <div className="skill-unit second-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <RiCss3Line className="skills-icon frontend-icon" />
          </div>
          <p className="skill-name">Css</p>
        </div>
        <div className="skill-unit third-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <SiSass className="skills-icon" />
          </div>
          <p className="skill-name">Sass</p>
        </div>

        <div className="skill-unit fourth-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <UilJavaScript className="skills-icon frontend-icon" />
          </div>

          <p className="skill-name">JavaScript</p>
        </div>
        <div className="skill-unit second-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <FaReact className="skills-icon frontend-icon" />
          </div>

          <p className="skill-name">React JS</p>
        </div>
        <div className="skill-unit fourth-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <SiNextdotjs className="skills-icon frontend-icon" />
          </div>

          <p className="skill-name">Next JS</p>
        </div>

        <div className="skill-unit first-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <BsBootstrap className="skills-icon frontend-icon" />
          </div>

          <p className="skill-name">Bootstrap</p>
        </div>
        <div className="skill-unit third-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <SiMaterialui className="skills-icon frontend-icon" />
          </div>
          <p className="skill-name">Material UI</p>
        </div>

        {/* BACKEND */}
        <div className="skill-unit fourth-container">
          <p className="backend-text text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiNodedotjs className="skills-icon  backend-icon" />
          </div>

          <p className="skill-name">Node JS</p>
        </div>
        <div className="skill-unit second-container">
          <p className="backend-text text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiMongodb className="skills-icon backend-icon" />
          </div>
          <p className="skill-name">Mongo DB</p>
        </div>

        <div className="skill-unit third-container">
          <p className="backend-text text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiExpress className="skills-icon  backend-icon" />
          </div>

          <p className="skill-name">Express JS</p>
        </div>
        <div className="skill-unit first-container">
          <p className=" text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiFirebase className="skills-icon  backend-icon" />
          </div>

          <p className="skill-name">Firebase</p>
        </div>

        <div className="skill-unit third-container">
          <p className=" text">Other</p>

          <div className="skills-icon-wrapper">
            <SiHeroku className="skills-icon  backend-icon" />
          </div>

          <p className="skill-name">Heroku</p>
        </div>

        {/* OTHER  */}

        <div className="skill-unit second-container">
          <p className="other-text text">Other</p>

          <div className="skills-icon-wrapper">
            <UilCodeBranch className="skills-icon other-icon" />
          </div>

          <p className="skill-name">Git</p>
        </div>

        <div className="skill-unit first-container">
          <p className="other-text text">Other</p>

          <div className="skills-icon-wrapper">
            <AiFillApi className="skills-icon  other-icon" />
          </div>

          <p className="skill-name">Rest API</p>
        </div>
      </div>
      
    </section>
  );
};

export default Skills;
