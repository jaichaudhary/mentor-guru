import React, { useState, useEffect } from "react";
import "./navbar.css";
import { UilSignInAlt, UilBars } from "@iconscout/react-unicons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
    if (window.innerWidth > 767) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      {/* Logo Section */}
      <a href="/" className="nav__logo">
        <img src="Logo.svg" alt="Logo" className="nav__img" />
      </a>

      {/* Navigation Links - Always Visible on Desktop */}
      {!isMobile && (
        <nav className="nav__menu">
          <a href="/prelims-kaushal" className="nav__link">
            Prelims Kaushal
          </a>
          <a href="/csat-2025" className="nav__link">
            CSAT Course 2025
          </a>
          
        </nav>
      )}

      {/* Call Back Button */}
      <a
        href="https://hbzxwj.courses.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav__login"
      >
        <UilSignInAlt className="nav__call-icon" />
        Login
      </a>

      {/* Hamburger Menu for Mobile */}
      {isMobile && (
        <div className="nav__hamburger" onClick={toggleMenu}>
          <UilBars size="30" />
        </div>
      )}

      {/* Navigation Links - Mobile Popup Menu */}
      {isMobile && isMenuOpen && (
        <div className="nav__popup">
          <nav className="nav__menu nav__menu--popup">
            <a href="/prelims-kaushal" className="nav__link">
              Prelims Kaushal
            </a>
            <a href="/csat-2025" className="nav__link">
              CSAT Course 2025
            </a>
            <a href="/blogs" className="nav__link">
              Blogs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
