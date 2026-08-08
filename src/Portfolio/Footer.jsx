import React from 'react';
import '../assets/style.footer.css';
import { Link } from 'react-router-dom';
import Home from './Home';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Background Elements */}
      <div className="footer-bg-shape shape-1"></div>
      <div className="footer-bg-shape shape-2"></div>
      <div className="footer-bg-shape shape-3"></div>
      
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Hanzala<span>Sirat</span></h3>
            <p className="footer-description">
              FullStack Developer passionate about creating digital experiences 
              that merge innovation with functionality. Let's build something amazing together.
            </p>
            <div className="footer-stats">
              <div className="footer-stat">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="footer-stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">

           
              <li><a href="/">Home</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="footer-tech">
            <h4 className="footer-title">Tech Stack</h4>
            <div className="tech-grid">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Python</span>
              <span className="tech-pill">MongoDB</span>
              <span className="tech-pill">CSS3</span>
              <span className="tech-pill">JavaScript</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧 </div>
                <span>hanzalasirat4@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <span>0703065689</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <span>Kabul, Afghanistan</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <div className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" width="24px" height="24px">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                  </div>
                </a>
                          <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <div className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#25D366" width="24" height="24">
                    <path d="M380.9 97.1C339-5.3 213-7.5 163.8 42.5L128 77c-50.1 50.1-50.1 132.1 0 182.3l24 24-30.7 12.8c-19.5 8.1-33.3-2.2-38.8-18.1l-12.8-30.7-24 24c-50.1 50.1-50.1 132.1 0 182.3l35 35c50.1 50.1 132.1 50.1 182.3 0l24-24c50.1-50.1 50.1-132.1 0-182.3l-7.5-7.5 7.5-7.5c50.1-50.1 50.1-132.1 0-182.3zM224 400c-88.2 0-160-71.8-160-160S135.8 80 224 80s160 71.8 160 160-71.8 160-160 160z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#0A66C2" width="24px" height="24px">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.28 107 0 82.74 0 53.74S24.28 0 53.84 0s53.84 24.28 53.84 53.74c0 29-24.28 53.26-53.84 53.26zM447.9 448h-92.68V302.4c0-34.7-12.42-58.3-43.5-58.3-23.72 0-37.88 15.96-44.1 31.38-2.28 5.56-2.85 13.28-2.85 21.06V448h-92.68s1.25-241.7 0-266.3h92.68v37.7c12.33-19 34.42-46.1 83.77-46.1 61.22 0 107.2 39.9 107.2 125.6V448z"/>
                </svg>
                </div>
              </a>
                              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="#181717" width="24px" height="24px">
                <path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-2.9 0-5.2-1.7-5.2-3.7s2.3-3.7 5.2-3.7 5.2 1.7 5.2 3.7zm-32.3-4.8c-.7 1.6-2.9 2.1-4.7 1.2-1.9-.9-2.6-2.7-1.9-4.3.7-1.6 2.9-2.1 4.7-1.2 1.9.9 2.6 2.7 1.9 4.3zm44.8-1.1c-1.1 1.4-3.6 1-5.6-.9-2-1.9-2.4-4.3-1.3-5.7 1.1-1.4 3.6-1 5.6.9 2 1.9 2.4 4.3 1.3 5.7zM248 8C111 8 0 119 0 256c0 110.5 71.6 204.2 171 237.2 12.5 2.3 17.1-5.4 17.1-12v-43.4c-69.6 15.1-84.2-33.5-84.2-33.5-11.4-28.9-27.9-36.6-27.9-36.6-22.9-15.7 1.7-15.4 1.7-15.4 25.4 1.8 38.7 26 38.7 26 22.5 38.6 59 27.5 73.3 21 2.3-16.3 8.8-27.5 16-33.8-55.5-6.3-113.9-27.7-113.9-123.2 0-27.2 9.7-49.4 25.6-66.9-2.6-6.3-11.1-31.8 2.4-66.3 0 0 20.8-6.7 68.2 25.6a236 236 0 0 1 124 0c47.3-32.3 68.1-25.6 68.1-25.6 13.6 34.5 5 60 2.4 66.3 15.9 17.5 25.6 39.7 25.6 66.9 0 95.8-58.5 116.8-114.2 123 9 7.8 17 23.2 17 46.7v69.2c0 6.6 4.5 14.3 17.2 11.9C424.5 460.2 496 366.5 496 256 496 119 385 8 248 8z"/>
                </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2024 <span>Hanzala Sirat</span>. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;