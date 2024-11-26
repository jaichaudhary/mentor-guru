import React, { useState } from "react";
import "./navbar.css";
import { UilPhone } from "@iconscout/react-unicons";

function Navbar() {
  return (
    <header className="header">
      {/* Logo Section */}
      <a href="#mentor__guru" className="nav__logo">
        <img src="logo.svg" alt="Logo" className="nav__img" />
        
      </a>

      {/* Call Back Button */}
      <a
        href="https://forms.gle/exampleGoogleFormLink"
        target="_blank"
        rel="noopener noreferrer"
        className="nav__login"
      >
        <UilPhone className="nav__call-icon" />
        Get a Call Back
      </a>
    </header>
  );
}

export default Navbar;