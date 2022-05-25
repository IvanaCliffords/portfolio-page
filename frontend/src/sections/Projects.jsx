import React, { useEffect } from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="projects" id="projects">
      {/* ---------------------------------------------------------------------- */}

      <div
        className="project-item project-item-one"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in"
        data-aos-duration="600"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <div className="project-content">
          <div className="project-text">
            <p className="project-subtitle">Personal project</p>
            <h2 className="project-title">E-commerce Store</h2>
            <span className="project-tech"> ReactJS </span>
            <span className="project-tech"> React Bootstrap </span>
            <span className="project-tech"> CSS </span>
            <span className="project-tech"> NodeJS </span>
            <span className="project-tech"> MongoDB </span>

            <span className="project-tech">Heroku </span>

            <p className="project-desc">
              E-commerce React and Node project. I used Express server,
              useReducer hook to maintain the state of the app, Axios to make
              the API calls, and React-Bootstrap to style the app. It has user
              authentication and PayPal setup.
            </p>
          </div>
          <div div className="project-links">
            <a
              href="https://github.com/IvanaCliffords/e-commerce-website"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsGithub className="project-icon" />
            </a>
            <a
              href="https://drippy-store.herokuapp.com"
              className="projects-cta cta"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>Website</span>
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

        <div className="project-img-wrapper">
          <div
            style={{
              backgroundImage: "url(/images/project-one.jpeg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "30px",
            }}
            className="project-img"
          >
            {" "}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}

      <div
        className="project-item project-item-two"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in"
        data-aos-duration="600"
        data-aos-delay="600"
        data-aos-once="true"
      >
        <div className="project-content">
          <div className="project-text">
            <p className="project-subtitle">Personal project</p>
            <h2 className="project-title">Feeling Good App</h2>
            <span className="project-tech">React JS</span>
            <span className="project-tech">CSS</span>
            <span className="project-tech">Material UI</span>
            <span className="project-tech">Node</span>
            <span className="project-tech">ExpressJS</span>
            <span className="project-tech">MongoDB</span>
            <span className="project-tech">Heroku</span>
            <p className="project-desc">
              MERN app that uses Redux to maintain state. It portrays CRUD
              functionalities, since users can create posts, upload images, edit
              and delete the posts. It also makes request to Quotes API.
            </p>
          </div>
          <div div className="project-links">
            <a
              href="https://github.com/IvanaCliffords/feel-good-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsGithub className="project-icon" />
            </a>
            <a
              href="https://feel-good-app.herokuapp.com/"
              className="projects-cta cta"
              rel="noreferrer noopener"
              target="_blank"

            >
              <span>Website</span>
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
        <div className="project-img-wrapper">
          <div
            style={{
              backgroundImage: "url(/images/project-two.jpeg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "30px",
            }}
            className="project-img"
          >
            {" "}
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------- */}

      <div
        className="project-item project-item-three"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in"
        data-aos-duration="600"
        data-aos-delay="900"
        data-aos-once="true"
      >
        <div className="project-content">
          <div className="project-text">
            <p className="project-subtitle">Personal project</p>
            <h2 className="project-title">FreeWater Website</h2>
            <span className="project-tech">Wordpress</span>
            <span className="project-tech">HTML</span>
            <span className="project-tech">CSS</span>
            <p className="project-desc">
              I helped design and create a frontend of a wordpress website. I
              also used some custom CSS to create more personalized design.
            </p>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/IvanaCliffords"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsGithub className="project-icon" />
            </a>
            <a
              href="https://www.freewater.io/"
              className="projects-cta cta"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span>Website</span>
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
        <div className="project-img-wrapper">
          <div
            style={{
              backgroundImage: "url(/images/project-three.jpeg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "30px",
            }}
            className="project-img"
          ></div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------- */}
    </div>
  );
};

export default Projects;
