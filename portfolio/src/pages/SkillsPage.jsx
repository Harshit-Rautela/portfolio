import React from "react";
import ReactLogo from "../assets/react.svg";
import DBlogo from "../assets/mongodb.svg";
import nodeLogo from "../assets/nodeLogo.svg";
import ExpressLogo from "../assets/express.svg";
import AboutMe from "../assets/AboutMe.png";
import reduxLogo from "../assets/reduxLogo.svg";
import htmlLogo from "../assets/htmlLogo.svg";
import tailwindLogo from "../assets/tailwindLogo.svg";
import cssLogo from "../assets/cssLogo.svg";
import javascriptLogo from "../assets/javascriptLogo.svg";
import githubLogo from "../assets/githubLogo.svg";
import { AiOutlineClose } from "react-icons/ai";

const SkillsPage = ({ onClose }) => {
  const skills = [
    { src: javascriptLogo, alt: "JavaScript" },
    { src: ReactLogo, alt: "React" },
    { src: reduxLogo, alt: "Redux" },
    { src: nodeLogo, alt: "Node.js" },
    { src: ExpressLogo, alt: "Express.js" },
    { src: htmlLogo, alt: "HTML" },
    { src: cssLogo, alt: "CSS" },
    { src: tailwindLogo, alt: "Tailwind CSS" },
    { src: githubLogo, alt: "GitHub" },
  ];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-10 z-50"
      onClick={onClose}
    >
      <div
        className="flex bg-gray-50 rounded-xl shadow-lg p-8 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-11 top-3 text-3xl text-red-600 cursor-pointer hover:text-red-800 transition-colors"
          onClick={onClose}
        />
        {/* Left Section */}
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">About Me</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a passionate MERN Stack Developer, I am driven by the thrill of
            innovation and the endless possibilities of the digital landscape.
            With expertise spanning MongoDB, Express, React, and Node.js, I
            craft seamless, dynamic web applications that not only meet user
            expectations but exceed them. My journey in the tech world is fueled
            by a relentless pursuit of knowledge, a commitment to solving
            complex problems, and a desire to make a meaningful impact.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-16 h-16 p-2 bg-gray-100 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-transform transform hover:scale-110"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="pt-8 text-4xl font-bold">MERN STACK</div>
          <div className="flex justify-between items-center mt-4 space-x-4 bg-gray-200 p-4 rounded-lg">
            <span className="flex-grow text-center relative group">
              <img
                src={DBlogo}
                alt="MongoDB"
                className="w-10 h-10 mx-auto mb-2"
              />
              <span className="text-green-500 text-3xl">M</span>

              <div className="absolute bottom-[88px] left-1/2 transform -translate-x-1/2 p-1 bg-green-600 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-green-600"></div>
                MongoDB
              </div>
            </span>

            <span className="flex-grow text-center relative group">
              <img
                src={ExpressLogo}
                alt="Express"
                className="w-10 h-10 mx-auto mb-2"
              />
              <span className="text-gray-500 text-3xl">E</span>

              <div className="absolute bottom-[88px] left-1/2 transform -translate-x-1/2 p-1 bg-gray-600 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-500"></div>
                Express
              </div>
            </span>

            <span className="flex-grow text-center relative group">
              <img
                src={ReactLogo}
                alt="React"
                className="w-10 h-10 mx-auto mb-2"
              />
              <span className="text-blue-500 text-3xl">R</span>

              <div className="absolute bottom-[88px] left-1/2 transform -translate-x-1/2 p-1 bg-blue-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-700"></div>
                React
              </div>
            </span>

            <span className="flex-grow text-center relative group">
              <img
                src={nodeLogo}
                alt="Node.js"
                className="w-10 h-10 mx-auto mb-2"
              />
              <span className="text-green-300 text-3xl">N</span>

              <div className="absolute bottom-[88px] left-1/2 transform -translate-x-1/2 p-1 bg-green-500 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-green-500"></div>
                Node.js
              </div>
            </span>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <img
            src={AboutMe}
            alt="About Me"
            className="rounded-xl shadow-lg w-100 h-200 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
