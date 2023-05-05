import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/prediction">Prediction</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
