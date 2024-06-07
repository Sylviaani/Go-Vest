const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: String,
  overview: String,
  link: String,
  doc: String,
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
