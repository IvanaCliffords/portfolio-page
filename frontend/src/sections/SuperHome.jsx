import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Ivana_Cliffords_Resume from "../assets/Ivana_Cliffords_Resume.pdf";

import { BsFillBookmarkFill } from "react-icons/bs";
import { Controller, Scene } from "react-scrollmagic";

import "./SuperHome.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="super-home">
      <Controller>
        <Scene triggerHook="onLeave" duration={"300%"} pin>
          <img
            className="home-img"
            src={`${process.env.PUBLIC_URL}/images/hero-img.jpeg`}
            alt="Colorful artistic face"
          />
        </Scene>
        <div className="scrolling-pages">
          <div className="home-content" id="home">
            <div className="home-intro">
              <img
                className="home-img-mobile"
                src={`${process.env.PUBLIC_URL}/images/hero-img-mobile.jpeg`}
                alt="Colorful artistic face"
              />
              <p
                className="home-h1"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Hello world.
              </p>
              <h1
                className="home-h1"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
                data-aos-delay="500"
                data-aos-once="true"
              >
                I'm <span className="ivana">Ivana Cliffords</span>
              </h1>
              <p
                className="home-par-2"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
                data-aos-delay="800"
                data-aos-once="true"
              >
                A full stack web developer
              </p>
            </div>
            <div className="home-contact">
              <div
                className="contact-cta special-contact-cta cta"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
                data-aos-delay="1000"
                data-aos-once="true"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={0}
                >
                  <span>Contact</span>

                  <svg
                    width="13px"
                    height="10px"
                    viewBox="0 0 13 10"
                    className="cta-svg"
                  >
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>

              <a
                href={Ivana_Cliffords_Resume}
                download
                // className="home-contact-links home-contact-links-2 cta"
                className="contact-cta special-contact-cta cta"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
                data-aos-delay="1100"
                data-aos-once="true"
              >
                <span>Resume</span>
                <svg
                  width="13px"
                  height="10px"
                  viewBox="0 0 13 10"
                  className="cta-svg"
                >
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="about-content" id="about">
            <p
              className="about-par"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="600"
              // data-aos-delay="100"
              data-aos-once="true"
            >
              I thrive in dynamic and fast paced environments because that’s
              when my organizational and logistical skills are utilized best.
              <span className="ivana">
                {" "}
                I'm focused on continued education and growth
              </span>{" "}
              and take great pride in expanding my role in the team's overall
              success.
            </p>
            <br />
            <p
              className="about-par"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="600"
              // data-aos-delay="300"
              data-aos-once="true"
            >
              I'm all about{" "}
              <span className="ivana">making things beautiful </span>and enjoy
              software development because I appreciate precision, cleanliness,
              and efficiency.
            </p>
            <br />
          </div>

          <div className="about-education">
            <ul className="about-ul">
              <li
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
                // data-aos-delay="100"
                data-aos-once="true"
              >
                <BsFillBookmarkFill className="about-icon" /> MIT xPRO{" "}
                <strong>
                  Professional Certificate in Coding: Full Stack Development
                  with MERN
                </strong>
              </li>
              <li
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
                // data-aos-delay="250"
                data-aos-once="true"
              >
                <BsFillBookmarkFill className="about-icon" /> University of
                Belgrade <strong>BS in Sociology</strong>
              </li>
              <li
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
                // data-aos-delay="400"
                data-aos-once="true"
              >
                <BsFillBookmarkFill className="about-icon" /> Lived in{" "}
                <strong>three</strong> and travelled to{" "}
                <strong>seventeen countries </strong>
              </li>
            </ul>
          </div>
        </div>
      </Controller>
    </section>
  );
};

export default Home;
