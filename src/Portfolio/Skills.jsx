import { Link } from 'react-router-dom';
import '../assets/style.skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "💻 Programming Languages",
      icon: "💻",
      skills: [
        {
          id: 'python',
          icon: '🐍',
          title: 'Python Development',
          desc: 'Full-stack Python development with modern frameworks and tools',
          path: '/python',
          color: '#4B8BBE'
        },
        {
          id: 'javascript',
          icon: '⚡',
          title: 'JavaScript',
          desc: 'Modern JavaScript development for dynamic web applications',
          path: '/javascript',
          color: '#F7DF1E'
        },
        {
          id: 'php',
          icon: '📑',
          title: 'PHP',
          desc: 'Modern PHP development for dynamic web applications',
          path: '/php',
          color: '#777BB4'
        }
      ]
    },
    {
      title: "⚙️ Backend Technologies",
      icon: "⚙️",
      skills: [
        {
          id: 'laravel',
          icon: '🚀',
          title: 'Laravel',
          desc: 'Elegant PHP framework for web artisans',
          path: '/laravel',
          color: '#FF2D20'
        },
        {
          id: 'nodejs',
          icon: '🟢',
          title: 'Node.js',
          desc: 'JavaScript runtime for scalable server-side applications',
          path: '/nodejs',
          color: '#339933'
        }
      ]
    },
    {
      title: "🎨 Frontend Technologies",
      icon: "🎨",
      skills: [
        {
          id: 'react',
          icon: '⚛️',
          title: 'React.js',
          desc: 'Building modern, responsive user interfaces with React',
          path: '/react',
          color: '#61DAFB'
        },
        {
          id: 'html',
          icon: '🌐',
          title: 'HTML5',
          desc: 'Semantic markup and modern HTML features',
          path: '/html',
          color: '#E34F26'
        },
        {
          id: 'css',
          icon: '🎨',
          title: 'CSS3 & Styling',
          desc: 'Creating beautiful responsive designs with modern CSS',
          path: '/css',
          color: '#1572B6'
        }
      ]
    },
    {
      title: "🗄️ Database Technologies",
      icon: "🗄️",
      skills: [
        {
          id: 'oracle',
          icon: '🗃️',
          title: 'Oracle Database',
          desc: 'Enterprise database management and development',
          path: '/oracle',
          color: '#F80000'
        },
        {
          id: 'mysql',
          icon: '🐬',
          title: 'MySQL',
          desc: 'Open-source relational database management',
          path: '/mysql',
          color: '#4479A1'
        },
        {
          id: 'postgresql',
          icon: '🐘',
          title: 'PostgreSQL',
          desc: 'Advanced open-source object-relational database',
          path: '/postgresql',
          color: '#336791'
        }
      ]
    },
    {
      title: "🛠️ Tools & Other Skills",
      icon: "🛠️",
      skills: [
        {
          id: 'git',
          icon: '📚',
          title: 'Git & GitHub',
          desc: 'Version control and collaborative development',
          path: '/git',
          color: '#F05032'
        },
        {
          id: 'networking',
          icon: '🌐',
          title: 'Networking',
          desc: 'Network fundamentals and web technologies',
          path: '/networking',
          color: '#0099CC'
        },
        {
          id: 'icdl',
          icon: '💻',
          title: 'ICDL & Computer Skills',
          desc: 'Comprehensive computer literacy and office skills',
          path: '/icdl',
          color: '#4CAF50'
        }
      ]
    }
  ];

  return (
    <div className="skills-container">
      {/* Animated Background Elements */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`
          }}></div>
        ))}
      </div>

      <div className="container">
        {/* Header */}
        <div className="skills-header">
          <div className="header-badge">🚀 Expertise</div>
          <h1 className="skills-main-title">
            My <span className="gradient-text">Skills</span> & Technologies
          </h1>
          <p className="skills-subtitle">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </div>
        
        <div className="skills-grid-container">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skills-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2 className="category-title">{category.title}</h2>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="skill-item">
                    <div className="skill-card">
                      <div className="card-glow" style={{ background: `radial-gradient(circle at 30% 30%, ${skill.color}33, transparent 70%)` }}></div>
                      <div className="card-header">
                        <div className="skill-icon-wrapper" style={{ background: `${skill.color}22` }}>
                          <span className="skill-icon">{skill.icon}</span>
                        </div>
                        <span className="skill-badge" style={{ background: `${skill.color}22`, color: skill.color }}>Expert</span>
                      </div>
                      <h3 className="skill-title">{skill.title}</h3>
                      <p className="skill-description">{skill.desc}</p>
                      <div className="skill-progress">
                        <div className="progress-bar" style={{ width: '85%', background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}></div>
                      </div>
                      <Link to={skill.path} className="skill-more-btn">
                        <span>Learn More</span>
                        <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="skills-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Commitment</span>
          </div>
        </div>
      </div>
    </div>
  );
}