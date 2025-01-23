import React, { useEffect, useRef } from 'react';
import VANTA from 'vanta';
import { BIRDS } from 'vanta/dist/vanta.birds.min';
import MiniAboutMe from './MiniAboutMe';
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "../public/assets/aboutme.jpg";

const BirdsBg = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;

    // Check if VANTA.BIRDS is a function before initializing
    if (typeof VANTA.BIRDS === 'function') {
      vantaEffect = VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        // ... other options
      });
    }

    // Cleanup when the component is unmounted
    return () => {
      if (vantaEffect) {
        // Check if vantaEffect has a destroy method before calling
        if (vantaEffect.destroy) {
          vantaEffect.destroy();
        }
      }
    };
  }, []);

  return <div ref={vantaRef}>
    <div className="aboutme-main">
        <div class="card" data-aos="fade-right">
          {" "}
          <img src={AboutMe} className="circular-img" />{" "}
          <span className="top"></span>
          <span className="right"></span>
          <span className="bottom"></span>
          <span className="left"></span>
        </div>

        <div className="aboutme-content">
          <div className={`typewriter`}>
            <h1> So, who am I really?</h1>
          </div>
          <div className="aboutme-heading">So, who am I really?</div>
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

  </div>;
};

export default BirdsBg;
