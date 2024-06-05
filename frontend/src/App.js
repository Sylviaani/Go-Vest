import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register";
import RegisterInvestor from "./pages/RegisterInvestor";
import RegisterStartup from "./pages/RegisterStartup";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register-investor">Register as Investor</Link>
            </li>
            <li>
              <Link to="/register-startup">Register as Startup</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register-investor" element={<RegisterInvestor />} />
          <Route path="/register-startup" element={<RegisterStartup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
