import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import '../assets/style.nav.css';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  return (
    <div className="nav-wrapper">
      <div className="navbar">
        <div className="nav-container">
          {/* Logo/Brand */}
          <div className="nav-brand">
            <Link to="/" className="brand-link">
              <div className="brand-icon">⚡</div>
              <span className="brand-text">Hanzala Sirat</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <nav className="nav-links">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/skills" 
                className={`nav-link ${isActive('/skills') ? 'active' : ''}`}
              >
                Skills
              </Link>
              <Link 
                to="/projects" 
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              >
                Projects
              </Link>
            </nav>
            <Link 
              to="/contact" 
              className={`nav-contact-btn ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav-links">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/skills" 
              className={`mobile-nav-link ${isActive('/skills') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className={`mobile-nav-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link contact ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}