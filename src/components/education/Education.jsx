import React, { useState, useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const educationData = [
    {
      degree: "Bachelor in Computer Science",
      institution: "Nethaji Memorial Arts and Science College, Nemmara",
      year: "2022 - 2025"
    },
    {
      degree: "Computer Science",
      institution: "B.E.M. HSS, Palakkad",
      year: "2020 - 2022"
    },
    {
      degree: "SSLC",
      institution: "CAHSS Kuzhalmannam",
      year: "2019 - 2020"
    }
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
    <div className="education-section-wrapper" id="education" ref={sectionRef}>
      <div className="education-container">
        <div className="education-left-content">
          <h1 className="education-title">Education</h1>
          <div className="education-cards">
            {educationData.map((edu, index) => (
              <div 
                className={`education-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                key={index}
                ref={el => cardRefs.current[index] = el}
              >
                <div className="education-icon-wrapper">
                  <svg className="education-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 11-6-11-6zm0 14.3v-6.6l9.6-5.2L12 3.7l-9.6 5.2L12 17.3zM22 10.3l-10 5.4-10-5.4M12 19.3l-5-2.7V11l5 2.7 5-2.7v5.6l-5 2.7z" />
                  </svg>
                </div>
                <div className="education-details-text">
                  <p className="education-year-small">{edu.year}</p>
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-right-illustration">
          <img
            src="image2.png"
            alt="Education Illustration"
            className="illustration-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x400/000000/FF7043?text=Illustration+Error";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;