const User = require("../models/User");
const Patient = require("../models/Patient");

const getAllStaff = async (req, res) => {
  try {
    const staff = await User.find({ role: "staff" }).select("-password");
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await User.find({ role: "patient" }).select("-password");
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getSystemStats = async (req, res) => {
  try {
    const staffCount = await User.countDocuments({ role: "staff" });
    const patientCount = await User.countDocuments({ role: "patient" });

    res.status(200).json({
      staffCount,
      patientCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const createPatientAndAssignStaff = async (req, res) => {
  try {
    const { userId, assignedStaff, age, gender } = req.body;

    if (!userId || !assignedStaff) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const patient = await Patient.create({
      userId,
      assignedStaff,
      age,
      gender,
    });

    res.status(201).json({
      message: "Patient created and staff assigned",
      patient,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllStaff,
  getAllPatients,
  getSystemStats,
  createPatientAndAssignStaff,
};
