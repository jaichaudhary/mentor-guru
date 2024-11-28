import React from "react";
import "./footer.css";
import { UilPhone } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Column 1: About Section */}
        <div className="footer__section">
          <h2 className="footer__title">Mentor Guru</h2>
          <p className="footer__description">
            Unlock your Potential with Mentor Guru's Customized Support.
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
  Call Us:{" "}
  <UilPhone className="nav__call-icons" />
  <a href="tel:9205053891" className="footer__link">
    9205053891 / 7086551761
  </a>
</li>

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
