import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "../public/assets/aboutme.jpg";
import simpleParallax from "simple-parallax-js";

const MiniAboutMe = () => {
  useEffect(() => {
    AOS.init();
    // var image = document.getElementsByClassName("circular-img");
    // new simpleParallax(image, {
    //   overflow: true,
    // });
  }, []);

  return (
    <>
      <div
        className="aboutme-main"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <div className="card" data-aos="fade-right">
          {" "}
          <img src={AboutMe} className="circular-img" />{" "}
          <span className="top"></span>
          <span className="right"></span>
          <span className="bottom"></span>
          <span className="left"></span>
        </div>

        <div className="aboutme-content">
          <div className="container projects">
            <h2>So, who am I really?</h2>
            <div className="overlay"></div>
          </div>
          <div className="about-me" data-aos="fade-left">
            I've always loved creating, whether it was art or poetry or
            movement. I think ultimately also those passions cultivated in me
            pursuing sometime which lets me combine technology and art and
            surpass the boundries of traditional art in a way i could have never
            imagined.
            <br />
            <br />
            My portfolio isn't just a collection of projects; it's a testament
            to my journey of curiosity, experimentation, and growth. I'm all
            about the imperfectly perfect, the beautifully chaotic, and the
            endlessly fascinating journey of finding myself in this whirlwind of
            art and technology.
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniAboutMe;
