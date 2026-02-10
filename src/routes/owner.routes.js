const express = require("express");
const isAuthenticated = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const {
  getAllStaff,
  getAllPatients,
  getSystemStats,
  createPatientAndAssignStaff,
} = require("../controllers/owner.controller");


const router = express.Router();


router.use(isAuthenticated, authorizeRoles("owner"));

router.get("/staff", getAllStaff);
router.get("/patients", getAllPatients);
router.get("/stats", getSystemStats);
router.post("/patients", createPatientAndAssignStaff);


module.exports = router;
