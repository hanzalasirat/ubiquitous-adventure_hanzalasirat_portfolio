export default function CssSkills() {
  return (
    <div style={{ background: "#1b1f3b", minHeight: "100vh", padding: "60px 0", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "85%", maxWidth: "1100px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#e3e2f0ff", marginBottom: "10px" }}>
            CSS Skills Hub
          </h1>
          <p style={{ fontSize: "18px", color: "#dce1e8ff" }}>
            Explore my CSS expertise, styling techniques, and UI development skills
          </p>
        </div>

        {/* Image Section */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <img
            src="https://images.unsplash.com/photo-1559027615-5f18f96c6f46?auto=format&fit=crop&w=1200&q=80"
            alt="CSS Development"
            style={{ width: "100%", borderRadius: "16px", marginBottom: "25px" }}
          />
          <p style={{ color: "#fff" }}>
            CSS (Cascading Style Sheets) is the core of modern web design. I specialize in creating responsive, visually appealing, and smooth user interfaces using advanced CSS techniques.
          </p>
        </div>

        {/* Skills Section */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#ece3e3ff" }}>
            My CSS Skills
          </h2>
          <p style={{ color: "#fff" }}>
            I have strong experience with:
            <br />✔ Modern CSS3 features
            <br />✔ Flexbox & Grid layout systems
            <br />✔ Responsive & mobile‑first design
            <br />✔ Animations & transitions
            <br />✔ CSS Variables
            <br />✔ Pseudo‑classes & pseudo‑elements
            <br />✔ Creating clean and scalable UI structures
            <br />✔ Browser compatibility & best practices
          </p>
        </div>

        {/* Tools Section */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#ece3e3ff" }}>
            CSS Tools & Technologies I Use
          </h2>
          <p style={{ color: "#fff" }}>I regularly work with the following tools and techniques:</p>

          <div style={{ marginTop: "25px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <button style={btn}>CSS3</button>
            <button style={btn}>Flexbox</button>
            <button style={btn}>Grid</button>
            <button style={btn}>Responsive Design</button>
            <button style={btn}>Animations</button>
            <button style={btn}>Custom Properties</button>
          </div>
        </div>

        {/* Concepts Section */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#ece3e3ff" }}>
            Important CSS Concepts
          </h2>
          <p style={{ color: "#fff" }}>
            Key CSS concepts every developer must know:
            <br />✔ Box Model
            <br />✔ Selectors & Specificity
            <br />✔ Positioning (relative, absolute, fixed)
            <br />✔ Flexbox
            <br />✔ Grid Layout
            <br />✔ Media Queries
            <br />✔ Transitions & Keyframe Animations
            <br />✔ Units (px, %, em, rem, vw, vh)
            <br />✔ CSS Variables
            <br />✔ Shadows, borders, backgrounds
          </p>
        </div>

        {/* Code Example */}
        <div style={{ background: "#1b1f3b", borderRadius: "18px", padding: "35px", marginBottom: "35px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#ece3e3ff" }}>
            Sample CSS Code
          </h2>
          <pre
            style={{
              background: "#1e1e1e",
              color: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              overflowX: "auto",
            }}
          >{`/* Simple CSS Example */
.box {
  width: 200px;
  height: 200px;
  background: #4f46e5;
  border-radius: 12px;
  transition: 0.3s;
}
.box:hover {
  background: #6d5dfc;
}`}</pre>
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
