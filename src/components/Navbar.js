import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../public/assets/logo.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1); // Opacity state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Adjust opacity: fully visible at top, fades as you scroll down
      const newOpacity = Math.max(1 - window.scrollY / 400, 0.5); // Stops at 0.5 opacity
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div 
        className="navbar" 
        data-aos="fade-down" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})`, transition: "opacity 0.3s ease-in-out" }}
      >
        <div className="navbar-left">
          <div className="nav-btn">
            <img className="logo" src={Logo} alt="logo" />
          </div>
        </div>
        <div className="icon-font" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            size="lg"
            style={{ color: "#ffffff", cursor: "pointer" }}
          />
        </div>

        <div className={`navbar-right ${isOpen ? "active" : ""}`}>
          <Link
            activeClass="active"
            to="aboutme-main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            <div className="nav-btn"> Projects</div>
          </Link>
          <a
            href="https://drive.google.com/file/d/1fNtnNY-HQAS1hdH2_nbEg3HaWbjmRbrf/view?usp=sharing"
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
            onClick={closeMenu}
          >
            <div className="nav-btn">Contact me</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
