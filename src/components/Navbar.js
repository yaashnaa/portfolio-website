import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../public/assets/logo.png";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ scaleX: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <motion.div style={{ scaleX: controls }} />

      <div className="navbar" data-aos="fade-down">
        <div className="navbar-left">
          <div className="nav-btn">
            <img className="logo" src={Logo} alt="logo" />
          </div>
        </div>
        <div className="icon-font">
          <FontAwesomeIcon
            icon={faBars}
            size="sm"
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="navbar-right">
          <Link
            activeClass="active"
            to="aboutme-main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav-btn"> About </div>{" "}
          </Link>
          <Link
            activeClass="active"
            to="project-heading"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav-btn"> Projects</div>
          </Link>
          <a
            href="https://drive.google.com/file/d/15kIDlGY1DMvGgqlaD-bDwHigcbDVJdfx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="nav-btn"> Resume</div>{" "}
          </a>
          <Link
            activeClass="active"
            to="contact-form"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav-btn">Contact me</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
