import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h2> Arthur Shtein </h2>

      <ul className="header-ul">
        <li className="header-li"> About</li>
        <li className="header-li"> Projects</li>
        <li className="header-li"> Contact</li>
      </ul>
      <button className="dark-mode"> Dark mode</button>
    </header>
  );
}

export default Header;
