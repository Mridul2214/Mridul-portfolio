import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-bg" id="about">
      <div className="about-content">
        <h1 className="about-heading">About Me<span className="dot-orange"></span></h1>
        <p className="about-paragraph">
          Computer Science graduate specializing in MERN stack development (MongoDB, Express,
          React, Node.js). I build robust web applications with clean architecture and
          responsive interfaces. Passionate about problem-solving, clean code practices,
          and staying current with emerging web technologies. Committed to writing
          maintainable code that delivers exceptional user experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
