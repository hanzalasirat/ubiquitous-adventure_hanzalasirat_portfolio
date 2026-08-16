import { useState } from 'react';
import '../assets/style.contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-container">
      <div className="computer-box">
        <div className="circuit-line line1"></div>
        <div className="circuit-line line2"></div>
      <div className="circuit-line line3"></div>
      {/* <p className="content">Computer Systems & Animation</p> */}
    </div>
      {/* Background Elements */}
      <div className="contact-bg-shape shape-1"></div>
      <div className="contact-bg-shape shape-2"></div>
      <div className="contact-bg-shape shape-3"></div>
      
      <div className="container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">Let's Work Together</h1>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Me</h3>
              <p>hanzalasirat4@gmail.com</p>
              <a href="mailto:hanzala.sirat@email.com" className="info-link">
                Send Email →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Call Me</h3>
              <p>0703064689</p>
              <a href="tel:0703064689" className="info-link">
                Call Now →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>Let's connect professionally</p>
              <a href="#" className="info-link">
                Connect →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon"> <a
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
          </a></div>
              <h3>GitHub</h3>
              <p>Check out my projects</p>
              <a href="#" className="info-link">
                View Profile →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="success-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Send Me a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="contact-footer">
          <div className="availability">
            <div className="status-indicator">
              <div className="status-dot"></div>
              {/* <span>Currently available for new projects</span> */}
            </div>
            <p>Response time: Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}