import React from "react";
import "./topstrip.css";

function TopStrip() {
  return (
    <div className="topstrip">
      Have a doubt? Get call back from team.
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdo9ll59vgBzjccHPlbHK_Ggdop0akf7_3-iqPIIZyUVVu3lQ/viewform?usp=sf_link" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="topstrip__button"
      >
        Click Here
      </a>
    </div>
  );
}

export default TopStrip;
