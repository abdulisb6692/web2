import "../styles/work.scss";
import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Work: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState(false);

  // Main section animation
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.w-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, [showMore]); // Re-run when showMore changes to observe new cards

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      image: "/design1.jpg",
      description: "Complete brand identity system with logo, colors, and typography",
      tags: ["Brand Guidelines", "Typography"]
    },
    {
      id: 2,
      title: "Blueberry Energy Drink",
      category: "Product Design",
      image: "/design2.jpg",
      description: "Refreshing blueberry-flavored energy drink with a modern and vibrant packaging design.",
      tags: ["Energy Drink", "Packaging", "Blueberry", "Product Design"]
    },
    {
      id: 3,
      title: "Smart Watch Pro",
      category: "Product Design",
      image: "/design3.jpg",
      description: "Modern smartwatch with SpO2 monitoring, water resistance, and stylish design for everyday use.",
      tags: ["Smart Device", "Wearable Tech", "Product Design"]
    },

    {
      id: 4,
      title: "Zipp Sneakers",
      category: "Product Design",
      image: "/design4.jpg",
      description: "Trendy and comfortable sneakers designed for effortless movement, now available at 50% off.",
      tags: ["Sneakers", "Product Design", "Sportswear"]
    }
  ];

  const additionalProjects = [
    {
      id: 5,
      title: "Land Rover Defender 90",
      category: "Automotive",
      image: "/design5.jpg",
      description: "A high-performance Land Rover Defender 90 with a supercharged V8 engine, capable of reaching 100 km/h in just 5.2 seconds.",
      tags: ["SUV", "Off-road", "Land Rover"]
    },
    {
      id: 6,
      title: "Love is in the Air Hoodie",
      category: "Apparel",
      image: "/design6.jpg",
      description: "A stylish and cozy hoodie with an expressive 'Love Is In The Air' graphic on the back, offering ultimate comfort and versatile wear",
      tags: ["Hoodie",  "Graphic Print", "Unisex"]
    },
    {
      id: 7,
      title: "The GOAT - Lionel Messi",
      category: "Sports",
      image: "/design7.jpg",
      description: "An artistic tribute to Lionel Messi, featuring the football legend in his iconic pink jersey, celebrating his status as 'The GOAT'",
      tags: ["Football","Lionel Messi","Sports Design"]
    },
    {
      id: 8,
      title: "Porsche GT3 RS",
      category: "Automotive",
      image: "/design8.jpg",
      description: "The Porsche GT3 RS, a high-performance sports car with 525 HP, a top speed of 296 km/h, and an acceleration of 0-100 km/h in 3.2 seconds",
      tags: ["Sports Car", "Porsche", "GT3 RS",]
    }
  ];

  const allProjects = showMore ? [...projects, ...additionalProjects] : projects;

  return (
    <div ref={elementRef} id="work-container" className={`section-container ${isVisible ? 'visible' : ''}`}>
      <div className={`work-header-content animate-fade ${isVisible ? 'animate-in' : ''}`}>
        {/* Work Header */}
        <div className="work-header">
          <h2 className="work-section-title">Portfolio</h2>
        </div>

        <h1 className="work-text">
          The Designs I've Crafted
        </h1>
        <p className="work-description">
          Explore the designs I've had the pleasure of creating, where
          collaboration and expertise came together to bring my clients' ideas
          to life. Dive into these projects and get inspired by the innovative,
          custom solutions tailored to each unique vision.
        </p>
      </div>

      <div className={`work-cards animate-stagger ${isVisible ? 'animate-in' : ''}`} ref={cardsRef}>
        {allProjects.map((project, index) => (
          <div key={project.id} className={`w-card card-${(index % 4) + 1} stagger-item ${index >= 4 ? 'additional-card' : ''}`}>
            <div className="card-content">
              <div className="card-header">
                <span className="project-category">{project.category}</span>
                <div className="project-number">0{project.id}</div>
              </div>

              <div className="image-container">
                <div className="image">
                  <img
                    src={project.image}
                    loading="lazy"
                    alt={`${project.title} Design Illustration`}
                  />
                  <div className="image-overlay">
                    <button className="view-project-btn">
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-info">
                <div className="card-title">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more-section">
        <button
          className={`show-more-btn ${showMore ? 'show-less' : ''}`}
          onClick={handleShowMore}
        >
          <span>{showMore ? 'Show Less Projects' : 'Show More Projects'}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className={`arrow-icon ${showMore ? 'rotated' : ''}`}
          >
            <path
              d="M19 14L12 21L5 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default Work;