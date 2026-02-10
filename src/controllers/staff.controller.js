const Patient = require("../models/Patient");
const LabReport = require("../models/LabReport");

const getMyPatients = async (req, res) => {
  try {
    const staffId = req.session.user.id;

    const patients = await Patient.find({ assignedStaff: staffId })
      .populate("userId", "name email");

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const createLabReport = async (req, res) => {
  try {
    const { patientId, testType, result } = req.body;

    if (!patientId || !testType || !result) {
      return res.status(400).json({ message: "All fields required" });
    }

    const report = await LabReport.create({
      patientId,
      testType,
      result,
      createdBy: req.session.user.id,
    });

    res.status(201).json({
      message: "Lab report created",
      report,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getMyPatients,
  createLabReport,
};
