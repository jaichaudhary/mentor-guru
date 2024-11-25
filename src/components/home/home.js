import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__heading">Clear UPSC</div>
      <span>With</span>
      <div className="home__sub__heading">Personalised Mentorship</div>

      {/* Updated Section */}
      <div className="home__features">
        <div className="feature">
          <span>Credible Faculty</span>
          <div className="feature__underline"></div>
        </div>
        
        <div className="feature">
          <span>Affordable Courses</span>
          <div className="feature__underline"></div>
        </div>
      </div>

      {/* <div className="home__buttom">Start Now — it's FREE</div> */}
      <img src="img/banner.png" className="home__img" alt="Banner" />
    </div>
  );
}
