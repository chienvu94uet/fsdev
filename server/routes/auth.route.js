const express = require("express");
const Auth = require("../controllers/auth.controller");
const authValidator = require("../validators/auth.validator");
const router = express.Router();

router.post("/register", authValidator.register, Auth.register);
router.post("/login", authValidator.login, Auth.login);

module.exports = router;
