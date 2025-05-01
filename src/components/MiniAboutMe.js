//removed uncessary imports and added the necessary imports
//removed the unnecessary comments
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "../public/assets/aboutme.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faCalendarDays,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../css/aboutme.module.css";

const MiniAboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="aboutme-main"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        // data-aos-delay="300"
      >
        <div className="card">
          {" "}
          <img
            src={AboutMe}
            className="circular-img"
            loading="lazy"
            alt="Abut me"
          />{" "}
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
          <div className="about-me">
            I've always loved creating, whether it was art or poetry or
            movement. I think ultimately also those passions cultivated in me
            pursuing something that lets me combine technology and art and
            surpass the boundries of traditional art in a way I could have never
            imagined.
            <br />
            <br />
            My portfolio isn't just a collection of projects; it's a testament
            to my journey of curiosity, experimentation, and growth. I'm all
            about the imperfectly perfect, the beautifully chaotic, and the
            endlessly fascinating journey of finding myself in this blend of art
            and technology.
          </div>
          <div className="aboutme-icons">
            <div className="icon-info">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className="icon-am"
              />{" "}
              yaashna.gupta@nyu.edu
            </div>
            <div className="icon-info">
              <FontAwesomeIcon
                icon={faBuildingColumns}
                size="xl"
                className="icon-am"
              />{" "}
              New York University{" "}
            </div>
            <div className="icon-info">
              <div className={styles.icons}>
                <a
                  href="https://www.linkedin.com/in/yaashna-gupta-a78473237"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>

                <a
                  href="https://github.com/yg2348"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a
                  href="https://drive.google.com/file/d/19fdjmJTiLdouylxjFgCNV1AmufeNcoRf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/_.yaashna._/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </div>
            <div className="icon-info">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="xl"
                className="icon-am"
              />{" "}
              New York{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniAboutMe;
