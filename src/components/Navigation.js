import React from "react";
import { useState } from "react";

const Navigation = () => {

  const [showLinks,setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  }

  return (
    <div>
      <header>
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
          <ul className="navbar__links">
            <li>
              <a href="https://jpcapsules.fr/41-proprietaire-2022">
                PROPRIETAIRE 2022
              </a>
            </li>
            <li>
              <a href="https://jpcapsules.fr/5-proprietaire-2021">
                PROPRIETAIRE 2021
              </a>
            </li>
            <li>
              <a href="https://jpcapsules.fr/15-proprietaire-2020">
                PROPRIETAIRE 2020
              </a>
            </li>
            <li>
              <a href="https://jpcapsules.fr/43-generique-2022">
                GENERIQUE 2022
              </a>
            </li>
            <li>
              <a href="https://jpcapsules.fr/10-generique-2021">
                GENERIQUE 2021
              </a>
            </li>
            <li>
              <a href="https://jpcapsules.fr/45-generique-2020">
                GENERIQUE 2020
              </a>
            </li>
          </ul>
          <button className="navbar__burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
