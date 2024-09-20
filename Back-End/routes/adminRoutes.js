const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/getPatient', adminController.getPatient);
router.get('/getDoctor', adminController.getDoctor);
router.get('/getContactMessages', adminController.getContactMessages);
router.put('/ReplyContactMessages/:id', adminController.ReplyContactMessages);
router.delete('/Ban/:id', adminController.BanPatient);


module.exports = router;