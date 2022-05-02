import React, { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section className="contact" id="contact">
      <div
        className="contact-img"
        style={{
          backgroundImage: "url(/images/contact.jpeg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="contact-info-div">
        <h2
          className="contact-h2"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Let's talk
        </h2>
        <a href="mailto:ivana.cliffords@gmail.com" target="_blank"rel="noreferrer noopener">
          <p
            className="contact-info-link"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in"
            data-aos-duration="600"
            data-aos-delay="400"
            data-aos-once="true"
          >
            ivana.cliffords@gmail.com
          </p>
        </a>
        <a
          href="https://calendly.com/ivana-cliffords/15min"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-cta cta"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
          data-aos-delay="600"
          data-aos-once="true"
        >
          <span>Get in touch</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10" className="cta-svg">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Contact;
