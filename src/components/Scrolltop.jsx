import React, { useState, useEffect } from 'react';
import './Scrolltop.css'; 

const Scrolltop= () => {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

return (
  <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
    <button onClick={scrollToTop} className="scroll-button" aria-label="Scroll to top">
      ↑
    </button>
  </div>
);
};

export default Scrolltop;