const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const Startup = mongoose.model("Startup", StartupSchema);

module.exports = Startup;
