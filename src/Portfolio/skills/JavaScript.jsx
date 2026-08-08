export default function JavaScript() {

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
    color: "#f5f3ff",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#d1d5db",
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
    color: "#f9fafb",
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
    background: "#f59e0b",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.2s",
  };

  const paragraphStyle = {
    color: "#e5e7eb",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        {/* Header Section */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>JavaScript Learning Hub</h1>
          <p style={subtitleStyle}>Master JavaScript from fundamentals to advanced concepts</p>
        </div>

        {/* Image Section */}
        <div style={sectionStyle}>
          <img
            style={imageStyle}
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
            alt="JavaScript Coding"
          />
          <p style={paragraphStyle}>
            JavaScript is the essential programming language of the web. It powers websites, interactive UI elements, backend servers, mobile apps, and even desktop applications. It's one of the most in-demand languages in the world.
          </p>
        </div>

        {/* Why Learn JavaScript */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Why Learn JavaScript?</h2>
          <p style={paragraphStyle}>
            JavaScript is everywhere:
            <br />✔ Frontend Web Development
            <br />✔ Backend Development (Node.js)
            <br />✔ Mobile Apps (React Native)
            <br />✔ Desktop Apps (Electron)
            <br />✔ Game Development
            <br />✔ Interactive UI / UX
          </p>
        </div>

        {/* Courses Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Recommended JavaScript Courses</h2>
          <p style={paragraphStyle}>Start learning JavaScript with these top resources:</p>

          <div style={buttonGroup}>
            <a style={buttonStyle} href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank">Udemy JS Course</a>
            <a style={buttonStyle} href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank">freeCodeCamp JS</a>
            <a style={buttonStyle} href="https://javascript.info/" target="_blank">JavaScript.info</a>
            <a style={buttonStyle} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN Docs</a>
          </div>
        </div>

        {/* Code Example */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Sample JavaScript Code</h2>

          <pre
            style={{
              background: "#111827",
              color: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              overflowX: "auto",
            }}
          >
{`// Simple JavaScript Example
const name = prompt("Enter your name:");
console.log("Hello, " + name + "! Welcome to JavaScript.");`}
          </pre>
        </div>

      </div>
    </div>
  );
}