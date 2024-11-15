import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__heading">Crack UPSC</div>
      <div className="home__sub__heading">with your Personal Mentor</div>
      <div className="home__text">
        Learning ecosystem for focused & disciplined preparation
      </div>

      <div className="home__buttom">Start Now — it's FREE</div>

      <img src="courses.svg" className="home__img" />
    </div>
  );
}
