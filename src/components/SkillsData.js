import React from "react";
import Html from "../public/skills/html.jpeg";
import CSS from "../public/skills/css.png";
import JS from "../public/skills/js.png";
import Bootstrao from "../public/skills/bootstrap.png";
import Node from "../public/skills/node.png";
import Reactimg from "../public/skills/react.png";
import API from "../public/skills/api.jpeg";
import Ejs from "../public/skills/ejs.png";
import Express from "../public/skills/express.png";
import Firebase from "../public/skills/firebase.png";
import Git from "../public/skills/git.png";
import Mongodb from "../public/skills/mongodb.jpeg";
import Adobe from "../public/skills/adobe.png";
import Ableton from "../public/skills/ableton.png";
import AI from "../public/skills/ai.png";
import Audition from "../public/skills/audition.png";
import Canva from "../public/skills/canva.png";
import Figma from "../public/skills/figma.png";
import Fusion from "../public/skills/fusion.png";
import Lens from "../public/skills/lens.png";
import WebRTC from "../public/skills/webrtc.png";
import P5 from "../public/skills/p5.png";
import Photoshop from "../public/skills/photoshop.png";
import Procreate from "../public/skills/procreate.png";
import Python from "../public/skills/python.png";
import Spark from "../public/skills/spark.png";
import TD from "../public/skills/td.png";
import SocketIO from "../public/skills/socketio.png";

const skillsData = [
    
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image: Html },
      { name: "CSS", image: CSS },
      { name: "Javascript", image: JS },
      { name: "React", image: Reactimg },
      { name: "Bootstrap", image: Bootstrao },
      { name: "EJS", image: Ejs },

     
    ],
  },
  {
    title: "Backend",
    skills: [
        { name: "Node", image: Node },
        { name: "Express", image: Express },
        { name: "MongoDB", image: Mongodb },
        { name: "Firebase", image: Firebase },
        { name: "API", image: API },

    ],
  },
  {
    title: "Design",
    skills: [
        { name: "Canva", image: Canva },
        { name: "Photoshop", image: Photoshop },
        { name: "Procreate", image: Procreate },
        { name: "Figma", image: Figma },
        { name: "Illustrator", image: AI },
        { name: "Fusion 360", image: Fusion },
    ],
  },
  {
    title: "Others",
    skills: [
        { name: "Git", image: Git },
        { name: "Python", image: Python },
        { name: "P5.js", image: P5 },
        { name: "Touchdesigner", image: TD },
        { name: "Socket.io", image: SocketIO },
        { name: "WebRTC", image: WebRTC },
        { name: "Spark AR", image: Spark },
        { name: "Adobe Creative Suite", image: Adobe },
        
        


    ],
  },
];

export default skillsData;
