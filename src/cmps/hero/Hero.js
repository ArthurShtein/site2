import React from "react";
import "./Hero.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";

function Hero() {
  return (
    <main>
      <div className="main-container">
        <h1 className="hero-header">Coderz Workouts </h1>
        <p className="hero-p">Level Up your Skills</p>
        <button className="resume-btn"> About me </button>
      </div>
      <div>
        <IoDocumentAttachOutline className="resume icon" />
        <FaGithub className="github icon" />
        <FaLinkedinIn className="linkedin icon" />
      </div>
    </main>
  );
}

export default Hero;
