import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userType, setUserType] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        userType,
      });
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("There was an error registering:", error);
    }
  };

  return (
    <div id="registerType">
      <section>
        <div>
          <h1>Choose your role</h1>
          <p>You can't switch roles with the same account</p>
          <button className="type1" onClick={() => setUserType("investor")}>
            <a href="/register-investor">Register as Investor </a>
          </button>
          <button className="type2" onClick={() => setUserType("startup")}>
            <a href="/register-startup">Register as Startup </a>
          </button>
          <button onClick={handleRegister}>Submit</button>
        </div>
      </section>
    </div>
  );
};

export default Register;
