const express = require("express");
const isAuthenticated = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const { getMyReports } = require("../controllers/patient.controller");

const router = express.Router();

router.use(isAuthenticated, authorizeRoles("patient"));

router.get("/reports", getMyReports);

module.exports = router;
