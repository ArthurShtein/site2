import React from "react";
import profilePicture from "./prof.jpg";
import "./About.css";
import { AiOutlineDoubleRight } from "react-icons/ai";

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h2 className="about-header"> About me </h2>
        <div className="underline"> </div>
        <p>
          Specializing in developing beautiful single-page-applications using
          the latest web technologies and I love what I do. After finishing Full
          Stack Developers bootcamp in Coding Academy i'm continuously learning
          and developing my skills.
        </p>
        <h4> Technologies I’ve been working with: </h4>
        <ul className="skills">
          <li> &gt; JavaScript (ES6+)</li>
          <li>&gt; HTML </li>
          <li>&gt; CSS &amp; SCSS </li>
          <li> &gt; React </li>
          <li> &gt; Node.js </li>
          <li>&gt; MongoDB </li>
        </ul>
      </div>
      <img src={profilePicture} alt="profile" className="profile-picture" />
    </div>
  );
}

export default About;
