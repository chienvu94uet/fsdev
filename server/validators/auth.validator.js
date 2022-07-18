const { body } = require("express-validator");

module.exports = {
  register: [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters"),
  ],
  login: [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters"),
  ],
};
