const appointmentController = require("../controllers/appointmentController");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

router.get(
  "/getallAppointments",
  auth,
  appointmentController.getallAppointments
);
module.exports = router;
