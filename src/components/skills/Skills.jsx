import React, { useState, useEffect, useRef } from 'react';
import './Skills.css'
const SkillsStack = () => {

  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];

  // Duplicate skills for seamless looping effect
  const loopedSkills = [...skills, ...skills];

  // Function to start the auto-scrolling
  const startAutoScroll = () => {
    if (scrollContainerRef.current) {
      // Clear any existing interval to prevent multiple intervals running
      clearInterval(scrollIntervalRef.current);

      scrollIntervalRef.current = setInterval(() => {
        const container = scrollContainerRef.current;
        if (container) {
          // Scroll by a small amount
          container.scrollLeft += 1;

          // If scrolled past the first half, reset to the beginning of the second half
          // This creates the seamless loop
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
      }, 20); // Adjust interval for speed (lower is faster)
    }
  };

  // Function to stop the auto-scrolling
  const stopAutoScroll = () => {
    clearInterval(scrollIntervalRef.current);
  };

  // Function to scroll left manually
  const scrollLeft = () => {
    stopAutoScroll(); // Stop auto-scroll temporarily
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Scroll by card width + gap approximately
        behavior: 'smooth'
      });
    }
    // Resume auto-scroll after a short delay
    setTimeout(startAutoScroll, 3000); // Resume after 3 seconds
  };

  // Function to scroll right manually
  const scrollRight = () => {
    stopAutoScroll(); // Stop auto-scroll temporarily
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Scroll by card width + gap approximately
        behavior: 'smooth'
      });
    }
    // Resume auto-scroll after a short delay
    setTimeout(startAutoScroll, 3000); // Resume after 3 seconds
  };

  // Effect hook for auto-scrolling and cleanup
  useEffect(() => {
    startAutoScroll(); // Start auto-scroll on component mount

    // Add keyboard event listener for arrow keys
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        scrollLeft();
      } else if (event.key === 'ArrowRight') {
        scrollRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function: clear interval and remove event listener on unmount
    return () => {
      stopAutoScroll();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <section className="skills-scroll-section" id="skills">
      <div className="skills-header">
        <h2 className="section-title">Skills</h2> {/* Title as in screenshot */}
      </div>

      <div className="skills-scroll-wrapper"> {/* New wrapper for scroll container and arrows */}
        <button className="scroll-arrow scroll-arrow-left" onClick={scrollLeft}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill="currentColor"/>
          </svg>
        </button>

        <div className="skills-scroll-container" ref={scrollContainerRef}>
          <div className="skills-scroll-content">
            {/* Render the duplicated skills list for seamless looping */}
            {loopedSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/60x60/FFFFFF/000000?text=${skill.name.substring(0,2)}`; }}
                />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <button className="scroll-arrow scroll-arrow-right" onClick={scrollRight}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SkillsStack;
