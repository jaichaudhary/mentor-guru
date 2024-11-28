import React from "react";
import "./community-learning.css";

const CommunityAndLearning = () => {
  return (
    <div className="section-container">
      {/* Top Section: Community */}
      <div className="community-section">
        <div className="community-icons">
          {/* Replace with actual icons/images of people and decorative elements */}
          <img src="community.svg" alt="community" className="community-icon" />
          {/* Add more icons if needed */}
        </div>
        <h2>You are not alone in this journey</h2>
      
        <button
          onClick={() => {
            window.open("https://t.me/dipendradhikari", "_blank");
          }}
          className="join-community-button"
        >
          Join community
        </button>
      </div>

      {/* Bottom Section: Discover SuperKalam */}
      <div className="learning-section">
        <div className="learning-image">
          <img src="contact.svg" alt="Learning illustration" />
        </div>
        <div className="learning-content">
          <h2>
            Have a doubt?
          </h2>
          <p className="learning-content-para">
            Start your preparation for UPSC exam. Ask your first question now.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <img src="img/whatsapp.png" style={{ height: 20, width: 20 }} alt="WhatsApp icon" />
            <span>9205053891 / 7086551761</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityAndLearning;
