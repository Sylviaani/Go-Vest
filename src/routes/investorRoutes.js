const express = require("express");
const router = express.Router();
const {
  authMiddleware,
  roleMiddleware,
} = require("../middlewares/authMiddleware");

// Example route for investors
router.get(
  "/dashboard",
  [authMiddleware, roleMiddleware(["investor"])],
  (req, res) => {
    res.json({ msg: "Welcome to the investor dashboard" });
  }
);

module.exports = router;
