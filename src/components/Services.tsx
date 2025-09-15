import { useEffect, useState } from "react";
import "../styles/services.scss";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Main section animation
  const { isVisible: isMainVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const element = document.querySelector(".services-container");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef}
      id="services-text-container" 
      className={`services-container section-container ${isMainVisible ? 'visible' : ''} ${isVisible ? "visible" : ""}`}
    >
      <div className="services-wrapper">
        {/* Services Header */}
        <div className={`services-header animate-fade ${isMainVisible ? 'animate-in' : ''}`}>
          <h2 className="services-section-title">What I Offer</h2>
        </div>

        {/* Services Content */}
        <div className="services-content">
        <div className={`services-text animate-slide-up ${isMainVisible ? 'animate-in' : ''}`}>
          <h1 className="services-title">
            Crafting digital experiences that <span className="highlight">inspire  </span> and <span className="highlight">engage  </span>
          </h1>
          
        </div>

        {/* Services Grid */}
        <div className={`services-grid animate-stagger ${isMainVisible ? 'animate-in' : ''}`}>
          <div className="service-card stagger-item">
            <div className="card-header">
              <div className="card-label">Label</div>
              
              <h3>Brand Identity Design</h3>
              <p>Creating cohesive visual identities that capture your brand's essence and resonate with your target audience through strategic design.</p>
            </div>
            <a href="#" className="learn-more">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="service-card stagger-item">
            <div className="card-header">
              <div className="card-label">Label</div>
              <h3>Meta Ads</h3>
              <p>Design high converting Meta Ads that blend creativity with strategy to drive results.</p>
            </div>
            <a href="#" className="learn-more">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="service-card stagger-item">
            <div className="card-header">
              <div className="card-label">Label</div>
              <h3>Creative Direction</h3>
              <p>Providing strategic creative guidance to ensure your visual communications align with your business goals and objectives.</p>
            </div>
            <a href="#" className="learn-more">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="service-card stagger-item">
            <div className="card-header">
              <div className="card-label">Label</div>
              <h3>Digital Marketing</h3>
              <p>Creating compelling visual content for social media, campaigns, and digital marketing initiatives that drive engagement.</p>
            </div>
            <a href="#" className="learn-more">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
