import React, { useState, useEffect, useRef } from "react";
import New from "../public/new.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";


const NewHeroBanner = () => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [shouldRotateOut, setShouldRotateOut] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const h1Ref = useRef(null);
  

  const handleMouseMove = (e) => {
    const rXP =
      e.pageX - h1Ref.current.offsetLeft - h1Ref.current.clientWidth / 2;
    const rYP =
      e.pageY - h1Ref.current.offsetTop - h1Ref.current.clientHeight / 2;

    h1Ref.current.style.textShadow = `${rYP / 10}px ${
      rXP / 80
    }px rgba(217, 164, 161, 0.8),
                                       ${rYP / 8}px ${
      rXP / 60
    }px rgba(251, 213, 213, 0.8),
                                       ${rXP / 70}px ${
      rYP / 12
    }px rgba(28, 203, 212, 0.5)`;
  };
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="main-div">
        <div className="div-1" data-aos="fade-right"  data-aos-anchor-placement="top-bottom" data-aos-delay="500">
          {" "}
          <div className="main">
            <div className="main-heading">
              <div >
                {" "}
                <div className="main-heading-title" ata-aos="zoom-in-right"> Hi, I'm Yaashna!</div>
                {/* <div className="sign">  */}
                <h1 ata-aos="zoom-in-right">
                  I'm a web developer and designer based in NYC
                </h1>
      
      
                {/* </div> */}
                {/* <div class="sign">
                  {" "}
                  <span style={{ color: "black" }}>I'm a&nbsp;</span>
                  <span class="fast-flicker"> T</span>E
                  <span class="flicker">C</span>H &nbsp;{" "}
                  <span style={{ color: "black" }}> and </span>
                </div>
                <div class="sign">
                  <span class="fast-flicker">A</span>R
                  <span class="flicker">T</span>&nbsp;{" "}
                  <span style={{ color: "black" }}>student</span>
                </div> */}
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
