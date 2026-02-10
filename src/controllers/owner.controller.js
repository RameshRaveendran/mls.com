const User = require("../models/User");

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

module.exports = {
  getAllStaff,
  getAllPatients,
  getSystemStats,
};
