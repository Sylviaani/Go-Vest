const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Registration route
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  console.log("Registration data received:", req.body); // Add this log

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
      role,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    console.log("User registered successfully:", user); // Add this log

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error); // Add this log
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
