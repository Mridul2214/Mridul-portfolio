// Contact.jsx
import React from 'react';
import './Contact.css';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section-wrapper" id="contact">
      <div className="contact-container">
        <div className="contact-left-content">
          <h1 className="contact-title">Contact Me</h1>
          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-icon-wrapper">
                <svg className="detail-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <p className="detail-text">mridul1422@gmail.com</p>
            </div>
            <div className="detail-item">
              <div className="detail-icon-wrapper">
                <svg className="detail-icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3c0 .55-.45 1-1 1C12.95 21 3 11.05 3 4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"/></svg>
              </div>
              <p className="detail-text">+91 7356159878</p>
            </div>
            <div className="detail-item">
              <div className="detail-icon-wrapper">
                <svg className="detail-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <p className="detail-text">Thonikkad Ho, Kuzhalmannam, Palakkad, Kerala, 678702</p>
            </div>
          </div>

          {/* Social Icons */}
          <ul className="example-2">
            <li className="icon-content">
              <a href="mailto:mridul1422@gmail.com" aria-label="Email" data-social="email" target="_blank" rel="noopener noreferrer">
                <div className="filled"></div>
                <FaEnvelope size={24} />
              </a>
              <div className="tooltip">Email</div>
            </li>
            {/* <li className="icon-content">
              <a href="https://github.com/yourusername" aria-label="GitHub" data-social="github" target="_blank" rel="noopener noreferrer">
                <div className="filled"></div>
                <FaGithub size={24} />
              </a>
              <div className="tooltip">GitHub</div>
            </li> */}
            <li className="icon-content">
              <a href="https://www.instagram.com/_mridu_l__/" aria-label="Instagram" data-social="instagram" target="_blank" rel="noopener noreferrer">
                <div className="filled"></div>
                <FaInstagram size={24} />
              </a>
              <div className="tooltip">Instagram</div>
            </li>
            <li className="icon-content">
              <a href="https://www.linkedin.com/in/mridul-m-131011262" aria-label="LinkedIn" data-social="linkedin" target="_blank" rel="noopener noreferrer">
                <div className="filled"></div>
                <FaLinkedinIn size={24} />
              </a>
              <div className="tooltip">LinkedIn</div>
            </li>
            <li className="icon-content">
              <a href="https://wa.me/7356159878" aria-label="WhatsApp" data-social="whatsapp" target="_blank" rel="noopener noreferrer">
                <div className="filled"></div>
                <FaWhatsapp size={24} />
              </a>
              <div className="tooltip">WhatsApp</div>
            </li>
          </ul>
        </div>

        <div className="contact-right-illustration">
          <img
            src="/contact.png"
            alt="Contact Illustration"
            className="contact-illustration-image"
          />
        </div>
      </div>

      <div className="disclaimer-section">
        <p>Disclaimer: This website is a personal portfolio. All views and opinions expressed here are my own and do not represent any organization or entity.</p>
      </div>
    </div>
  );
};

export default Contact;
