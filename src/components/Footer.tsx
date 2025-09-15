import "../styles/footer.scss";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Footer: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      ref={elementRef}
      className={`footer-container section-container ${isVisible ? 'visible' : ''}`}
    >
      <div className={`footer-content animate-fade ${isVisible ? 'animate-in' : ''}`}>
        {/* Left section with social links */}
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-icon">
              <div className="icon-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
          </div>
          <div className="social-links">
            <p className="follow-text">Follow us</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/absbyabdul" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/adsbyabdul" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/adsbyabdul_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.behance.net/adsbyabdul" target="_blank" rel="noopener noreferrer">Behance</a></li>
              <li><a href="https://www.pinterest.com/adsbyabdul/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
              <li><a href="https://www.facebook.com/adsbyabdul/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.threads.com/@adsbyabdul_" target="_blank" rel="noopener noreferrer">Threads</a></li>
              <li><a href="https://bsky.app/profile/absbyabdul.bsky.social" target="_blank" rel="noopener noreferrer">Bluesky</a></li>
            </ul>
          </div>
        </div>

        {/* Right section with decorative text */}
        <div className="footer-right">
          <div className="brand-text">Abdul Mabood</div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <button className="back-to-top" onClick={handleBackToTop}>
            Back to top ↑
          </button>
          <p className="copyright">© Copyright 2025 Abdul Mabood</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
