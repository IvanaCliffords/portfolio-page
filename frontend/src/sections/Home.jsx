import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Ivana_Cliffords_Resume from "../assets/Ivana_Cliffords_Resume.pdf";
import "./Home.css";
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="home" id="home">
  
      <img
        className="img-fluid home-img"
        src={`${process.env.PUBLIC_URL}/images/hero-img.jpeg`}
        alt="colorful artistic face"
      />
      <div className="home-content">
        <div className="home-intro">
          <p
            className="home-par-1"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Hello world
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
            I'm Ivana
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
            className="home-contact-links cta"
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
            

            <svg width="13px" height="10px" viewBox="0 0 13 10" className="cta-svg">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
            </Link>
          </div>

          <a
            href={Ivana_Cliffords_Resume}
            download
            className="home-contact-links home-contact-links-2 cta"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in"
            data-aos-duration="600"
            data-aos-delay="1100"
            data-aos-once="true"
          >
            <span>Resume</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10" className="cta-svg">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
