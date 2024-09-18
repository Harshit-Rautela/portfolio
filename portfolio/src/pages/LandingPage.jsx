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

const LandingPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className=" w-full relative bg-cover bg-center min-h-screen bg-red-200">
      <div className="bg-gray-400 flex justify-start p-5">
        <img src={logo} alt="Logo" className="h-20 w-40" />
      </div>
      <div className="relative">
        <div className="flex flex-col justify-start text-left">
          <h1 className="text-8xl mt-32 mb-10">Harshit Rautela</h1>
          <h2 className="text-2xl italic font-bold text-gray-800 bg-gradient-to-r from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text tracking-wider">
            MERN Stack Developer
          </h2>

          <button
            className="mt-4 self-start hover:scale-110 bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-500 transition-all"
            onClick={() => setModal(true)}
          >
            About Me
          </button>

          <img src={logo2} alt="Logo" className="h-40 w-40" />
        </div>
        <div className=" bg-yellow-200 flex flex-col absolute top-0 right-0 space-y-9 p-4">
          <Link
            to="https://www.instagram.com"
            className="hover:scale-125 transition-transform"
          >
            <FaInstagram size={44} className="text-pink-500" />
          </Link>
          <Link
            to="https://www.linkedin.com"
            className="hover:scale-125 transition-transform"
          >
            <FaLinkedin size={44} className="text-blue-700" />
          </Link>
          <Link
            to="https://mail.google.com"
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
            to="https://www.twitter.com"
            className="hover:scale-125 transition-transform"
          >
            <FaTwitter size={44} className="text-blue-400" />
          </Link>
        </div>
        <div className="bg-blue-400">
          <button className=" hover:scale-125  bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-500 transition-all">
            Latest Works
          </button>
          <div className="text-2xl mt-2 animate-bounce">↓</div>
        </div>
      </div>
      {modal && <SkillsPage onClose={() => setModal(false)} />}
    </div>
  );
};

export default LandingPage;
