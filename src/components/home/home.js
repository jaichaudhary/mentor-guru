import React, { useState, useEffect } from "react";
import "./home.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const banners = [
    { src: "img/banner1.jpg", alt: "UPSC Banner 1" },
    { src: "img/banner2.svg", alt: "UPSC Banner 2" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const handleImageClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="home__heading">Clear UPSC</div>
      <span>With</span>
      <div className="home__sub__heading">Personalised Mentorship</div>

      {/* Updated Features Section */}
      <div className="home__features">
        <div className="feature">
          <span>Trusted Mentor</span>
          <div className="feature__underline"></div>
        </div>

        <div className="feature">
          <span>Affordable Courses</span>
          <div className="feature__underline"></div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="slider">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.src}
            alt={banner.alt}
            className={`home__img ${index === currentSlide ? "active" : ""}`}
            onClick={handleImageClick}
          />
        ))}
        <div className="slider-controls">
          <button
            className="slider-button prev"
            onClick={() =>
              setCurrentSlide(
                (currentSlide - 1 + banners.length) % banners.length
              )
            }
          >
            &#10094;
          </button>
          <button className="slider-button next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Overlay Section */}
      {showOverlay && (
        <div className="overlay" onClick={handleCloseOverlay}>
          <div className="overlay__content" onClick={(e) => e.stopPropagation()}>
            <p>Please login to watch sessions</p>
            <button className="overlay__login-button" 
  onClick={() => window.location.href = 'https://hbzxwj.courses.store/617877'}>
  Login
</button>

          </div>
        </div>
      )}
    </div>
  );
}
