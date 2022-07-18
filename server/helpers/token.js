const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../configs/env.config");

module.exports = {
  createToken: function (obj) {
    return jwt.sign(obj, ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
  },
};
