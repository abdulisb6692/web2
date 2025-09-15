import React, { useState, useEffect, useRef } from "react";
import "../styles/about.scss";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  isVisible: boolean;
  precision?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = "", isVisible, precision = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(easeOutQuart * end);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    if (precision > 0) {
      return num.toFixed(precision);
    }
    return Math.floor(num).toString();
  };

  return <span>{formatNumber(count)}{suffix}</span>;
};

const About: React.FC = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Main section animation
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  return (
    <div 
      ref={elementRef}
      id="about-container" 
      className={`about-container section-container ${isVisible ? 'visible' : ''}`}
    >
      <div className={`about-header animate-fade ${isVisible ? 'animate-in' : ''}`}>
        <h2 className="about-section-title">About My Journey</h2>
      </div>
      
      <div className="about-content">
        <div className={`about-image animate-slide-left ${isVisible ? 'animate-in' : ''}`}>
          <img src="/2.png" alt="Abdul Mabood" />
          <div className="image-overlay">
            <div className="overlay-content">
              <h3>Abdul Mabood</h3>
              <p>Graphic & Meta Ads Designer</p>
            </div>
          </div>
        </div>
        <div className={`about-text-content animate-slide-right ${isVisible ? 'animate-in' : ''}`}>
          <h1 className="about-title">
            I'm <span className="highlight">Abdul Mabood </span>a Graphic & Meta Ads Designer working remotely with 
             <span className="company-highlight">3+ years</span> on
            of experience creating impactful visuals
          </h1>
          <div className="about-description">
            <p>
             My expertise is in designing eye-catching graphics, creating engaging ad creatives, and optimizing Meta Ads that help brands connect with their audience and achieve results.
            </p>
            <p>
              Working remotely, I’ve collaborated with diverse clients across industries, delivering designs that not only look great but also drive real conversions.
            </p>
            <p>
              Blending design and marketing to create impactful digital experiences.
            </p>
          </div>
        </div>
      </div>


      {/* Stats Section */}
      <div className={`stats-section animate-section ${isStatsVisible ? 'animate-in' : ''}`} ref={statsRef}>
        <div className="stats-card">
          <div className="stats-content">
            <div className="stats-left">
              <h2 className="stats-main-title">Let's build something great.</h2>
              <p className="stats-description">
                I helped brands boost engagement, reach wider audiences, and achieve measurable growth. By combining creativity with data driven insights, I deliver visuals that not only look great but also convert effectively.
              </p>
            </div>

            <div className="stats-right">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2" />
                      <path d="m21 12-6-3-6 3-6-3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="stat-number">
                    <Counter end={70} isVisible={isStatsVisible} suffix="%" />
                  </h3>
                  <p className="stat-label">Response rate</p>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="stat-number">
                    <Counter end={120} isVisible={isStatsVisible} suffix="+" />
                  </h3>
                  <p className="stat-label">Active Client's</p>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <polygon points="10,8 16,12 10,16" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="stat-number">
                    <Counter end={200} isVisible={isStatsVisible} suffix="+"  />
                  </h3>
                  <p className="stat-label">Project Deliver's</p>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="stat-number">
                    <Counter end={20} isVisible={isStatsVisible} suffix="+" />
                  </h3>
                  <p className="stat-label">Order's in Queue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;