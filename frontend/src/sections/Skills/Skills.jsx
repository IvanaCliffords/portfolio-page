// import React, { useState, useEffect, useRef } from "react";
// import "./Skills.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { skillsData } from "./SkillsData";
// const Skills = () => {
//   const [skills, setSkills] = useState(skillsData);
//   const [displayArray, setDisplayArray] = useState([]);
//   const [displayEl, setDisplayEl] = useState();
//   const [hasIntersected, setHasIntersected] = useState(false);
//   const skillsRef = useRef(null);

//   useEffect(() => {
//     Aos.init({
//       duration: 2000,
//     });
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && !hasIntersected) {
//         setHasIntersected(true);
//         (async function () {
//           for (let el of skills) {
//             await delay(300);
//             setDisplayEl(el);
//           }
//           setDisplayEl(undefined);
//         })();
//       }
//     });
//     observer.observe(skillsRef.current);
//   }, [skills, hasIntersected]);

//   useEffect(() => {
//     displayEl && setDisplayArray((prev) => [...prev, displayEl]);
//   }, [displayEl]);

//   const delay = (ms) =>
//     new Promise((res) => {
//       setTimeout(() => {
//         res();
//       }, ms);
//     });

//   return (
//     <section className="super-skills-wrapper">
//       <div className="skills" id="skills" ref={skillsRef}>
//         <div className="skills-wrapper">
//           {displayArray.map((skill, key) => (
//             <div
//               className={`skill-unit ${skill.containerClassName}`}
//               key={key}
//               data-aos="fade-zoom-in"
//               data-aos-easing="ease-in"
//               data-aos-duration="500"
//               data-aos-once="true"
//             >
//               <p className="text">{skill.stack}</p>
//               <div className="skills-icon-wrapper">{skill.icon}</div>
//               <p className="skill-name">{skill.skillName}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { skillsData } from "./SkillsData";

const Skills = () => {
  const [skills, setSkills] = useState(skillsData);
  const [displayArray, setDisplayArray] = useState([]);
  const [displayEl, setDisplayEl] = useState();
  const [hasIntersected, setHasIntersected] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasIntersected) {
        setHasIntersected(true);
        (async function () {
          for (let el of skills) {
            await delay(350);
            setDisplayEl(el);
          }
          setDisplayEl(undefined);
        })();
      }
    });
    observer.observe(skillsRef.current);
    return () => observer.disconnect(); // Clean up the observer
  }, [skills, hasIntersected]);

  useEffect(() => {
    displayEl && setDisplayArray((prev) => [...prev, displayEl]);
  }, [displayEl]);

  const delay = (ms) =>
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, ms);
    });

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="skills-wrapper">
        {displayArray.map((skill, key) => (
          <div
            className={`skill-unit ${skill.containerClassName}`}
            key={key}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <p className="text">{skill.stack}</p>
            <div className="skills-icon-wrapper">{skill.icon}</div>
            <p className="skill-name">{skill.skillName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

