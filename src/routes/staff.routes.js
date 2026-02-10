const express = require("express");
const isAuthenticated = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const {
  getMyPatients,
  createLabReport,
} = require("../controllers/staff.controller");

const router = express.Router();

router.use(isAuthenticated, authorizeRoles("staff"));

router.get("/patients", getMyPatients);
router.post("/reports", createLabReport);

module.exports = router;
