import React, { useState } from "react";
import axios from "axios";

const RegisterCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    overview: "",
    link: "",
    doc: "",
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
        "http://localhost:3000/api/register-company",
        formData
      );
      if (response.data.message === "Company registered successfully") {
        console.log("Company registered successfully");
      } else {
        console.error("Company registration failed");
      }
    } catch (error) {
      console.error("There was an error registering the company:", error);
    }
  };

  return (
    <div className="register-form">
      <h1>Pitch Your Startup Company</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="overview"
          placeholder="Company Overview"
          maxLength={1500}
          required
          value={formData.overview}
          onChange={handleChange}
        />
        <input
          type="url"
          name="link"
          placeholder="Add company url here"
          required
          value={formData.link}
          onChange={handleChange}
        />
        <input
          type="file"
          name="doc"
          placeholder="Add files here"
          value={formData.doc}
          onChange={handleChange}
        />
        <button type="submit">Register Company</button>
      </form>
    </div>
  );
};

export default RegisterCompany;
