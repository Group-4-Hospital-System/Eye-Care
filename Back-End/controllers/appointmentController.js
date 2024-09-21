const pool = require('../config/db');

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await pool.query("SELECT * FROM users WHERE role = 'doctor'");
    res.status(200).json(doctors.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get doctor by ID
const getDoctorById = async (req, res) => {
  const { id } = req.params; // Extract ID from request parameters
  try {
    const doctor = await pool.query("SELECT * FROM users WHERE user_id = $1 AND role = 'doctor'", [id]);

    if (doctor.rows.length === 0) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    res.status(200).json(doctor.rows[0]); // Return the first (and should be only) doctor found
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};


  



const getDoctorAppointments = async (req, res) => {
  const doctorId = req.params.doctorId;

  try {
    const result = await pool.query(
      'SELECT * FROM staff_schedules WHERE doctor_id = $1 ORDER BY start_time ASC',
      [doctorId]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching appointments:', err);
    res.status(500).json({ error: 'Database query error' });
  }
};
  
module.exports = {
  getAllDoctors,
  getDoctorById,
  getDoctorAppointments
};
