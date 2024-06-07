import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register";
import RegisterInvestor from "./pages/RegisterInvestor";
import RegisterStartup from "./pages/RegisterStartup";
import Login from "./components/Login";
import RegisterCompany from "./pages/RegisterCompany";
import HomePage from "./components/HomePage";
import StartupDashboard from "./components/StartupDashboard";
import InvestorDashboard from "./components/InvestorDashboard";

const App = () => {
  return (
    <Router>
      <div id="App">
        <header>
          <h1>
            <em>Go</em>Vest
          </h1>
          <nav>
            <Link to="/login">Log In</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register-investor" element={<RegisterInvestor />} />
          <Route path="/register-startup" element={<RegisterStartup />} />
          <Route path="/register-company" element={<RegisterCompany />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} exact />
          <Route path="/startup-dashboard" element={<StartupDashboard />} />
          <Route path="/investor-dashboard" element={<InvestorDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
