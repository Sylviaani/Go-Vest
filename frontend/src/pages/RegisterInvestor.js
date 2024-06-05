import React, { useState } from "react";
import axios from "axios";

const RegisterInvestor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add other fields as necessary
  });

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
        "http://localhost:3000/api/investors",
        formData
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("There was an error registering:", error);
    }
  };

  return (
    <div>
      <h1>Register as Investor</h1>
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
        {/* Add other form fields here */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterInvestor;
