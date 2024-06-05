const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
