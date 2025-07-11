import React, { useState, useEffect, useRef } from 'react';
import './Project.css';

const ProjectCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "Blood Donor🩸",
      description: "🩸 BloodConnect is a fast, accessible platform connecting blood donors with recipients. Users can register, request blood, and find nearby blood banks. With real-time updates and verified profiles, it ensures quick, reliable responses in emergencies—bringing communities together to save lives.",
      tech: ["React", "nodejs", "expressjs", "MongoDb"],
      imageUrl: "bd.png"
    },
    {
      title: "E-learn📚",
      description: "📚 E-Learn Android Java Project is a streamlined e-learning platform for colleges, featuring three modules: Principal, Faculty, and Student. Principals manage registrations and approvals, faculty share materials and host live classes, and students access resources and interact with instructors. The system centralizes academic tasks, enhances communication, and improves educational efficiency through a secure and user-friendly interface.",
      tech: ["Java", "PHP", "MySQL"],
      imageUrl: "el.png"
    },
    {
      title: "Bridge Connect🤝",
      description: "🧠 AI-Enhanced Social Blogging Platform combines social media and blogging features with an AI-powered video summarizer. Users can post updates, write blogs, and interact through likes and comments. The standout feature is the AI tool that creates quick video summaries and transcripts, making content like tutorials and vlogs easier to digest and more engaging.",
      tech: ["React", "nodejs", "expressjs", "MongoDb"],
      imageUrl: "youtube.png"
    }
  ];

  useEffect(() => {
    const observers = [];
    
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setVisibleCards(prev => [...prev, index]);
                observer.unobserve(ref);
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="project-section" id='projects' ref={sectionRef}>
      <h1 className='project-section-heading'>Projects</h1>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className={`project-item ${visibleCards.includes(index) ? 'visible' : ''}`}
            key={index}
            ref={el => projectRefs.current[index] = el}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="project-image-container">
              <div className="image-wrapper">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="project-item-image"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400?text=Image+Not+Found";
                  }}
                />
              </div>
              <h3 className="project-item-title">{project.title}</h3>
            </div>
            
            <div className={`project-details-overlay ${hoveredIndex === index ? 'active' : ''}`}>
              <div className="project-details-content">
                <p className="project-item-description">{project.description}</p>
                <div className="tech-stack-section">
                  <h4>TECH STACK</h4>
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
