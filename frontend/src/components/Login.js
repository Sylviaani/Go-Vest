import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      // Save user data (e.g., token) as needed
      console.log("Response:", response.data);
      // Redirect based on user type
      if (response.data.userType === "startup") {
        navigate("/startup-dashboard");
      } else if (response.data.userType === "investor") {
        navigate("/investor-dashboard");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-form">
      <h1>Log In</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>

      <footer>
        Don't have an account?
        <a href="/register">Sign Up here</a>
      </footer>
    </div>
  );
};

export default Login;
