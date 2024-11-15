import React from "react";
import "./community-learning.css";

const CommunityAndLearning = () => {
  return (
    <div className="section-container">
      {/* Top Section: Community */}
      <div className="community-section">
        <div className="community-icons">
          {/* Replace with actual icons/images of people and decorative elements */}
          <img
            src="community.svg"
            alt="community"
            className="community-icon"
          />
          {/* Add more icons if needed */}
        </div>
        <h2>You are not alone in this journey</h2>
        <p className="learning-content-para">
          Meet 30,000+ aspirants and access handwritten notes, mind-maps, and
          practice with Daily Targets
        </p>
        <button className="join-community-button">Join community</button>
      </div>

      {/* Bottom Section: Discover SuperKalam */}
      <div className="learning-section">
        <div className="learning-image">
          {/* Replace with actual image URL */}
          <img
            src="tutorial.svg"
            alt="Learning illustration"
          />
        </div>
        <div className="learning-content">
          <h2>
            Discover your learning potential with{" "}
            <span className="mentorguru-highlight">Mentor Guru</span>
          </h2>
          <p className="learning-content-para">
            Start your preparation for UPSC exam. Ask your first question now.
          </p>
          <button className="start-now-button">Start Now — it's FREE</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityAndLearning;
