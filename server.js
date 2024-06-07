const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());

async function main() {
  const uri =
    "mongodb+srv://sylviaani26:ssJhyulOEXnIEKGG@govest.sc78s1n.mongodb.net/govest?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

// Connect to database
const MONGO_URI =
  "mongodb+srv://sylviaani26:ssJhyulOEXnIEKGG@govest.sc78s1n.mongodb.net/govest?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
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

app.post("/register", (req, res) => {
  const { userType } = req.body;
  console.log("Received registration data:", req.body);
  if (!userType) {
    return res.status(400).send({ message: "User type is required" });
  }
  console.log(`Registering ${userType}`);
  res.send({ message: `Registered as ${userType}` });
});

// Models
const User = require("./src/models/User");
const Startup = require("./src/models/Startup");
const Investor = require("./src/models/Investor");
const Company = require("./src/models/Company");

// Routes
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.send({ success: true, message: "Login successful" });
  } else {
    res.send({ success: false, message: "Invalid email or password" });
  }
});

app.post("/api/startups", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newStartup = new Startup({ name, email });
    await newStartup.save();
    res.status(201).json({ message: "Startup registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering startup", error });
  }
});

app.post("/api/investors", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newInvestor = new Investor({ name, email });
    await newInvestor.save();
    res.status(201).json({ message: "Investor registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering investor", error });
  }
});

app.post("/api/register-company", async (req, res) => {
  const { name, overview } = req.body;
  // Implement logic to save the company details in the database
  // For example:
  const newCompany = new Company({ name, overview });
  await newCompany.save();
  res.send({ message: "Company registered successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
