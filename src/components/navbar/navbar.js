import React, { useState } from "react";
import "./navbar.css";
import { UilPhone } from "@iconscout/react-unicons";

function Navbar() {
  return (
    <header className="header">
      {/* Logo Section */}
      <a href="#mentor__guru" className="nav__logo">
        {/* <img src="img/logo.png" alt="Logo" className="nav__img" /> */}
        Mentor Guru
      </a>

      {/* Call Back Button */}
      <a
        href="https://forms.gle/8vxgZsn1G9ijvW3z8"
        target="_blank"
        rel="noopener noreferrer"
        className="nav__login"
      >
        <UilPhone className="nav__call-icon" />
        Get a Call Back from Mentor
      </a>
    </header>
  );
}

export default Navbar;
