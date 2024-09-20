const express = require('express');
const { getAllDoctors, getDoctorById,
    getAllAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentsByDoctorId,

 } = require('../controllers/appointmentController');

const router = express.Router();

router.get('/doctors', getAllDoctors);
router.get('/doctor/:id', getDoctorById); // Route to get a doctor by ID
router.get('/appointments', getAllAppointments);
router.get('/appointments/:id', getAppointmentById);
router.post('/appointments', createAppointment);
router.put('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);
router.get('/appointments/:doctorId', getAppointmentsByDoctorId);


module.exports = router;
