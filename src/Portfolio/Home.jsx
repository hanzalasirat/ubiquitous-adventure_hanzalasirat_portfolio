
// -------------------------------------------------------------------

import { Link } from 'react-router-dom';
import '../assets/style.home.css';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <body>
    <div className="home-container">
      {/* Geometric Background Patterns */}
      <div className="geometric-pattern"></div>
      <div className="circle-deco circle-1"></div>
      <div className="circle-deco circle-2"></div>
      <div className="circle-deco circle-3"></div>
      
      {/* Code Elements Floating */}
      <div className="code-element">{`< />`}</div>
      <div className="code-element">{`{ }`}</div>
      <div className="code-element">{`( )`}</div>
      <div className="code-element">{`=>`}</div>

      <div className="container">
        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Left Column - Text Content */}
          <div className="text-content">
            <div className="badge">
              
              <span>👋 Welcome to My Portfolio</span>
            </div>
            
            <h1 className="main-headline">
              Hanzala Sirat Portfolio <br />
              <span className="highlight"> Digital Reality</span>
            </h1>
            
            <p className="intro-text">
              I'm <strong>Hanzala Sirat</strong>, a passionate FullStack Developer 
              who crafts beautiful, functional web experiences. I bridge the gap 
              between design and technology to create solutions that users love.
            </p>

            {/* Tech Stack */}
            <div className="tech-stack">
              <span className="tech-label">Tech I Work With:</span>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OracleDB</span>
                <span className="tech-tag">CSS3</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <button 
                className="cta-btn primary"
                onClick={() => scrollToSection('./Projects.jsx')}
              > <Link className={`nav-link`}
                to="/projects"><span>View My Work</span></Link>
                <div className="btn-icon">→</div>
              </button>
              <button 
                className="cta-btn secondary"
                onClick={() => scrollToSection('/src/Portfolio/Skills.jsx')}
              >
                <Link className={`nav-link`}
                to="/skills"><span>My Skills</span></Link>
                <div className="btn-icon">⚡</div>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="visual-content">
            <div className="floating-card card-1">
              <div className="card-icon">💻</div>
              <h4 className='h4'>Frontend</h4>
              <p className='p'>React, HTML, CSS</p>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🔧</div>
              <h4 className='h4'>Backend</h4>
              <p className='p'>Node.js, Python</p>
            </div>
            <div className="floating-card card-4">
              <div className="card-icon">♻️</div>
              <h4 className='h4'>Card 4</h4>
              <p className='p'>Sql, Laravel</p>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">📱</div>
              <h4 className='h4'>Responsive</h4>
              <p className='p'>Mobile First</p>
            </div>
            <div className="main-visual">
              <div className="visual-placeholder">
                <div className="pulse-dot dot-1"></div>
                <div className="pulse-dot dot-2"></div>
                <div className="pulse-dot dot-3"></div>
                <div className="center-element">
                  <span>HS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat">
            <div className="stat-number">2+</div>
            <div className="stat-text">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">5+</div>
            <div className="stat-text">Projects Done</div>
          </div>
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-text">Happy Clients</div>
          </div>
          <div className="stat">
            <div className="stat-number">99%</div>
            <div className="stat-text">Satisfaction</div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          <p>Trusted by developers worldwide</p>
          <div className="social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
              >
              <div className="social-icon" style={{ background: 'transparent', padding: 0, width: '24px', height: '24px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                  width="24px"
                  height="24px"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </div>
            </a>

            {/* <a href="#" className="social-link">
              <div className="social-icon"></div>
              <span>W</span>
            </a> */}
            {/* <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <div className="social-icon">
                 
                    <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.6 0-75-33.4-75-75s33.4-75 75-75 75 33.4 75 75-33.4 75-75 75zm146.4-194.7c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.1-54.6-4.9-97.2-28.1-131.8-23.7-35.6-55-63.3-90.4-88.7-36.3-26.4-78.2-29.8-132.1-29.9-54.1 0-95.8 3.5-132.2 29.9-35.4 25.3-66.7 53-90.4 88.7C4.9 79.5.1 122.1 0 176.7v158.6c.1 54.6 4.9 97.2 28.1 131.8 23.7 35.6 55 63.3 90.4 88.7 36.3 26.4 78.2 29.8 132.1 29.9 54.1 0 95.8-3.5 132.2-29.9 35.4-25.3 66.7-53 90.4-88.7 23.2-34.6 28-77.2 28.1-131.8V176.7zM398.8 352c0 40.3-2.3 66-13.6 90.5-11.4 25.2-26.3 44.8-50.1 68.6s-43.4 38.7-68.6 50.1c-24.5 11.3-50.2 13.6-90.5 13.6s-66-2.3-90.5-13.6c-25.2-11.4-44.8-26.3-68.6-50.1s-38.7-43.4-50.1-68.6c-11.3-24.5-13.6-50.2-13.6-90.5s2.3-66 13.6-90.5c11.4-25.2 26.3-44.8 50.1-68.6s43.4-38.7 68.6-50.1c24.5-11.3 50.2-13.6 90.5-13.6s66 2.3 90.5 13.6c25.2 11.4 44.8 26.3 68.6 50.1s38.7 43.4 50.1 68.6c11.3 24.5 13.6 50.2 13.6 90.5z"/>
                 
                </div>
              </a> */}

{/* git hub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <div
              className="social-icon"
              style={{ background: 'transparent', padding: 0, width: '24px', height: '24px' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                fill="#181717"
                width="24px"
                height="24px"
              >
                <path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-2.9 0-5.2-1.7-5.2-3.7s2.3-3.7 5.2-3.7 5.2 1.7 5.2 3.7zm-32.3-4.8c-.7 1.6-2.9 2.1-4.7 1.2-1.9-.9-2.6-2.7-1.9-4.3.7-1.6 2.9-2.1 4.7-1.2 1.9.9 2.6 2.7 1.9 4.3zm44.8-1.1c-1.1 1.4-3.6 1-5.6-.9-2-1.9-2.4-4.3-1.3-5.7 1.1-1.4 3.6-1 5.6.9 2 1.9 2.4 4.3 1.3 5.7zM248 8C111 8 0 119 0 256c0 110.5 71.6 204.2 171 237.2 12.5 2.3 17.1-5.4 17.1-12v-43.4c-69.6 15.1-84.2-33.5-84.2-33.5-11.4-28.9-27.9-36.6-27.9-36.6-22.9-15.7 1.7-15.4 1.7-15.4 25.4 1.8 38.7 26 38.7 26 22.5 38.6 59 27.5 73.3 21 2.3-16.3 8.8-27.5 16-33.8-55.5-6.3-113.9-27.7-113.9-123.2 0-27.2 9.7-49.4 25.6-66.9-2.6-6.3-11.1-31.8 2.4-66.3 0 0 20.8-6.7 68.2 25.6a236 236 0 0 1 124 0c47.3-32.3 68.1-25.6 68.1-25.6 13.6 34.5 5 60 2.4 66.3 15.9 17.5 25.6 39.7 25.6 66.9 0 95.8-58.5 116.8-114.2 123 9 7.8 17 23.2 17 46.7v69.2c0 6.6 4.5 14.3 17.2 11.9C424.5 460.2 496 366.5 496 256 496 119 385 8 248 8z"/>
              </svg>
            </div>
          </a>

          </div>
          <br />
        </div>
      </div>
    </div>
    </body>
  );
}