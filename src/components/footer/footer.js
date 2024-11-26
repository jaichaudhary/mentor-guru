import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Column 1: About Section */}
        <div className="footer__section">
          <h2 className="footer__title">Mentor Guru</h2>
          <p className="footer__description">
            Mentor Guru is your personal mentor to help UPSC students in their
            exam preparation.
          </p>
        </div>

        {/* Column 2: Follow Us */}
        <div className="footer__section">
          <h4 className="footer__subtitle">Follow Us</h4>
          <div className="footer__icons">
            <a
              href="https://www.instagram.com/mentorguru.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img
                style={{ height: 30, width: 30 }}
                src="img/instagram.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        {/* Column 3: Contact Us */}
        <div className="footer__section">
          <h4 className="footer__subtitle">Contact Us</h4>
          <ul className="footer__list">
            <li>
              Student Queries:{" "}
              <a href="mailto:ask@mentorguru.in" className="footer__link">
                ask@mentorguru.in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;