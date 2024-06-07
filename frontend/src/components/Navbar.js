import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/investor-dashboard">Investor Dashboard</Link>
        </li>
        <li>
          <Link to="/startup-dashboard">Startup Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
