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
import { SiJquery } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


// BACKEND

import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiPython } from "react-icons/si";


// OTHER

import { UilCodeBranch } from "@iconscout/react-unicons";
import { AiFillApi } from "react-icons/ai";
import { SiNodedotjs } from "react-icons/si";
import { SiBigcommerce } from "react-icons/si";
import { SiWordpress } from "react-icons/si";



const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-wrapper">
        <div className="skill-unit first-container">
          <p className="frontend-text text">Frontend</p>
          <div className="skills-icon-wrapper">
            <UilHtml5Alt className="skills-icon" />
          </div>
          <p className="skill-name">Html</p>
        </div>
        <div className="skill-unit second-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <RiCss3Line className="skills-icon" />
          </div>
          <p className="skill-name">Css</p>
        </div>
        <div className="skill-unit fourth-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <SiSass className="skills-icon" />
          </div>
          <p className="skill-name">Sass</p>
        </div>

        <div className="skill-unit fourth-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <UilJavaScript className="skills-icon" />
          </div>

          <p className="skill-name">JavaScript</p>
        </div>
        <div className="skill-unit third-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <FaReact className="skills-icon" />
          </div>

          <p className="skill-name">React JS</p>
        </div>
        <div className="skill-unit first-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <SiJquery className="skills-icon" />
          </div>

          <p className="skill-name">jQuery</p>
        </div>
        <div className="skill-unit first-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <SiNextdotjs className="skills-icon" />
          </div>

          <p className="skill-name">Next JS</p>
        </div>
        <div className="skill-unit fourth-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <SiTypescript className="skills-icon" />
          </div>

          <p className="skill-name">Typescript</p>
        </div>

        <div className="skill-unit first-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <BsBootstrap className="skills-icon" />
          </div>

          <p className="skill-name">Bootstrap</p>
        </div>
        <div className="skill-unit second-container">
          <p className="frontend-text text">Frontend</p>

          <div className="skills-icon-wrapper">
            <SiMaterialui className="skills-icon" />
          </div>
          <p className="skill-name">Material UI</p>
        </div>

        {/* BACKEND */}
        <div className="skill-unit fourth-container">
          <p className="backend-text text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiNodedotjs className="skills-icon" />
          </div>

          <p className="skill-name">Node JS</p>
        </div>
        <div className="skill-unit second-container">
          <p className="backend-text text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiMongodb className="skills-icon" />
          </div>
          <p className="skill-name">Mongo DB</p>
        </div>

        <div className="skill-unit third-container">
          <p className="backend-text text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiExpress className="skills-icon" />
          </div>

          <p className="skill-name">Express JS</p>
        </div>
        <div className="skill-unit first-container">
          <p className=" text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiFirebase className="skills-icon" />
          </div>

          <p className="skill-name">Firebase</p>
        </div>

        <div className="skill-unit third-container">
          <p className=" text">Other</p>

          <div className="skills-icon-wrapper">
            <SiHeroku className="skills-icon" />
          </div>

          <p className="skill-name">Heroku</p>
        </div>

        {/* OTHER  */}

        <div className="skill-unit fourth-container">
          <p className="other-text text">Other</p>

          <div className="skills-icon-wrapper">
            <UilCodeBranch className="skills-icon" />
          </div>

          <p className="skill-name">Git</p>
        </div>

        <div className="skill-unit first-container">
          <p className="other-text text">Other</p>

          <div className="skills-icon-wrapper">
            <AiFillApi className="skills-icon" />
          </div>

          <p className="skill-name">Rest API</p>
        </div>
        <div className="skill-unit fourth-container">
          <p className="other-text text">Other</p>

          <div className="skills-icon-wrapper">
            <SiBigcommerce className="skills-icon" />
          </div>

          <p className="skill-name">Stencil</p>
        </div>
        <div className="skill-unit second-container">
          <p className="other-text text">Other</p>

          <div className="skills-icon-wrapper">
            <SiWordpress className="skills-icon" />
          </div>

          <p className="skill-name">Wordpress</p>
        </div>
        <div className="skill-unit fourth-container">
          <p className="other-text text">Backend</p>

          <div className="skills-icon-wrapper">
            <SiPython className="skills-icon" />
          </div>

          <p className="skill-name">Learning Python</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

