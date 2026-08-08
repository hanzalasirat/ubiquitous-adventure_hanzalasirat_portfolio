export default function PostgreSQLSkills() {
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
            PostgreSQL Database Skills Hub
          </h1>
          <p style={{ fontSize: "18px", color: "#dce1e8ff" }}>
            Explore PostgreSQL capabilities, key concepts, and my expertise in designing, managing, and optimizing relational databases for enterprise applications and web solutions.
          </p>
        </div>

        {/* Image Section */}
        <div style={sectionStyle}>
          <img
            style={imageStyle}
            src="https://images.unsplash.com/photo-1612831455546-5fa6b6b1cf6b?auto=format&fit=crop&w=1200&q=80"
            alt="PostgreSQL Database"
          />
          <p style={paragraphStyle}>
            PostgreSQL is a powerful open-source object-relational database system known for its robustness, extensibility, and compliance with SQL standards. It supports complex queries, transactions, indexing, JSON, and advanced data types.
          </p>
        </div>

        {/* PostgreSQL Skills Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>My PostgreSQL Skills</h2>
          <p style={paragraphStyle}>
            I have expertise in:
            <br />✔ Writing optimized SQL queries for data retrieval
            <br />✔ Designing relational schemas and normalizing tables
            <br />✔ Creating functions, triggers, and stored procedures
            <br />✔ Managing tables, indexes, views, sequences, and constraints
            <br />✔ Understanding transactions, isolation levels, and concurrency
            <br />✔ Performance tuning, query optimization, and indexing
            <br />✔ Using pgAdmin, psql, and replication tools
            <br />✔ Backup, restore, and migration strategies
          </p>
        </div>

        {/* PostgreSQL Concepts Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>Important PostgreSQL Concepts</h2>
          <p style={paragraphStyle}>
            Key concepts for PostgreSQL developers:
            <br />✔ Relational database fundamentals
            <br />✔ ACID transactions and data integrity
            <br />✔ Advanced SQL and PL/pgSQL programming
            <br />✔ Indexing, query optimization, and performance tuning
            <br />✔ Views, sequences, and constraints
            <br />✔ Backup, restore, and replication strategies
            <br />✔ JSON, array, and other advanced data types
            <br />✔ User privileges and security management
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
  EmployeeID SERIAL PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  HireDate DATE,
  Salary NUMERIC(10,2)
);

-- Insert sample data
INSERT INTO Employees (FirstName, LastName, HireDate, Salary)
VALUES ('John', 'Doe', '2020-01-15', 55000);

-- Simple query
SELECT FirstName, LastName, Salary
FROM Employees
WHERE Salary > 50000;`}</pre>
        </div>

      </div>
    </div>
  );
}
