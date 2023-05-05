import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar">
      <a href="/">
        <img
          src="assets/logo.png"
          width={155}
          height={50}
          alt="logo"
          className="logo"
        />
      </a>
      <div className="nav-icon" onClick={() => setShowLinks(!showLinks)}>
        {showLinks ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${showLinks ? "show-links" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/prediction">Prediction</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
