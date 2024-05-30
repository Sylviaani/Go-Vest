const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./src/config/db");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Define API routes
app.use("/api/users", require("./src/routes/userRoutes"));

// All other routes should serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
