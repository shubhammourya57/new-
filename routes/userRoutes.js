const express = require("express");
const router = express.Router();
const userController = require("../controller/userController")

router.post('/signUp',userController.signUp)
router.post('/logIn',userController.logIn)

module.exports = router
