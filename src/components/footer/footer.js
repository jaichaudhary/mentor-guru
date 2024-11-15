import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h2 className="footer__title">Mentor Guru</h2>
          <p className="footer__description">
            Mentor Guru is your personal mentor to help UPSC students in their
            exam preparation
          </p>
          <div className="footer__follow-us">
            <h4 className="footer__subtitle">Follow us</h4>
            {/* Add social media icons/links here */}
            <div className="footer__icons">
              <a href="/instagram" className="footer__link">
                <img style={{ height: 30, width: 30 }} src="logo512.png" />
              </a>
              <a href="/whatsapp" className="footer__link">
                <img style={{ height: 30, width: 30 }} src="logo512.png" />
              </a>
              <a href="/telegram" className="footer__link">
                <img style={{ height: 30, width: 30 }} src="logo512.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__section">
          <h4 className="footer__subtitle">Company</h4>
          <ul className="footer__list">
            <li>
              <a href="/about-us" className="footer__link">
                About us
              </a>
            </li>
            <li>
              <a href="/blogs" className="footer__link">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__subtitle">Explore Batches</h4>
          <ul className="footer__list">
            <li>
              <a href="/batches/2026" className="footer__link">
                FOCUS Batch 2026
              </a>
            </li>
            <li>
              <a href="/batches/2025" className="footer__link">
                FOCUS Batch 2025
              </a>
            </li>
            <li>
              <a href="/test-series" className="footer__link">
                Prelims Test Series
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__subtitle">Contact Us</h4>
          <ul className="footer__list">
            <li>
              Student Queries:{" "}
              <a href="mailto:ask@kalam.in" className="footer__link">
                ask@kalam.in
              </a>
            </li>
            <li>
              General Queries:{" "}
              <a href="mailto:contact@kalam.in" className="footer__link">
                contact@kalam.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">ⓒ Snapstack Technologies Private Limited</p>
        <ul className="footer__policy-list">
          <li>
            <a href="/terms" className="footer__link">
              Terms
            </a>
          </li>
          <li>
            <a href="/privacy" className="footer__link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/refund" className="footer__link">
              Refund Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
