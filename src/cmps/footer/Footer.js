import React from "react";
import "./Footer.css";

import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p className="footer-p"> Made by Arthur Shtein &copy;</p>
      <p> example@example.com</p>
      <div>
        <FaFacebookSquare className="facebook icon" />
        <FaLinkedin className="linkedin icon" />
        <FaGithubSquare className="github icon" />
      </div>
    </footer>
  );
}

export default Footer;
