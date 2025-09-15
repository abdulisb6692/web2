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
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://bsky.app" target="_blank" rel="noopener noreferrer">Bluesky</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
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
          <p className="copyright">© Copyright 2023 Abdul Mabood</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;