import React, { useEffect } from "react";
import FlexFit from "../public/assets/flexfit.png";
import StudyTimer from "../public/assets/study-timer.png";
import ChatApp from "../public/assets/musicChat.png";
import Respiro from "../public/assets/respiro.png";
import Draw from "../public/assets/drawingapp.png";
import Bloghub from "../public/assets/bloghub.png";
import StudyHub from "../public/assets/studyHub.png";
import MoonLamp from "../public/assets/moonlamp.png";
import Performance from "../public/assets/performance.png";
import zenPose from "../public/assets/zenPose.png";
import Game from "../public/assets/game.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
function Projects() {
  const [currentSection, setCurrentSection] = React.useState("webdev");

  const handleNextSection = () => {
    // Switch to "creative" if current is "webdev", else go back to "webdev"
    setCurrentSection((prev) => (prev === "webdev" ? "creative" : "webdev"));
  };

  const handlePreviousSection = () => {
    // Switch to "webdev" if current is "creative", else go to "creative"
    setCurrentSection((prev) => (prev === "creative" ? "webdev" : "creative"));
  };
  const element = <FontAwesomeIcon icon="fa-solid fa-arrow-left" />;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="project-heading"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {" "}
        <div className="project-header">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow-icon"
            onClick={handlePreviousSection}
          />

          <svg viewBox="0 0 1320 300" width="100%" height="100%">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              {currentSection === "webdev"
                ? "Web Dev Projects"
                : "Creative Projects"}
            </text>
          </svg>

          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow-icon"
            onClick={handleNextSection}
          />
        </div>
      </div>
      <div className="projects-web">
        {currentSection === "webdev" && (
          <div className="web-flex">
            <div className="web-project" data-aos="fade-left">
              <div className="project-content">
                <div className="project-content">
                  <div className="tech" id="tech">
                    <div className="button-21"> GenAI </div>
                    <div className="button-21"> React </div>
                    <div className="button-21"> Python </div>
                    <div className="button-21"> Axios </div>
                    <div className="button-21"> Machine Learning</div>
        
                  </div>
                  <div className="project-img-mobile">
                    <img src={StudyHub} />
                    <div className="image-hover">
                      {" "}
                      <div className="links-1">
                        <a
                          href="https://github.com/yaashnaa/hackathon-2025"
                          style={{ color: "white", textDecoration: "underline" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github repository{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tech-mobile">
                  <div className="button-21"> GenAI </div>
                    <div className="button-21"> React </div>
                    <div className="button-21"> Python </div>
                    <div className="button-21"> Axios </div>
                    <div className="button-21"> Machine Learning</div>
                    
                  </div>
                  <div className="project-heading-inside"> ZenPose (HACKNYU 2025 WInner)</div>
                  <div className="project-desc">
                    Developed a web app that uses real-time pose detection to
                    provide instant feedback for injury prevention. Improved
                    detection accuracy by implementing relative pose estimation
                    and integrated Gemini API for personalized corrections.
                    Built a responsive UI with React enhancing user experience
                    and engagement.
                  </div>
                </div>
              </div>
              <div className="project-img" id="project-img">
                <img src={zenPose} />
                <div className="image-hover">
                  {" "}
                  <div className="links-1">
                    <a
                        href="https://github.com/yaashnaa/hackathon-2025"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github repository{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="web-project" data-aos="fade-right">
              <div className="project-img">
                <img src={FlexFit} />
                <div className="image-hover">
                  {" "}
                  <div className="links-1">
                    <a
                      href="https://auth-fitness-website-react.web.app/"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to website
                    </a>

                    <a
                      href="https://github.com/yaashnaa/FlexFit.git"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github repository
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="tech">
                  <div className="button-21"> React </div>
                  <div className="button-21"> Firebase </div>
                  <div className="button-21"> Rapid API </div>
                  <div className="button-21"> Axios </div>
                  <div className="button-21"> MUI </div>
                </div>

                <div className="project-heading-inside"> FlexFit</div>
                <div className="project-desc">
                  A cutting-edge fitness platform crafted with React, providing
                  a seamless and responsive user interface. Harnessing the power
                  of three APIs, our website dynamically integrates exercise,
                  meal, and recipe data to offer a comprehensive wellness
                  journey. Authentication and hosting are flawlessly managed
                  through Firebase, ensuring a secure and reliable user
                  experience.
                </div>
              </div>
            </div>

            <div className="web-project" data-aos="fade-left">
              <div className="project-content">
                <div className="project-content">
                  <div className="tech" id="tech">
                    <div className="button-21"> Express </div>
                    <div className="button-21"> EJS </div>
                    <div className="button-21"> Nedb </div>
                    <div className="button-21"> WebRTC </div>
                    <div className="button-21"> Peer.js</div>
                  </div>
                  <div className="project-img-mobile">
                    <img src={StudyHub} />
                    <div className="image-hover">
                      {" "}
                      <div className="links-1">
                        <a
                          href="https://adaptive-carnelian-lobe.glitch.me/"
                          style={{ color: "white", textDecoration: "underline" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Go to website{" "}
                        </a>
                        <a
                          href="https://github.com/yaashnaa/StudyCenter.git"
                          style={{ color: "white", textDecoration: "underline" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github repository{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tech-mobile">
                    <div className="button-21"> Express </div>
                    <div className="button-21"> EJS </div>
                    <div className="button-21"> Nedb </div>
                    <div className="button-21"> WebRTC </div>
                    <div className="button-21"> Peer.js</div>
                  </div>
                  <div className="project-heading-inside"> StudyCenter</div>
                  <div className="project-desc">
                    A dynamic platform that facilitates collaborative studying,
                    harnessing the power of timers for enhanced productivity.
                    Integrated with the Spotify API, it allows you to enjoy your
                    favorite music while studying. Engage in public study rooms,
                    create your own, or opt for a solo study session.
                    Personalize your environment by choosing the background that
                    enhances your focus. Additionally, the platform includes a
                    calendar and a to-do list for better organization and
                    planning.
                  </div>
                </div>
              </div>
              <div className="project-img" id="project-img">
                <img src={StudyHub} />
                <div className="image-hover">
                  {" "}
                  <div className="links-1">
                    <a
                      href="https://adaptive-carnelian-lobe.glitch.me/"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to website{" "}
                    </a>
                    <a
                      href="https://github.com/yaashnaa/StudyCenter.git"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github repository{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="web-project" data-aos="fade-right">
              <div className="project-img">
                <img src={Bloghub} />
                <div className="image-hover">
                  {" "}
                  <div className="links-1">
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to website{" "}
                    </a>
                    <a
                      href="https://github.com/yaashnaa/Bloghub.git"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github repository{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-content">
                  <div className="tech">
                    <div className="button-21"> Express </div>
                    <div className="button-21"> EJS </div>
                    <div className="button-21"> Bcrypt </div>
                    <div className="button-21"> Passport.js </div>
                    <div className="button-21"> MongoDB</div>
                  </div>

                  <div className="project-heading-inside"> BlogHub</div>
                  <div className="project-desc">
                    A vibrant blogging platform designed for users to publish
                    and explore a diverse range of blogs. The website harnesses
                    the power of MongoDB for secure storage of user data and
                    blogs, ensuring a seamless and reliable experience. With
                    Passport.js, authentication is made simple, providing a
                    trusted environment for users. The platform is built on
                    Express and EJS for efficient templating, offering a
                    user-friendly interface for both writers and readers.
                  </div>
                </div>
              </div>
            </div>

            <div className="web-project" data-aos="fade-left">
              <div className="project-content">
                <div className="project-img-mobile">
                  <img src={ChatApp} />
                  <div className="image-hover">
                    {" "}
                    <div className="links-1">
                      <a
                        href="https://sixth-field-fascinator.glitch.me/"
                        style={{ color: "white", textDecoration: "underline" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go to website{" "}
                      </a>
                      <a
                        href="https://github.com/yaashnaa/MusicConnect.git"
                        style={{ color: "white", textDecoration: "underline" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github repository
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tech-mobile">
                  <div className="button-21"> React </div>
                  <div className="button-21"> Express </div>
                  <div className="button-21"> Socket.io </div>
                  <div className="button-21"> WebRTC </div>
                  <div className="button-21"> SimplePeer</div>
                  <div className="button-21"> CodeMirror</div>
                </div>
                <div className="tech">
                  <div className="button-21"> React </div>
                  <div className="button-21"> Express </div>
                  <div className="button-21"> Socket.io </div>
                  <div className="button-21"> WebRTC </div>
                  <div className="button-21"> SimplePeer</div>
                  <div className="button-21"> CodeMirror</div>
                </div>
                <div className="project-heading-inside"> MusicConnect</div>
                <div className="project-desc">
                  Experience the unique blend of communication and music sharing
                  on MusicConnect, powered by socket.io. Engage in real-time
                  chat and collaborative music playback with fellow users. The
                  platform features two distinctive modes: 'Listening' and
                  'Playing,' empowering you to both enjoy and share music
                  seamlessly. Join dynamic rooms to connect with like-minded
                  users. With the added support of Express and EJS, MusicConnect
                  ensures a smooth and enjoyable user experience.
                </div>
              </div>
              <div className="project-img" id="project-img">
                <img src={ChatApp} />
                <div className="image-hover">
                  {" "}
                  <div className="links-1">
                    <a
                      href="https://sixth-field-fascinator.glitch.me/"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to website{" "}
                    </a>
                    <a
                      href="https://github.com/yaashnaa/MusicConnect.git"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="web-project" data-aos="fade-right">
              <div className="project-img">
                <img src={Draw} />
                <div className="image-hover">
                  <div className="links-1">
                    <a
                      href="https://digi-draw-live.glitch.me/"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Go to website
                    </a>
                    <a
                      href="https://github.com/yaashnaa/DigiDraw.git"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github repository
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="tech">
                  <div className="button-21"> Express </div>
                  <div className="button-21"> Socket.io </div>
                  <div className="button-21"> WebRTC </div>
                  <div className="button-21"> EJS</div>
                  <div className="button-21"> Morgan</div>
                </div>
                <div className="project-heading-inside"> DigiDraw</div>

                <div className="project-desc">
                  DigiDraw is your canvas for real-time collaboration, allowing
                  users to draw and create together seamlessly. With a spectrum
                  of colors and diverse background options, you can express your
                  creativity in a shared space. The platform goes beyond
                  drawing, enabling screen sharing with recording capabilities
                  and the option to download snapshots of your collaborative
                  artwork. Experience the unique feature of projecting your
                  webcam directly onto the canvas, adding a personal touch to
                  your collaborative sessions.
                </div>
              </div>
            </div>
            <div className="web-project" data-aos="fade-left">
              <div className="project-content">
                <div className="tech" id="tech">
                  <div className="button-21"> EJS </div>
                  <div className="button-21"> Express </div>
                  <div className="button-21"> ML5.js </div>
                  <div className="button-21"> Handpose </div>
                  <div className="button-21"> Facemesh </div>
                  <div className="button-21"> P5.js </div>
                </div>
                <div className="project-img-mobile">
                  <img src={Respiro} />
                  <div className="image-hover">
                    <div className="links-1">
                      <a
                        href="https://yaashnaa.github.io/midterm-liveweb-final/"
                        style={{ color: "white", textDecoration: "underline" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go to website{" "}
                      </a>
                      <a
                        href="https://github.com/yaashnaa/Respiro.git"
                        style={{ color: "white", textDecoration: "underline" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github repository
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tech-mobile">
                  <div className="button-21"> EJS </div>
                  <div className="button-21"> Express </div>
                  <div className="button-21"> ML5.js </div>
                  <div className="button-21"> Handpose </div>
                  <div className="button-21"> Facemesh </div>
                  <div className="button-21"> P5.js </div>
                </div>
                <div className="project-heading-inside">Respiro</div>
                <div className="project-desc">
                  Respiro is an innovative tool designed to promote relaxation
                  and mindfulness through interactive features. With calming
                  visuals, breathing exercises, and positive affirmations, it
                  provides a seamless meditation experience. The platform
                  includes mandala visualizations that adapt to facial
                  expressions using ml5.js and a dynamic box breathing guide
                  built with p5.js, featuring customizable timers. A candle
                  breathing animation reacts to the user’s exhale, leveraging
                  audio detection and microphone input. Users can practice
                  self-affirmations with speech-to-text and text-to-speech
                  features powered by the p5.speech library.
                </div>
              </div>
              <div className="project-img" id="project-img">
                <img src={Respiro} />
                <div className="image-hover">
                  <div className="links-1">
                    <a
                      href="https://yaashnaa.github.io/midterm-liveweb-final/"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to website{" "}
                    </a>
                    <a
                      href="https://github.com/yaashnaa/Respiro.git"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="web-project" data-aos="fade-right">
              <div className="project-img">
                <img src={StudyTimer} />
                <div className="image-hover">
                  <a
                    href="https://study-flow-33bff.web.app/"
                    style={{ color: "white", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to website{" "}
                  </a>
                </div>
              </div>
              <div className="project-content">
                <div className="tech">
                  <div className="button-21"> React </div>
                  <div className="button-21"> API </div>
                  <div className="button-21"> Axios </div>
                </div>
                <div className="project-heading-inside"> StudyFlow</div>
                <div className="project-desc">
                  StudyFlow is a React-based tool designed to streamline your
                  work process. Users can optimize their productivity with a
                  variety of timers tailored to their needs. StudyFlow
                  seamlessly integrates with the YouTube API, offering a curated
                  selection of background music to enhance the study experience.
                  Elevate your workflow with this versatile and user-friendly
                  study companion."
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {currentSection === "creative" && (
        <div className="creative-flex">
          <div className="creative-project" data-aos="fade-right">
            <div className="project-img">
              <img src={MoonLamp} />
              <div className="image-hover">
                {" "}
                <div className="links-1">
                  <a
                    href="https://docs.google.com/document/d/1dKotCAPhdJb-Hb3oFyErQZe2LNPbyDZSzRdlkAOgW5w/edit?usp=sharing"
                    style={{ color: "white", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to documentation
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-heading-inside">
                {" "}
                3D Printed Moon Lamp
              </div>
              <div className="project-desc">
                This moon lamp is 3D-printed with a design carefully crafted in
                Fusion 360 for precision. It features an internal LED lighting
                system that creates a magical glow. With a remote control, users
                can easily change colors, setting the perfect ambiance."
              </div>
            </div>
          </div>
          <div className="creative-project" data-aos="fade-right">
            <div className="project-content">
              <div className="project-img-mobile">
                <img src={Performance} />
                <div className="image-hover">
                  {" "}
                  <div className="links-1">
                    <a
                      href="https://drive.google.com/drive/folders/1vtF-D3IE8SWd9t0jLkbh7IBlBT2qnbTQ?usp=sharing"
                      style={{ color: "white", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to documentation
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-heading-inside">
                {" "}
                Interactive Motion Performance
              </div>
              <div className="project-desc">
                Designed and executed a live performance integrating wearable
                technology and interactive visuals. Used Arduino to interface
                with TouchDesigner, generating real-time visuals from
                accelerometer and gyroscope data. This project showcased
                expertise in wearable tech, real-time visual programming, and
                creative coding, seamlessly blending hardware and software for
                an immersive experience."
              </div>
            </div>
            <div className="project-img" id="project-img">
              <img src={Performance} />
              <div className="image-hover">
                {" "}
                <div className="links-1">
                  <a
                    href="https://drive.google.com/drive/folders/1vtF-D3IE8SWd9t0jLkbh7IBlBT2qnbTQ?usp=sharing"
                    style={{ color: "white", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="creative-project" data-aos="fade-right">
            <div className="project-img">
              <img src={Game} />
              <div className="image-hover">
                {" "}
                <div className="links-1">
                  <a
                    href="https://yaashnaa.github.io/Submarine-Adventure/"
                    style={{ color: "white", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to website
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-heading-inside">
                {" "}
                Submarine Adventure Game
              </div>
              <div className="project-desc">
                Submarine Adventure is an engaging underwater exploration game
                built with p5.js. Players control a submarine using arrow keys
                to navigate the ocean depths, collecting coins to increase their
                score while avoiding sharks and obstacles that can end the game.
                Each level presents a greater challenge, requiring more coins to
                progress. A dynamic progress bar keeps players informed of their
                advancement toward completing each level, adding excitement and
                motivation to the adventure.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
