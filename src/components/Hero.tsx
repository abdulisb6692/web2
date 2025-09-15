import React from "react";
import "../styles/hero.scss";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Hero: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <section 
      ref={elementRef}
      className={`hero-section section-container ${isVisible ? 'visible' : ''}`}
    >
      <div className="hero-container">
        {/* Main Hero Content */}
        <div className="hero-main">
          <div className={`hero-left animate-slide-left ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">
              Make <span className="highlight">Designs</span> That<br />
              Engage, Delight, and Connect
            </h1>
            <p className="hero-subtitle">
              Hi, I'm Abdul Mabood! With more than 3+ years of experience,<br />
              I'm ready to be a part of your wonderful project!
            </p>
            <div className="hero-buttons">
              <a 
                href="mailto:abdulisb92@gmail.com?subject=Hire Request&body=Hi Abdul, I would like to discuss a project with you." 
                className="btn-primary"
              >
                Hire Me
              </a>
              <a 
                href="https://bento.me/adsbyabdul" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={`hero-right animate-slide-right ${isVisible ? 'animate-in' : ''}`}>
            <div className="hero-image-container">
              <div className="hero-image">
                <img 
                  src="/1.png" 
                  alt="Abdul Mabood" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=600&h=500&fit=crop&crop=face";
                  }}
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Abdul Mabood</h3>
                    <p>Graphic & Meta Ads Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
