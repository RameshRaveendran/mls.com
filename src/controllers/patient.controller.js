const Patient = require("../models/Patient");
const LabReport = require("../models/LabReport");

const getMyReports = async (req, res) => {
  try {
    const userId = req.session.user.id;

    const patient = await Patient.findOne({ userId });

    if (!patient) {
      return res.status(404).json({ message: "Patient record not found" });
    }

    const reports = await LabReport.find({ patientId: patient._id });

    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getMyReports };
