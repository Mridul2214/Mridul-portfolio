import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Mridul M. All rights reserved.</p>
    </footer>
  );
};

export default Footer
