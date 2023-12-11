import React, { useEffect } from "react";
import FlexFit from "../public/flexfit.png";
import StudyTimer from "../public/study-timer.png";
import ChatApp from "../public/musicChat.png";
import LiveEditor from "../public/code-editor.png";
import Draw from "../public/drawingapp.png";
import Bloghub from "../public/bloghub.png";
import StudyHub from "../public/StudyHub.png";

import AOS from "aos";
import "aos/dist/aos.css";
function Projects() {
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
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Web Dev Projects
          </text>
        </svg>
      </div>
      <div className="projects-web">
        <div className="web-flex">
          <div className="web-project" data-aos="fade-right">
            <div className="project-img">
              <img src={FlexFit} />
              <div className="image-hover">
                {" "}
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Go to website{" "}
                </a>
              </div>
            </div>
            <div className="project-content">
              <div className="tech">
                <div className="button-21"> React </div>
                <div className="button-21"> Firebase </div>
                <div className="button-21"> Rapid API </div>
                <div className="button-21"> Axios </div>
              </div>

              <div className="project-heading-inside"> FlexFit</div>
              <div className="project-desc">
                A cutting-edge fitness platform crafted with React, providing a
                seamless and responsive user interface. Harnessing the power of
                three APIs, our website dynamically integrates exercise, meal,
                and recipe data to offer a comprehensive wellness journey.
                Authentication and hosting are flawlessly managed through
                Firebase, ensuring a secure and reliable user experience.
              </div>
            </div>
          </div>
          <div className="web-project" data-aos="fade-left">
            <div className="project-content">
              <div className="project-content">
                <div className="tech">
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
                  create your own, or opt for a solo study session. Personalize
                  your environment by choosing the background that enhances your
                  focus. Additionally, the platform includes a calendar and a
                  to-do list for better organization and planning.
                </div>
              </div>
            </div>
            <div className="project-img">
              <img src={StudyHub} />
              <div className="image-hover">
                {" "}
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Go to website{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="web-project" data-aos="fade-right">
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
                  A vibrant blogging platform designed for users to publish and
                  explore a diverse range of blogs. The website harnesses the
                  power of MongoDB for secure storage of user data and blogs,
                  ensuring a seamless and reliable experience. With Passport.js,
                  authentication is made simple, providing a trusted environment
                  for users. The platform is built on Express and EJS for
                  efficient templating, offering a user-friendly interface for
                  both writers and readers.
                </div>
              </div>
            </div>
            <div className="project-img">
              <img src={Bloghub} />
              <div className="image-hover">
                {" "}
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Go to website{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="web-project" data-aos="fade-left">
            <div className="project-content">
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
                on MusicConnect, powered by socket.io. Engage in real-time chat
                and collaborative music playback with fellow users. The platform
                features two distinctive modes: 'Listening' and 'Playing,'
                empowering you to both enjoy and share music seamlessly. Join
                dynamic rooms to connect with like-minded users. With the added
                support of Express and EJS, MusicConnect ensures a smooth and
                enjoyable user experience.
              </div>
            </div>
            <div className="project-img">
              <img src={ChatApp} />
              <div className="image-hover">
                {" "}
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Go to website{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="web-project" data-aos="fade-right">
            <div className="project-img">
              <img src={Draw} />
              <div className="image-hover">
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Go to website
                </a>
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
                users to draw and create together seamlessly. With a spectrum of
                colors and diverse background options, you can express your
                creativity in a shared space. The platform goes beyond drawing,
                enabling screen sharing with recording capabilities and the
                option to download snapshots of your collaborative artwork.
                Experience the unique feature of projecting your webcam directly
                onto the canvas, adding a personal touch to your collaborative
                sessions.
              </div>
            </div>
          </div>
          <div className="web-project" data-aos="fade-left">
            <div className="project-content">
              <div className="tech">
                <div className="button-21"> React </div>
                <div className="button-21"> Express </div>
                <div className="button-21"> Socket.io </div>
                <div className="button-21"> WebRTC </div>
                <div className="button-21"> SimplePeer</div>
                <div className="button-21"> CodeMirror</div>
              </div>
              <div className="project-heading-inside"> Live Code Editor</div>
              <div className="project-desc">
                This live coding platform enables you to write and execute your
                code directly in the browser, providing real-time rendering of
                the results. Collaborate with others by sharing the same link,
                allowing simultaneous contributions to the codebase. The
                platform dynamically refreshes to reflect changes made by users,
                fostering seamless collaboration. Additionally, it offers the
                ability to make calls between users. The technology stack
                includes CodeMirror for code editing, React for the user
                interface, Socket.IO for real-time communication, WebRTC and
                SimplePeer for peer-to-peer communication, and Express for
                server-side functionality.
              </div>
            </div>
            <div className="project-img">
              <img src={LiveEditor} />
              <div className="image-hover">
                {" "}
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Go to website{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="web-project" data-aos="fade-right">
            <div className="project-img">
              <img src={StudyTimer} />
              <div className="image-hover">
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
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
                StudyFlow is a React-based tool designed to streamline your work
                process. Users can optimize their productivity with a variety of
                timers tailored to their needs. StudyFlow seamlessly integrates
                with the YouTube API, offering a curated selection of background
                music to enhance the study experience. Elevate your workflow
                with this versatile and user-friendly study companion."
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
