const mongoose = require("mongoose");

const InvestorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Investor = mongoose.model("Investor", InvestorSchema);

module.exports = Investor;
