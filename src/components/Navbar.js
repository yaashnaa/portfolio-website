import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../public/logo.png";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

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
          <div className="nav-btn">Resume</div>
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
