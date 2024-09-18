import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import SkillsPage from "./SkillsPage";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision.jsx";
import { TextGenerateEffect } from "../components/ui/text-generate-effect.jsx"; // Adjust import path if needed

const LandingPage = () => {
  const [modal, setModal] = useState(false);
  const words = 'MERN Stack Developer'

  return (
    <BackgroundBeamsWithCollision className="relative min-h-screen">
      <div className="relative z-0 w-full bg-cover bg-center min-h-screen">
        <div className=" flex justify-start p-5">
          <img src={logo2} alt="Logo" className="h-40 w-40 ml-8" />
        </div>
        <div className="relative">
          <div className="flex flex-col justify-start text-left">
            <h1 className="text-8xl mt-14 mb-14 ml-10 text-gray-50">Harshit Rautela</h1>
            <h2 className="text-2xl italic ml-10 mb-10 font-bold text-gray-800 bg-gradient-to-r from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text tracking-wider">
            <TextGenerateEffect words={words} />
            </h2>

            <button
              className="mt-4 ml-10 self-start hover:scale-110 bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-500 transition-all"
              onClick={() => setModal(true)}
            >
              About Me
            </button>
          </div>
          <div className=" flex flex-col absolute top-0 right-0 space-y-9 p-4">
            <Link
              to="https://www.instagram.com"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaInstagram size={44} className="text-pink-500" />
            </Link>
            <Link
              to="https://www.linkedin.com"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaLinkedin size={44} className="text-blue-700" />
            </Link>
            <Link
              to="https://mail.google.com"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaEnvelope size={44} className="text-red-600" />
            </Link>
            <Link
              to="https://github.com/"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaGithub size={44} className="text-black" />
            </Link>
            <Link
              to="https://x.com/Rau68853Harshit"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <FaTwitter size={44} className="text-blue-400" />
            </Link>
          </div>
          <div>
            <button className="hover:scale-125 bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-500 transition-all">
              Latest Works
            </button>
            <div className="text-2xl mt-2 animate-bounce text-gray-50">↓</div>
          </div>
        </div>
        {modal && <SkillsPage onClose={() => setModal(false)} />}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default LandingPage;
