import React from 'react';
import './comboCourse.css';

function ComboCourse() {
  return (
    <div className="combo-course-container">
      <h2 className="combo-title">COMBO COURSE</h2>
      <p className="combo-subtitle">Prelims Kaushal + CSAT Course 2025</p>
      <button className="enroll-btn">Enroll Now</button>

      <div className="combo-grid">
        <div className="course-box">
          <h3 className="course-title">Prelims Kaushal</h3>
          <ul className="course-list">
            <li>1-1 mentorship sessions</li>
            <li>Coverage of pinpointed content under the supervision of Mentor</li>
            <li>Monitoring student progress through micro-assessment sheets</li>
            <li>Analysis of PYQ and identify patterns & themes</li>
            <li>Academic doubt resolving mentorship</li>
          </ul>
          <div className="price-container">
            <div className="price">₹ 3999</div>
            <div className="tax">+ 18% taxes</div>
          </div>
        </div>

        <div className="plus-sign">+</div>

        <div className="course-box">
          <h3 className="course-title">CSAT Course 2025</h3>
          <ul className="course-list">
            <li>Live complete coverage of CSAT syllabus</li>
            <li>Handouts and practice sheets after every class</li>
            <li>Test series</li>
            <li>Mentorship</li>
            <li>Coverage of last 10 years PYQs</li>
          </ul>
          <div className="price-container">
            <div className="price">₹ 1999</div>
            <div className="tax">+ 18% taxes</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComboCourse;
