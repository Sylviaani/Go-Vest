const express = require("express");
const router = express.Router();
const {
  authMiddleware,
  roleMiddleware,
} = require("../middlewares/authMiddleware");

// Example route for startups
router.get(
  "/dashboard",
  [authMiddleware, roleMiddleware(["startup"])],
  (req, res) => {
    res.json({ msg: "Welcome to the startup dashboard" });
  }
);

module.exports = router;
