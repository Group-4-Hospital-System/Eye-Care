const db = require("../config/db");

const getallAppointments = async (req, res) => {
  try {
    const doctor_id = req.user;
    const appointments = await db.query(
      `SELECT * FROM appointments JOIN users on appointments.patient_id = users.id JOIN users on appointments.doctor_id = users.id WHERE doctor_id = $1`,
      [doctor_id]
    );
    res.json(appointments.rows);
  } catch (error) {
    console.error("Error getting appointments:", error);
    res.status(500).json({ message: "Error getting appointments" });
  }
};

module.exports = { getallAppointments };
