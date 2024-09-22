const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/profilecontrollers");
const Auth = require("../middlewares/authMiddleware");
router.get("/Profile", Auth, ProfileController.getAllUsers);

module.exports = router;
