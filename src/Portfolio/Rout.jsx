import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Home from "./Home";
import AI from "./AI";
import Weather from "./Weather";
import MapPage from "./Map";
import Python from "./skills/Python";
import JavaScript from "./skills/JavaScript";
import Php from "./skills/Php";
import ReactSkills from "./skills/React";
import HtmlSkills from "./skills/Html";
import CssSkills from "./skills/Css";
import OracleSkills from "./skills/Oracle";
import MySQLSkills from "./skills/Mysql";
import PostgreSQLSkills from "./skills/Postgre";

export default function Rout() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/map" element={<MapPage />} />
        {/* skills pages */}
        <Route path="/python" element={<Python />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/php" element={<Php />} />
        <Route path="/react" element={<ReactSkills />} />
        <Route path="/html" element={<HtmlSkills />} />
        <Route path="/css" element={<CssSkills />} />
        <Route path="/oracle" element={<OracleSkills />} />
        <Route path="/mysql" element={<MySQLSkills />} />
        <Route path="/postgre" element={<PostgreSQLSkills />} />
        {/* <Route path="/" element={<JavaScript />} /> */}
      </Routes>
    </Router>
  );
}
