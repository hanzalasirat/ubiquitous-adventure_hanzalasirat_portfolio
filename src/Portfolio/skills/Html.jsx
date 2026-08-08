export default function HtmlSkills() {
  return (
    <div style={{ background: "#1b1f3b", minHeight: "100vh", padding: "60px 0", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "85%", maxWidth: "1100px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#e3e2f0ff", marginBottom: "10px" }}>
            HTML Skills Hub
          </h1>
          <p style={{ fontSize: "18px", color: "#dce1e8ff" }}>
            Explore my professional skills and experience in HTML & Web Structure
          </p>
        </div>

        {/* Image Section */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <img
            src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=80"
            alt="HTML Development"
            style={{ width: "100%", borderRadius: "16px", marginBottom: "25px" }}
          />
          <p style={{ color: "#fff" }}>
            HTML (HyperText Markup Language) is the foundation of all websites. I have strong mastery of HTML5 and modern web structure, ensuring semantic, clean, and accessible markup.
          </p>
        </div>

        {/* Skills Section */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#ece3e3ff" }}>
            My HTML Skills
          </h2>
          <p style={{ color: "#fff" }}>
            I have strong experience with:
            <br />✔ Semantic HTML5 structure
            <br />✔ Building clean and accessible layouts
            <br />✔ Forms, inputs, validation, and best practices
            <br />✔ SEO-friendly markup
            <br />✔ Media embedding (images, audio, video)
            <br />✔ Tables, lists, and structured content
            <br />✔ Using HTML APIs (Canvas, Video, Audio, LocalStorage)
            <br />✔ Optimizing HTML for performance & readability
          </p>
        </div>

        {/* Tools Section */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#ece3e3ff" }}>
            Technologies I Use With HTML
          </h2>
          <p style={{ color: "#fff" }}>I often combine HTML with modern tools and workflows:</p>

          <div style={{ marginTop: "25px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <button style={btn}>HTML5</button>
            <button style={btn}>Accessibility (A11y)</button>
            <button style={btn}>Responsive Layouts</button>
            <button style={btn}>SEO Markup</button>
            <button style={btn}>Meta Tags</button>
            <button style={btn}>Forms & Validation</button>
          </div>
        </div>

        {/* Concepts Section */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#ece3e3ff" }}>
            Important HTML Concepts
          </h2>
          <p style={{ color: "#fff" }}>
            Key concepts every HTML developer should know:
            <br />✔ Semantic Elements (header, main, footer, nav)
            <br />✔ HTML Document Structure
            <br />✔ Accessibility Roles & ARIA
            <br />✔ Meta Data & SEO
            <br />✔ Forms & Input Types
            <br />✔ Media Tags (audio, video)
            <br />✔ Canvas & HTML APIs
            <br />✔ iFrames and Embedding
            <br />✔ Responsive Structure
            <br />✔ LocalStorage / SessionStorage
          </p>
        </div>

        {/* Code Example */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#ece3e3ff" }}>
            Sample HTML Code
          </h2>
          <pre
            style={{
              background: "#1e1e1e",
              color: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              overflowX: "auto",
            }}
          >{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Sample</title>
  </head>
  <body>
    <h1>Hello HTML!</h1>
    <p>This is a simple HTML example.</p>
  </body>
</html>`}</pre>
        </div>
      </div>
    </div>
  );
}

const btn = {
  padding: "12px 22px",
  background: "#4f46e5",
  color: "#fff",
  borderRadius: "10px",
  fontWeight: "600",
  border: "none",
  cursor: "pointer",
  transition: "0.2s",
};