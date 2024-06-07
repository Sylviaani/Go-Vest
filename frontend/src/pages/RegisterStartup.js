import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterStartup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // Add other fields as necessary
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/startups",
        formData
      );
      if (response.data.message === "Startup registered successfully") {
        // Navigate to the startup company registration page
        navigate("/register-company");
      } else {
        console.error("Registration failed");
      }
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("There was an error registering:", error);
    }
  };

  return (
    <div className="register-form">
      <h1>Register as Startup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          maxLength={12}
          placeholder="Password"
          required
        />
        {/* Add other form fields here */}
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default RegisterStartup;
