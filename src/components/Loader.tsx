import React, { useEffect, useRef, useState } from "react";
import "./loader.css";

const Loader: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    let start: number | null = null;
    const duration = 1800; // ms
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setPercent(Math.floor(progress * 100));
      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setPercent(100);
      }
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="loader-bg minimal-loader">
      <div className="loader-top-left">Portfolio is loading...</div>
      <div className="loader-bottom-right">{percent}%</div>
    </div>
  );
};

export default Loader;
