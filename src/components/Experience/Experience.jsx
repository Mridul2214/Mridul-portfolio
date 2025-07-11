import React, { useState, useEffect, useRef } from 'react';
import './experience.css';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const experienceData = [
    {
      position: "Project Intern",
      company: "Softronic Palakkad",
      duration: "July 2024 - March 2025"
    },
    // {
    //   position: "Frontend Developer",
    //   company: "Tech Solutions Inc.",
    //   duration: "2023 - Present"
    // },
    // {
    //   position: "Web Development Intern",
    //   company: "Digital Creations",
    //   duration: "2022 - 2023"
    // }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleCards(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="experience-section-wrapper" id="experience" ref={sectionRef}>
      <div className="experience-container">
        <div className="experience-left-illustration">
          <img 
            src='image1.png' 
            alt="Experience illustration" 
            className="experience-illustration-image" 
          />
        </div>

        <div className="experience-right-content">
          <h1 className="experience-title">Experience</h1>
          
          <div className="experience-cards">
            {experienceData.map((exp, index) => (
              <div 
                className={`experience-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                key={index}
                ref={el => cardRefs.current[index] = el}
              >
                <div className="experience-icon-wrapper">
                  <svg className="experience-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/>
                  </svg>
                </div>
                <div className="experience-details">
                  <p className="experience-duration">{exp.duration}</p>
                  <h3 className="position">{exp.position}</h3>
                  <p className="company">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;