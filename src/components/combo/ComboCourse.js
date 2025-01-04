import React from 'react';
import './comboCourse.css';

function ComboCourse() {
  return (
    <div className="combo-course-container">
      <h2 className="combo-title">COMBO COURSE</h2>
      <p className="combo-subtitle">Prelims Kaushal + CSAT Course 2025</p>
      <a href="https://hbzxwj.courses.store/615608" className="enroll-btn">Enroll Now</a>

      <div className="combo-grid">
        <div className="course-box">
          <h3 className="course-title">Prelims Kaushal</h3>
          <ol className="course-list">
            <li>1-1 mentorship sessions</li>
            <li>Coverage of pinpointed content under the supervision of Mentor</li>
            <li>Monitoring student progress through micro-assessment sheets</li>
            <li>Analysis of PYQ and identify patterns & themes</li>
            <li>Academic doubt resolving mentorship</li>
          </ol>
          <div className="price-container">
            <div className="price">₹ 3999</div>
            <div className="tax">+ 18% taxes</div>
          </div>
          <button className="buy-btn" onClick={() => window.location.href='https://hbzxwj.courses.store/614904'}>Buy Course</button>
        </div>

        <div className="course-box">
          <h3 className="course-title">CSAT Course 2025</h3>
          <ol className="course-list">
            <li>Live complete coverage of CSAT syllabus</li>
            <li>Handouts and practice sheets after every class</li>
            <li>Test series</li>
            <li>Mentorship</li>
            <li>Coverage of last 10 years PYQs</li>
          </ol>
          <div className="price-container">
            <div className="price">₹ 1999</div>
            <div className="tax">+ 18% taxes</div>
          </div>
          <button className="buy-btn" onClick={() => window.location.href='https://hbzxwj.courses.store/614936'}>Buy Course</button>
        </div>
      </div>
    </div>
  );
}

export default ComboCourse;