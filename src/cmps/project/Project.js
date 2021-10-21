import React from "react";
import "./Project.css";
import projectPic from './project.jpg'
import { FaReact } from "react-icons/fa";

function Project({ project }) {
  const { title, desc } = project;
  return (
    <div className="project">
      <img className='project-img' src={projectPic} alt="" />
      <h1> {title} </h1>
      <p> {desc}</p>
      <button className='project-btn'> View here </button>
    </div>
  );
}

export default Project;
