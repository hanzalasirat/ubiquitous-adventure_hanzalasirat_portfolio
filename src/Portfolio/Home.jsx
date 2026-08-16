import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../assets/style.home.css';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const orbRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Auto-rotation for the orb
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // 3D tilt effect
  const getTiltStyle = (intensity = 1) => {
    return {
      transform: `perspective(1200px) rotateX(${mousePosition.y * -8 * intensity}deg) rotateY(${mousePosition.x * 8 * intensity}deg)`,
      transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <div className="home-container" ref={containerRef}>
      {/* 3D Background Layers */}
      <div className="bg-layer layer-1"></div>
      <div className="bg-layer layer-2"></div>
      <div className="bg-layer layer-3"></div>
      
      {/* Neon Glow Effects */}
      <div className="neon-glow glow-purple"></div>
      <div className="neon-glow glow-blue"></div>
      <div className="neon-glow glow-pink"></div>
      <div className="neon-glow glow-cyan"></div>
      
      {/* Floating 3D Shapes */}
      <div className="shape shape-cube"></div>
      <div className="shape shape-pyramid"></div>
      <div className="shape shape-sphere"></div>
      <div className="shape shape-donut"></div>
      <div className="shape shape-star"></div>
      
      {/* Particle System */}
      <div className="particle-container">
        {[...Array(60)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="content-grid">
          {/* Left Column */}
          <div className="text-content animate-on-scroll">
            <div className="badge-container">
              <div className="badge-3d">
                <span className="badge-icon">👋</span>
                <span>Welcome to My Portfolio</span>
                <span className="badge-pulse"></span>
              </div>
            </div>
            
            <h1 className="main-headline">
              <span className="glitch-text" data-text="Hanzala Sirat Portfolio">
                Hanzala Sirat Portfolio
              </span>
              <br />
              <span className="highlight-3d">Digital Reality</span>
            </h1>
            
            <p className="intro-text">
              I'm <strong className="gradient-text">Hanzala Sirat</strong>, a passionate FullStack Developer 
              who crafts beautiful, functional web experiences. I bridge the gap 
              between design and technology to create solutions that users love.
            </p>

            <div className="tech-stack animate-on-scroll">
              <span className="tech-label">⚡ Tech Stack</span>
              <div className="tech-tags-3d">
                <span className="tech-tag-3d" style={{ '--delay': '0s' }}>
                  <span className="tech-icon">⚛️</span> React
                </span>
                <span className="tech-tag-3d" style={{ '--delay': '0.1s' }}>
                  <span className="tech-icon">🚀</span> Laravel
                </span>
                <span className="tech-tag-3d" style={{ '--delay': '0.2s' }}>
                  <span className="tech-icon">🐍</span> Python
                </span>
                <span className="tech-tag-3d" style={{ '--delay': '0.3s' }}>
                  <span className="tech-icon">🗄️</span> Mysql,PostG,MongoDB
                </span>
                <span className="tech-tag-3d" style={{ '--delay': '0.4s' }}>
                  <span className="tech-icon">🎨</span> CSS3
                </span>
              </div>
            </div>

            <div className="cta-buttons-3d">
              <Link to="/projects" className="cta-btn-3d primary">
                <span className="btn-text">View My Work</span>
                <span className="btn-icon-3d">🚀</span>
                <span className="btn-glow"></span>
              </Link>
              <Link to="/skills" className="cta-btn-3d secondary">
                <span className="btn-text">My Skills</span>
                <span className="btn-icon-3d">⚡</span>
                <span className="btn-glow"></span>
              </Link>
            </div>
          </div>

          {/* Right Column - Enhanced 3D Centerpiece */}
          <div className="visual-content-3d animate-on-scroll" style={getTiltStyle(0.5)}>
            <div className="scene-container">
              {/* 3D Galaxy Orb - Main Centerpiece */}
              <div className="galaxy-orb" ref={orbRef}>
                {/* Outer Rings */}
                <div className="galaxy-ring ring-outer"></div>
                <div className="galaxy-ring ring-mid"></div>
                <div className="galaxy-ring ring-inner"></div>
                
                {/* Particle Rings */}
                <div className="particle-ring ring-1">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className="particle-ring-dot"
                      style={{
                        '--angle': `${i * 15}deg`,
                        '--delay': `${i * 0.1}s`,
                        '--size': `${3 + Math.random() * 4}px`
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="particle-ring ring-2">
                  {[...Array(32)].map((_, i) => (
                    <div 
                      key={i} 
                      className="particle-ring-dot"
                      style={{
                        '--angle': `${i * 11.25}deg`,
                        '--delay': `${i * 0.08}s`,
                        '--size': `${2 + Math.random() * 3}px`
                      }}
                    ></div>
                  ))}
                </div>

                <div className="particle-ring ring-3">
                  {[...Array(40)].map((_, i) => (
                    <div 
                      key={i} 
                      className="particle-ring-dot"
                      style={{
                        '--angle': `${i * 9}deg`,
                        '--delay': `${i * 0.06}s`,
                        '--size': `${1.5 + Math.random() * 2.5}px`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Orbiting Planets */}
                <div className="orbiting-planet planet-1">
                  <div className="planet-body"></div>
                  <div className="planet-glow"></div>
                </div>
                <div className="orbiting-planet planet-2">
                  <div className="planet-body"></div>
                  <div className="planet-glow"></div>
                </div>
                <div className="orbiting-planet planet-3">
                  <div className="planet-body"></div>
                  <div className="planet-glow"></div>
                </div>
                <div className="orbiting-planet planet-4">
                  <div className="planet-body"></div>
                  <div className="planet-glow"></div>
                </div>

                {/* Core */}
                <div className="galaxy-core">
                  <div className="core-inner">
                    <span className="core-text">👾</span>
                  </div>
                  <div className="core-pulse"></div>
                  <div className="core-pulse-2"></div>
                </div>

                {/* Energy Beams */}
                <div className="energy-beam beam-1"></div>
                <div className="energy-beam beam-2"></div>
                <div className="energy-beam beam-3"></div>
                <div className="energy-beam beam-4"></div>

                {/* Floating Tech Icons */}
                {/* <div className="tech-icon-float icon-react">
                  <span>⚛️</span>
                </div>
                <div className="tech-icon-float icon-laravel">
                  <span>🚀</span>
                </div>
                <div className="tech-icon-float icon-python">
                  <span>🐍</span>
                </div>
                <div className="tech-icon-float icon-database">
                  <span>🎨</span>
                </div> */}

              </div>

              {/* Orbital Trail Effect */}
              <div className="orbital-trail"></div>
            </div>
          </div>
        </div>

        {/* 3D Stats */}
        <div className="stats-3d animate-on-scroll">
          <div className="stat-3d" style={getTiltStyle(0.2)}>
            <div className="stat-3d-icon">🏆</div>
            <div className="stat-3d-number" data-count="2">2+</div>
            <div className="stat-3d-text">Years Experience</div>
            <div className="stat-3d-bar"></div>
          </div>
          <div className="stat-3d" style={getTiltStyle(0.2)}>
            <div className="stat-3d-icon">📁</div>
            <div className="stat-3d-number" data-count="5">5+</div>
            <div className="stat-3d-text">Projects Done</div>
            <div className="stat-3d-bar"></div>
          </div>
          <div className="stat-3d" style={getTiltStyle(0.2)}>
            <div className="stat-3d-icon">😊</div>
            <div className="stat-3d-number" data-count="10">10+</div>
            <div className="stat-3d-text">Happy Clients</div>
            <div className="stat-3d-bar"></div>
          </div>
          <div className="stat-3d" style={getTiltStyle(0.2)}>
            <div className="stat-3d-icon">⭐</div>
            <div className="stat-3d-number" data-count="99">99%</div>
            <div className="stat-3d-text">Satisfaction</div>
            <div className="stat-3d-bar"></div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="social-proof-3d animate-on-scroll">
          <p>🌐 Trusted by developers worldwide</p>
          <div className="social-links-3d">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-3d facebook"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-3d github"
            >
              <svg viewBox="0 0 496 512" width="24" height="24">
                <path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-2.9 0-5.2-1.7-5.2-3.7s2.3-3.7 5.2-3.7 5.2 1.7 5.2 3.7zm-32.3-4.8c-.7 1.6-2.9 2.1-4.7 1.2-1.9-.9-2.6-2.7-1.9-4.3.7-1.6 2.9-2.1 4.7-1.2 1.9.9 2.6 2.7 1.9 4.3zm44.8-1.1c-1.1 1.4-3.6 1-5.6-.9-2-1.9-2.4-4.3-1.3-5.7 1.1-1.4 3.6-1 5.6.9 2 1.9 2.4 4.3 1.3 5.7zM248 8C111 8 0 119 0 256c0 110.5 71.6 204.2 171 237.2 12.5 2.3 17.1-5.4 17.1-12v-43.4c-69.6 15.1-84.2-33.5-84.2-33.5-11.4-28.9-27.9-36.6-27.9-36.6-22.9-15.7 1.7-15.4 1.7-15.4 25.4 1.8 38.7 26 38.7 26 22.5 38.6 59 27.5 73.3 21 2.3-16.3 8.8-27.5 16-33.8-55.5-6.3-113.9-27.7-113.9-123.2 0-27.2 9.7-49.4 25.6-66.9-2.6-6.3-11.1-31.8 2.4-66.3 0 0 20.8-6.7 68.2 25.6a236 236 0 0 1 124 0c47.3-32.3 68.1-25.6 68.1-25.6 13.6 34.5 5 60 2.4 66.3 15.9 17.5 25.6 39.7 25.6 66.9 0 95.8-58.5 116.8-114.2 123 9 7.8 17 23.2 17 46.7v69.2c0 6.6 4.5 14.3 17.2 11.9C424.5 460.2 496 366.5 496 256 496 119 385 8 248 8z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-3d linkedin"
            >
              <svg viewBox="0 0 448 512" width="24" height="24">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-3d twitter"
            >
              <svg viewBox="0 0 512 512" width="24" height="24">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
              </svg>
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}