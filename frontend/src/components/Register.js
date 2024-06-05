import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userType, setUserType] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!userType) {
      setMessage("Please select a user type");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/register", {
        userType,
      });
      setMessage(response.data.message); // Show success message
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={() => setUserType("investor")}>
        Register as Investor
      </button>
      <button onClick={() => setUserType("startup")}>
        Register as Startup
      </button>
      <button onClick={handleRegister}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
