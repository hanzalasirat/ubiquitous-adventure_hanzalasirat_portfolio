export default function Php() {

  const pageStyle = {
    background: "#1a1f2b",
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
    color: "#f1f5f9",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#cbd5e1",
  };

  const sectionStyle = {
    background: "#1a1f2b",
    borderRadius: "18px",
    padding: "35px",
    marginBottom: "35px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
  };

  const sectionTitle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#f8fafc",
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
    background: "#805ad5",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.2s",
  };

  const paragraphStyle = {
    color: "#e2e8f0",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        {/* Header Section */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>PHP Learning Hub</h1>
          <p style={subtitleStyle}>Learn PHP from basics to advanced web development</p>
        </div>

        {/* Image Section */}
        <div style={sectionStyle}>
          <img
            style={imageStyle}
            src="https://www.php.net/images/logos/new-php-logo.svg"
            alt="PHP Programming"
          />
          <p style={paragraphStyle}>
            PHP is a popular server-side scripting language designed for web development but also used as a general-purpose programming language. PHP powers millions of websites worldwide.
          </p>
        </div>

        {/* Why Learn PHP */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Why Learn PHP?</h2>
          <p style={paragraphStyle}>
            PHP is essential for web development:
            <br />✔ Server-side scripting
            <br />✔ Web application development
            <br />✔ Backend integration
            <br />✔ Content management systems (WordPress, Joomla)
            <br />✔ Database interaction
          </p>
        </div>

        {/* Courses Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Recommended PHP Courses</h2>
          <p style={paragraphStyle}>Get started with PHP through these courses:</p>

          <div style={buttonGroup}>
            <a style={buttonStyle} href="https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/" target="_blank">Udemy PHP</a>
            <a style={buttonStyle} href="https://www.coursera.org/learn/web-app" target="_blank">Coursera PHP</a>
            <a style={buttonStyle} href="https://www.codecademy.com/learn/learn-php" target="_blank">Codecademy PHP</a>
            <a style={buttonStyle} href="https://www.php.net/manual/en/tutorial.php" target="_blank">Official PHP Docs</a>
          </div>
        </div>

        {/* Code Example */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Sample PHP Code</h2>

          <pre
            style={{
              background: "#1e1e2e",
              color: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              overflowX: "auto",
            }}
          >
{`<?php
// Simple PHP Example
$name = readline("Enter your name: ");
echo "Hello, $name! Welcome to PHP.";
?>`}
          </pre>
        </div>

      </div>
    </div>
  );
}
