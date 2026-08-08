export default function ReactSkills() {
  const pageStyle = {
    background: "#1b1f3b",
    minHeight: "100vh",
    padding: "60px 0",
    display: "flex",
    justifyContent: "center",
  };

  const containerStyle = {
    width: "85%",
    maxWidth: "1100px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const titleStyle = {
    fontSize: "42px",
    fontWeight: "700",
    color: "#e3e2f0ff",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#dce1e8ff",
  };

  const sectionStyle = {
    background: "#1b1f3b",
    borderRadius: "18px",
    padding: "35px",
    marginBottom: "35px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
  };

  const sectionTitle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#ece3e3ff",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "16px",
    marginBottom: "25px",
  };

  const buttonGroup = {
    marginTop: "25px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  };

  const buttonStyle = {
    padding: "12px 22px",
    background: "#4f46e5",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.2s",
  };

  const paragraphStyle = {
    color: "#fff",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header Section */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>React Skills Hub</h1>
          <p style={subtitleStyle}>Explore my abilities and experience in modern React development</p>
        </div>

        {/* Image Section */}
        <div style={sectionStyle}>
          <img
            style={imageStyle}
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="React Development"
          />
          <p style={paragraphStyle}>
            React is a modern JavaScript library used to build fast, scalable, and interactive user interfaces. I have hands‑on
            experience using it to create dynamic and efficient front‑end applications.
          </p>
        </div>

        {/* My Core React Skills */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>My Core React Skills</h2>
          <p style={paragraphStyle}>
            Here are the main React skills I’ve developed:
            <br />✔ Building reusable and modular components
            <br />✔ Managing State & Props efficiently
            <br />✔ Using Hooks (useState, useEffect, useContext, useRef)
            <br />✔ Creating responsive and modern UI layouts
            <br />✔ Conditional rendering & event handling
            <br />✔ Implementing navigation using React Router
            <br />✔ Working with APIs, JSON data & async operations
            <br />✔ Optimizing performance & preventing unnecessary re-renders
            <br />✔ Understanding Virtual DOM & rendering lifecycle
          </p>
        </div>

        {/* Additional Technical Skills */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Additional Technical Skills</h2>
          <p style={paragraphStyle}>I also have experience working with the following tools and technologies:</p>

          <div style={buttonGroup}>
            <a style={buttonStyle}>React Hooks</a>
            <a style={buttonStyle}>React Router</a>
            <a style={buttonStyle}>Context API</a>
            <a style={buttonStyle}>State Management</a>
            <a style={buttonStyle}>Axios / Fetch</a>
            <a style={buttonStyle}>Tailwind CSS</a>
            <a style={buttonStyle}>JavaScript ES6+</a>
            <a style={buttonStyle}>Responsive Design</a>
          </div>
        </div>

        {/* Important React Concepts */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Important React Concepts</h2>
          <p style={paragraphStyle}>
            These are essential React concepts every developer should understand:
            <br />✔ Components
            <br />✔ Props & State
            <br />✔ useState & useEffect
            <br />✔ Conditional Rendering
            <br />✔ Lists & Keys
            <br />✔ Event Handling
            <br />✔ Controlled Components
            <br />✔ React Router
            <br />✔ Context API
            <br />✔ Fetching Data (using fetch or axios)
            <br />✔ useRef & DOM manipulation
            <br />✔ Memoization (React.memo, useCallback, useMemo)
          </p>
        </div>

        {/* Code Example */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>React Code Example</h2>
          <pre
            style={{
              background: "#1e1e1e",
              color: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              overflowX: "auto",
            }}
          >{`// Simple React Component
function Welcome() {
  return <h1>Hello React Developer!</h1>;
}`}          </pre>
        </div>
      </div>
    </div>
  );
}
