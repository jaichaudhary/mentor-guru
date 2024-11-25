import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
<<<<<<< HEAD
        {/* Column 1: About Section */}
=======
>>>>>>> origin/master
        <div className="footer__section">
          <h2 className="footer__title">Mentor Guru</h2>
          <p className="footer__description">
            Mentor Guru is your personal mentor to help UPSC students in their
<<<<<<< HEAD
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
=======
            exam preparation
          </p>
          <div className="footer__follow-us">
            <h4 className="footer__subtitle">Follow us</h4>
            {/* Add social media icons/links here */}
            <div className="footer__icons">
              <a
                href="https://www.instagram.com/mentorguru.in/"
                target="_blank"
                className="footer__link"
              >
                <img
                  style={{ height: 30, width: 30 }}
                  src="img/instagram.png"
                />
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
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/master
    </footer>
  );
};

export default Footer;
