import React, { useState, useEffect, useRef, useCallback } from "react";
import New from "../public/assets/new.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const NewHeroBanner = () => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [shouldRotateOut, setShouldRotateOut] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const h1Ref = useRef(null);

  console.log("Component Mounted");

  // Update the text shadow based on mouse position over the heading.
  const handleMouseMove = useCallback((e) => {
    if (h1Ref.current) {
      const rect = h1Ref.current.getBoundingClientRect();
      const rXP = e.clientX - (rect.left + rect.width / 2);
      const rYP = e.clientY - (rect.top + rect.height / 2);
      h1Ref.current.style.textShadow = `
        ${rYP / 10}px ${rXP / 80}px rgba(217, 164, 161, 0.8),
        ${rYP / 8}px ${rXP / 60}px rgba(251, 213, 213, 0.8),
        ${rXP / 70}px ${rYP / 12}px rgba(28, 203, 212, 0.5)
      `;
    }
  }, []);
  useEffect(() => {
    console.log("AOS Initialized");
    AOS.init();
  }, []);
  useEffect(() => {
    console.log("Scroll Event Listener Added");
    const handleScroll = () => {
      console.log("Scroll Event Triggered");
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrollingUp(true);
        setShouldFadeOut(true);
        setShouldRotateOut(true);
      } else {
        setIsScrollingUp(false);
        setShouldFadeOut(false);
        setShouldRotateOut(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("Scroll Event Listener Removed");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="main-div">
        <div
          className="div-1"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
        >
          {" "}
          <div className="main">
            <div className="main-heading">
              <div>
           
                <div className="main-heading-title" ata-aos="zoom-in-right">
        
                  Hi, I'm Yaashna!
                </div>
                <h1 ata-aos="zoom-in-right">
                  I'm a web developer and designer based in NYC
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`img-div ${
            shouldRotateOut
              ? " animate__animated animate__rotateOutUpRight"
              : ""
          }`}
        >
          <img src={New} loading="lazy" data-aos="flip-up" />
          <div className="background-div"> </div>
        </div>

        <div className="div-2"></div>
      </div>
    </>
  );
};

export default NewHeroBanner;
