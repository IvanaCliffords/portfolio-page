import React, { useEffect } from "react";
import "./About.css";
import { BsFillBookmarkFill } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section className="about" id="about">
      <div className="about-content">
        
        <p
          className="about-par"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-once="true"
        >
          I love building beautiful things and I'm focused on continued education and growth. I
          thrive in dynamic and fast paced environments because that’s when my
          organizational and logistical skills are utilized best. I enjoy
          software development because I appreciate precision, cleanliness, and
          efficiency. I take great pride in expanding my role in the team's overall
          success.
        </p>
        <ul className="about-ul">
          <li
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in"
            data-aos-duration="600"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <BsFillBookmarkFill className="about-icon" />{" "}
            <strong>MIT xPRO</strong> Professional Certificate in Coding: Full
            Stack Development with MERN
          </li>
          <li
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in"
            data-aos-duration="600"
            data-aos-delay="700"
            data-aos-once="true"
          >
            <BsFillBookmarkFill className="about-icon" />{" "}
            <strong>University of Belgrade</strong> BS in Sociology
          </li>
          <li
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in"
            data-aos-duration="600"
            data-aos-delay="900"
            data-aos-once="true"
          >
            <BsFillBookmarkFill className="about-icon" /> Lived in{" "}
            <strong>three</strong> and travelled to{" "}
            <strong>seventeen countries </strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
