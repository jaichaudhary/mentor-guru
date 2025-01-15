import React from "react";
import "./community-learning.css";
import FAQ from "../faq/faq";
import ContactForm from "../form/ContactForm";

const CommunityAndLearning = () => {
  return (
    <>
     <div className="section-container">
     
      <div className="community-section">
        <div className="community-icons">
         
          <img src="community.svg" alt="community" className="community-icon" />
          
        </div>
        <h2>You are not alone in this journey</h2>
      
        <button
          onClick={() => {
            window.open("https://t.me/+9AibgMTEC8I3YzBl", "_blank");
          }}
          className="join-community-button"
        >
          Join community
        </button>
      </div>

      
      <div className="learning-section">
        
        <ContactForm />
      </div>
    </div>

    <FAQ />
    </>
   
  );
};

export default CommunityAndLearning;
