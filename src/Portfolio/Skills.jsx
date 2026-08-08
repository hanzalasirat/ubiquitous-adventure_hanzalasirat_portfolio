import { Link } from 'react-router-dom';
import '../assets/style.skills.css';

export default function Skills() {
  return (
    <div className="skills-container">
      {/* Floating Background Elements */}
      <div className="geometric-pattern"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      <div className="container">
        <h2 className="skills-main-title">My Skills & Technologies</h2>
        
        <div className="box-skills">
          
          {/* Programming Languages Section */}
          <div className="skills-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-grid">
              
              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">🐍</legend>
                  <div className="skill-icon">🐍</div>
                  <h1 className="skill-card__title">Python Development</h1>
                  <p className="skill-card__intro">
                    Full-stack Python development with modern frameworks and tools
                  </p>
                
                  {/* <ul className="skill-card__list">
                    <li>Django & Flask Web Frameworks</li>
                    <li>RESTful APIs & FastAPI</li>
                    <li>Data Analysis with Pandas & NumPy</li>
                    <li>Automation & Scripting</li>
                    <li>Object-Oriented Programming</li>
                    <li>Database Integration</li>
                  </ul> */}
                  <button className='more-btn-skill'
                  ><Link to="/python" >More</Link></button>
                </fieldset>
              </div>

              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">⚡</legend>
                  <div className="skill-icon">⚡</div>
                  <h1 className="skill-card__title">JavaScript</h1>
                  <p className="skill-card__intro">
                    Modern JavaScript development for dynamic web applications
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>ES6+ Modern Syntax</li>
                    <li>Async/Await & Promises</li>
                    <li>DOM Manipulation</li>
                    <li>Event Handling</li>
                    <li>API Integration</li>
                    <li>Performance Optimization</li>
                  </ul> */}
                  <button className='more-btn-skill'
                  ><Link to="/javascript" >More</Link></button>
                </fieldset>
              </div>
              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">📑</legend>
                  <div className="skill-icon">⚡</div>
                  <h1 className="skill-card__title">PHP</h1>
                  <p className="skill-card__intro"> 
                    Modern php development for dynamic web applications
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>ES6+ Modern Syntax</li>
                    <li>Async/Await & Promises</li>
                    <li>DOM Manipulation</li>
                    <li>Event Handling</li>
                    <li>API Integration</li>
                    <li>Performance Optimization</li>
                  </ul> */}
                   <button className='more-btn-skill'
                  ><Link to="/php" >More</Link></button>
                </fieldset>
              </div>

            </div>
          </div>

          {/* Frontend Technologies Section */}
          <div className="skills-category">
            <h3 className="category-title">Frontend Technologies</h3>
            <div className="skills-grid">
              
              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">⚛️</legend>
                  <div className="skill-icon">⚛️</div>
                  <h1 className="skill-card__title">React.js</h1>
                  <p className="skill-card__intro">
                    Building modern, responsive user interfaces with React
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>Components & Props</li>
                    <li>Hooks (useState, useEffect)</li>
                    <li>Context API & State Management</li>
                    <li>React Router</li>
                    <li>Custom Hooks</li>
                    <li>Performance Optimization</li>
                  </ul> */}
                  <button className='more-btn-skill'
                  ><Link to="/react" >More</Link></button>
                </fieldset>
              </div>

              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">🌐</legend>
                  <div className="skill-icon">🌐</div>
                  <h1 className="skill-card__title">HTML5</h1>
                  <p className="skill-card__intro">
                    Semantic markup and modern HTML features
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>Semantic HTML5 Elements</li>
                    <li>Forms & Validation</li>
                    <li>Accessibility (ARIA)</li>
                    <li>SEO Best Practices</li>
                    <li>Cross-browser Compatibility</li>
                    <li>Web Standards</li>
                  </ul> */}
                 <button className='more-btn-skill'
                  ><Link to="/html" >More</Link></button>
                </fieldset>
                 
              </div>

              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">🎨</legend>
                  <div className="skill-icon">🎨</div>
                  <h1 className="skill-card__title">CSS3 & Styling</h1>
                  <p className="skill-card__intro">
                    Creating beautiful Pagse and cards, responsive designs
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>Flexbox & Grid Layout</li>
                    <li>CSS Animations & Transitions</li>
                    <li>Responsive Design</li>
                    <li>SASS/SCSS Preprocessors</li>
                    <li>CSS Modules & Styled Components</li>
                    <li>Modern CSS Features</li>
                  </ul> */}

                 <button className='more-btn-skill'
                  ><Link to="/css" >More</Link></button>

                </fieldset>
              </div>

            </div>
          </div>

          {/* Database Technologies Section */}
          <div className="skills-category">
            <h3 className="category-title">Database Technologies</h3>
            <div className="skills-grid">
              
              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">🗃️</legend>
                  <div className="skill-icon">🗃️</div>
                  <h1 className="skill-card__title">Oracle Database</h1>
                  <p className="skill-card__intro">
                    Enterprise database management and development
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>SQL & PL/SQL Programming</li>
                    <li>Database Design & Normalization</li>
                    <li>Stored Procedures & Functions</li>
                    <li>Performance Tuning</li>
                    <li>Backup & Recovery</li>
                    <li>Security Management</li>
                  </ul> */}
                  <button className='more-btn-skill'
                  ><Link to="/oracle" >More</Link></button>
                </fieldset>
              </div>

              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">🐬</legend>
                  <div className="skill-icon">🐬</div>
                  <h1 className="skill-card__title">MySQL</h1>
                  <p className="skill-card__intro">
                    Open-source relational database management
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>Database Design & Modeling</li>
                    <li>Query Optimization</li>
                    <li>Indexing Strategies</li>
                    <li>Transaction Management</li>
                    <li>User Management & Security</li>
                    <li>Replication & Clustering</li>
                  </ul> */}
                  <button className='more-btn-skill'
                  ><Link to="/mysql" >More</Link></button>
                </fieldset>
              </div>

              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">🐘</legend>
                  <div className="skill-icon">🐘</div>
                  <h1 className="skill-card__title">PostgreSQL</h1>
                  <p className="skill-card__intro">
                    Advanced open-source object-relational database
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>Advanced SQL Features</li>
                    <li>JSON & JSONB Support</li>
                    <li>Stored Procedures & Functions</li>
                    <li>Full-Text Search</li>
                    <li>Partitioning</li>
                    <li>Extensions & Custom Types</li>
                  </ul> */}
                  <button className='more-btn-skill'
                  ><Link to="/postgre" >More</Link></button>
                </fieldset>
              </div>

            </div>
          </div>

          {/* Tools & Other Skills Section */}
          <div className="skills-category">
            <h3 className="category-title">Tools & Other Skills</h3>
            <div className="skills-grid">
              
              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">📚</legend>
                  <div className="skill-icon">📚</div>
                  <h1 className="skill-card__title">Git & GitHub</h1>
                  <p className="skill-card__intro">
                    Version control and collaborative development
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>Repository Management</li>
                    <li>Branching & Merging</li>
                    <li>Pull Requests & Code Review</li>
                    <li>GitHub Actions CI/CD</li>
                    <li>Collaborative Workflows</li>
                    <li>Open Source Contribution</li>
                  </ul> */}
                 <button className='more-btn-skill'
                  ><Link to="/python" >More</Link></button>
                </fieldset>
              </div>

              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">🌐</legend>
                  <div className="skill-icon">🌐</div>
                  <h1 className="skill-card__title">Networking</h1>
                  <p className="skill-card__intro">
                    Network fundamentals and web technologies
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>TCP/IP Protocols</li>
                    <li>HTTP/HTTPS & REST APIs</li>
                    <li>DNS & Domain Management</li>
                    <li>Security & SSL/TLS</li>
                    <li>Web Servers Configuration</li>
                    <li>Network Troubleshooting</li>
                  </ul> */}
                  <br />
                  <button className='more-btn-skill'
                  ><Link to="/python" >More</Link></button>

                </fieldset>
              </div>

              <div className="skill-item">
                <fieldset className="skill-card">
                  <legend className="skill-legend">💻</legend>
                  <div className="skill-icon">💻</div>
                  <h1 className="skill-card__title">ICDL & Computer Skills</h1>
                  <p className="skill-card__intro">
                    Comprehensive computer literacy and office skills
                  </p>
                  {/* <ul className="skill-card__list">
                    <li>Microsoft Office Suite</li>
                    <li>Computer Hardware Basics</li>
                    <li>Operating Systems</li>
                    <li>File Management</li>
                    <li>Internet & Email</li>
                    <li>IT Security Fundamentals</li>
                  </ul> */}

                  <button className='more-btn-skill'
                  ><Link to="/python" >More</Link></button>

                </fieldset>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}