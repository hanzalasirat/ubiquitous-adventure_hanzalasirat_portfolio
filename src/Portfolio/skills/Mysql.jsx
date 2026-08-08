export default function MySQLSkills() {
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

  const paragraphStyle = {
    color: "#fff",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "16px",
    marginBottom: "25px",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#e3e2f0ff", marginBottom: "10px" }}>
            MySQL Database Skills Hub
          </h1>
          <p style={{ fontSize: "18px", color: "#dce1e8ff" }}>
            Discover MySQL Database capabilities, concepts, and my expertise in designing, managing, and optimizing relational databases for web and enterprise applications.
          </p>
        </div>

        {/* Image Section */}
        <div style={sectionStyle}>
          <img
            style={imageStyle}
            src="https://images.unsplash.com/photo-1581091870620-6c9627f7d045?auto=format&fit=crop&w=1200&q=80"
            alt="MySQL Database"
          />
          <p style={paragraphStyle}>
            MySQL is a popular open-source relational database management system widely used in web applications and enterprise solutions. It supports transactions, indexing, replication, stored procedures, and high-performance querying.
          </p>
        </div>

        {/* MySQL Skills Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>My MySQL Database Skills</h2>
          <p style={paragraphStyle}>
            I have expertise in:
            <br />✔ Writing optimized SQL queries for data retrieval
            <br />✔ Designing relational schemas and normalizing tables
            <br />✔ Creating stored procedures, triggers, and functions
            <br />✔ Managing tables, indexes, views, and foreign key constraints
            <br />✔ Understanding transactions, locks, and concurrency
            <br />✔ Performance tuning, query optimization, and indexing
            <br />✔ Using MySQL Workbench, phpMyAdmin, and command-line tools
            <br />✔ Backup, restore, and replication strategies
          </p>
        </div>

        {/* MySQL Concepts Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Important MySQL Concepts</h2>
          <p style={paragraphStyle}>
            Key concepts for MySQL developers:
            <br />✔ Relational database fundamentals
            <br />✔ ACID transactions and data integrity
            <br />✔ Stored procedures, triggers, and functions
            <br />✔ Indexing, query optimization, and performance tuning
            <br />✔ Views, foreign keys, and constraints
            <br />✔ Backup, restore, and replication
            <br />✔ User privileges and security management
            <br />✔ Advanced querying and reporting
          </p>
        </div>

        {/* Sample SQL Code */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Sample SQL Code</h2>
          <pre
            style={{
              background: "#1e1e1e",
              color: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              overflowX: "auto",
            }}
          >{`-- Create a table
CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  HireDate DATE,
  Salary DECIMAL(10,2)
);

-- Insert sample data
INSERT INTO Employees VALUES (1, 'John', 'Doe', '2020-01-15', 55000);

-- Simple query
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > 50000;`}</pre>
        </div>

      </div>
    </div>
  );
}
