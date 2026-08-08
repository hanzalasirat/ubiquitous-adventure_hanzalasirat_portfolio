export default function OracleSkills() {
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
            Oracle Database Skills Hub
          </h1>
          <p style={{ fontSize: "18px", color: "#dce1e8ff" }}>
            Discover Oracle Database capabilities, concepts, and my expertise in designing, managing, and optimizing databases for enterprise applications.
          </p>
        </div>

        {/* Image Section */}
        <div style={sectionStyle}>
          <img
            style={imageStyle}
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80"
            alt="Oracle Database"
          />
          <p style={paragraphStyle}>
            Oracle Database is a multi-model database management system widely used in enterprises for managing large volumes of data, ensuring security, reliability, and high performance. It supports advanced features like transactions, stored procedures, triggers, and complex queries.
          </p>
        </div>

        {/* Oracle Skills Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>My Oracle Database Skills</h2>
          <p style={paragraphStyle}>
            I have expertise in:
            <br />✔ Writing optimized SQL queries for efficient data retrieval
            <br />✔ Designing relational schemas and normalizing databases
            <br />✔ Creating PL/SQL stored procedures, functions, and triggers
            <br />✔ Managing tables, indexes, views, sequences, and constraints
            <br />✔ Understanding transactions, locks, and concurrency control
            <br />✔ Performance tuning, query optimization, and indexing strategies
            <br />✔ Using Oracle SQL Developer, Enterprise Manager, and Data Pump
            <br />✔ Backup, recovery, and data migration best practices
          </p>
        </div>

        {/* Oracle Concepts Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Important Oracle Concepts</h2>
          <p style={paragraphStyle}>
            Key concepts for Oracle developers:
            <br />✔ Relational database fundamentals
            <br />✔ ACID transactions and data integrity
            <br />✔ PL/SQL programming
            <br />✔ Indexing and performance tuning
            <br />✔ Views, sequences, and constraints
            <br />✔ Backup and recovery strategies
            <br />✔ Data security and user privileges
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
  EmployeeID NUMBER PRIMARY KEY,
  FirstName VARCHAR2(50),
  LastName VARCHAR2(50),
  HireDate DATE,
  Salary NUMBER(10,2)
);

-- Insert sample data
INSERT INTO Employees VALUES (1, 'John', 'Doe', TO_DATE('2020-01-15','YYYY-MM-DD'), 55000);

-- Simple query
SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > 50000;`}</pre>
        </div>

      </div>
    </div>
  );
}