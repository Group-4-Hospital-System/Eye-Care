const express = require('express');
const { getAllDoctors, getDoctorById,
 
    getDoctorAppointments

 } = require('../controllers/appointmentController');

const router = express.Router();

router.get('/doctors', getAllDoctors);
router.get('/doctor/:id', getDoctorById); // Route to get a doctor by ID
router.get('/appointments/:doctorId', getDoctorAppointments);


module.exports = router;
