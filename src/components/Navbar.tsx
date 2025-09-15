import React, { useEffect, useState } from "react";
import "../styles/navbabr.scss";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Function to handle scroll detection with throttling
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const shouldBeScrolled = scrollTop > 50;
    
    // Only update state if it actually changed
    if (shouldBeScrolled !== isScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  };

  // Throttle function for better performance
  const throttle = (func: Function, delay: number) => {
    let timeoutId: number;
    let lastExecTime = 0;
    return function (this: any, ...args: any[]) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abdul_Mabood_Resume.pdf';
    link.download = 'Abdul_Mabood_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle smooth scrolling to sections
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      // Try scrollIntoView with offset using scroll-margin-top in CSS
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      // Fallback for browsers that don't support scroll-margin-top
      // setTimeout(() => {
      //   const yOffset = -80;
      //   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      //   window.scrollTo({ top: y, behavior: 'smooth' });
      // }, 100);
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };



  useEffect(() => {
    checkIsMobile();

    const throttledScrollHandler = throttle(handleScroll, 16); // ~60fps

    window.addEventListener("resize", checkIsMobile);
    window.addEventListener("scroll", throttledScrollHandler as EventListener, { passive: true });

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("scroll", throttledScrollHandler as EventListener);
    };
  }, [isScrolled]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo Section */}
      <div className="logo-subtitle">
        <div className="logo">
          <h1>Abdul Mabood</h1>
        </div>

        <p className="subtitle">Graphic & Meta Ads Designer</p>
      </div>

      {/* Menu Section */}
      {isMobile ? (
        <div className="mobile-menu">
          {/* Mobile Menu */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99999 9.99999L7.50001 7.50001M7.50001 7.50001L5 5M7.50001 7.50001L10 5M7.50001 7.50001L5 10"
                  stroke="#686868"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17H19M5 12H19M5 7H19"
                  stroke="#686868"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && (
            <ul className="mobile-menu-list">
              <li><button className="nav-button" onClick={() => handleSmoothScroll('about-container')}>About</button></li>
              <li><button className="nav-button" onClick={() => handleSmoothScroll('work-container')}>Work</button></li>
              <li><button className="nav-button" onClick={() => handleSmoothScroll('services-text-container')}>Services</button></li>
              <li><button className="nav-button" onClick={() => handleSmoothScroll('contact-container')}>Contact</button></li>
              <li className="it resume-button" onClick={handleResumeDownload}>
                <span>Résumé</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="download-icon"
                >
                  <path 
                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <ul className="desktop-menu">
          {/* Desktop Menu */}
          <li><button className="nav-button" onClick={() => handleSmoothScroll('about-container')}>About</button></li>
          <li><button className="nav-button" onClick={() => handleSmoothScroll('work-container')}>Work</button></li>
          <li><button className="nav-button" onClick={() => handleSmoothScroll('services-text-container')}>Services</button></li>
          <li><button className="nav-button" onClick={() => handleSmoothScroll('contact-container')}>Contact</button></li>
          <li className="it resume-button" onClick={handleResumeDownload}>
            <span>Résumé</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="download-icon"
            >
              <path 
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
