import React, { useEffect, useState } from 'react';
import './User.css';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';


const imageUrl = '/Profile.jpg';
const resumePath = '/My Resume.pdf';

const User = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Mridul_M_Resume.pdf';
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

const toggleNav = () => {
  setIsNavOpen(!isNavOpen);
};


useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

 return (
  <>
    <nav className="navbar">
      <a href="#home" className="logo"></a>
      <div className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsNavOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsNavOpen(false)}>About</a></li>
        <li><a href="#resume" onClick={() => setIsNavOpen(false)}>Resume</a></li>
        <li><a href="#services" onClick={() => setIsNavOpen(false)}>Services</a></li>
        <li><a href="#skills" onClick={() => setIsNavOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a></li>
        <li><a href="#blog" onClick={() => setIsNavOpen(false)}>My Blog</a></li>
        <li><a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a></li>
      </ul>
      <div className={`menu-overlay ${isNavOpen ? 'active' : ''}`} onClick={() => setIsNavOpen(false)}></div>
    </nav>

    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hello">HELLO!</p>
          <h1>I'm <span className="name">Mridul</span></h1>
          <h2 className="title-underline">Full - Stack Developer</h2>
          
          <div className="buttons">
     <div className="button">
          <button className="btn-outline" onClick={handleDownload}>My resume</button>
        </div>          
          {/* <button className="btn-outline">MY WORKS</button> */}
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-img-container">
          <img src={imageUrl} alt="Profile" className="profile-img" />
        </div>
      </div>
    </div>
  </>
);
};

export default User;
        