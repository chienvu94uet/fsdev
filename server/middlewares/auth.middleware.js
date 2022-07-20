const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../configs/env.config");

module.exports = {
  checkAuth: function (req, res, next) {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(401).json({ msg: "Token not found" });
    }
    const token = bearerToken.split(" ")[1];
    try {
      jwt.verify(token, ACCESS_TOKEN_SECRET);
    } catch (error) {
      return res.status(401).json({ msg: error.message });
    }
    req.token = token;
    next();
  },
};
