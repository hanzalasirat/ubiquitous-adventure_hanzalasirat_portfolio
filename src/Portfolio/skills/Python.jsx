export default function Python() {

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
   color: "#fff"
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        {/* Header Section */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Python Learning Hub</h1>
          <p style={subtitleStyle}>Explore Python programming from basics to advanced level</p>
        </div>

        {/* Image Section */}
        <div style={sectionStyle}>
          <img 
            style={imageStyle}
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80
" 
            alt="Python Programming" 
          />
          <p style={paragraphStyle}>
            Python is a powerful and beginner‑friendly programming language widely used in modern tech industries. It is known for its readability, simplicity, and massive ecosystem of libraries.
          </p>
        </div>

        {/* Why Learn Python */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Why Learn Python?</h2>
          <p style={paragraphStyle}>
            Python is extremely versatile and can be used in almost any field:
            <br />✔ Artificial Intelligence & Machine Learning
            <br />✔ Web Development
            <br />✔ Cybersecurity
            <br />✔ Data Science & Analytics
            <br />✔ Automation & Scripting
          </p>
        </div>

        {/* Courses Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Recommended Courses</h2>
          <p style={paragraphStyle}>Kickstart your Python journey with these high‑quality resources:</p>

          <div style={buttonGroup}>
            <a style={buttonStyle} href="https://www.coursera.org/specializations/python" target="_blank">Coursera Python</a>
            <a style={buttonStyle} href="https://www.udemy.com/course/complete-python-bootcamp/" target="_blank">Udemy Bootcamp</a>
            <a style={buttonStyle} href="https://www.codecademy.com/learn/learn-python-3" target="_blank">Codecademy Python</a>
            <a style={buttonStyle} href="https://docs.python.org/3/tutorial/" target="_blank">Official Python Docs</a>
          </div>
        </div>

        {/* Code Example */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Sample Python Code</h2>

          <pre
            style={{
              background: "#1e1e1e",
              color: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              overflowX: "auto",
            }}
          >
{`# Simple Python Example
name = input("Enter your name: ")
print("Hello, " + name + "! Welcome to Python.")`}
          </pre>
        </div>

      </div>
    </div>
  );
}
