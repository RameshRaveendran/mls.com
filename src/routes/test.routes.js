const express = require("express");
const isAuthenticated = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");

const router = express.Router();

router.get(
  "/owner",
  isAuthenticated,
  authorizeRoles("owner"),
  (req, res) => {
    res.json({ message: "Welcome Owner" });
  }
);

router.get(
  "/staff",
  isAuthenticated,
  authorizeRoles("staff"),
  (req, res) => {
    res.json({ message: "Welcome Staff" });
  }
);

router.get(
  "/patient",
  isAuthenticated,
  authorizeRoles("patient"),
  (req, res) => {
    res.json({ message: "Welcome Patient" });
  }
);

module.exports = router;
