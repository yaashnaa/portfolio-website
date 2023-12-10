import React, { useRef, useEffect, useState } from "react";
import skillsData from "./SkillsData"; // Import your skills data
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  const skillsRef = useRef(null);
  const typewriterRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleCollapse = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
  };


  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (typewriterRef.current) {
              typewriterRef.current.classList.add("typewriter");
              typewriterRef.current.style.display = "block";

            }
          }
         
        });
      },
      {
        threshold: 0.2, // Adjust the threshold as needed
      }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <>
     <div className="skills-section">
      <div className="text-center">
        <div className={`typewriter`}>
          Here are some of my skills
        </div>
      </div>
      <div className="skills-div">
        {skillsData.map((category, index) => (
          <div key={index}
          data-aos={selectedTitle === category.title ? "fade-up" : "fade-down"}
          >

            <div className="skills">
              <div
                className="skill-title"
                onClick={() => toggleCollapse(category.title)}
                style={{ cursor: "pointer" }}
              >
                {category.title} {selectedTitle === category.title ? "▼" : "▲"}
              </div>
              {selectedTitle === category.title && (
                <div className="images" data-aos="fade-down">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-container">
                      <img src={skill.image} alt={skill.name} />
                      <div className="skill-label">{skill.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Skills;
