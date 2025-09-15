import React from 'react';
import '../styles/contact.scss';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <section 
      ref={elementRef}
      id="contact-container"
      className={`contact-section section-container ${isVisible ? 'visible' : ''}`}
    >
      <div className="contact-container">
        <div className="contact-content">
          <div className={`contact-header animate-fade ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="contact-title">
              Need a <span className="highlight">design</span>?
            </h1>
            <p className="contact-description">
              Every project is one-of-a-kind and deserves a personalized approach.
              Let's take the time to discuss your goals and vision, and together,
              we'll find the best solutions to bring your idea to life.
            </p>
          </div>
          
          <div className={`contact-actions animate-slide-up ${isVisible ? 'animate-in' : ''}`}>
            <a
              className="contact-btn"
              href="https://bento.me/adsbyabdul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Get In Touch</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;