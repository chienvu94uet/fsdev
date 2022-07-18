const { validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");
const { createToken } = require("../helpers/token");
const { mongooseToObect } = require("../helpers/mongoose");

class Auth {
  async register(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let isExistUser = false;
    const { username, password } = req.body;

    try {
      const userInDB = await UserModel.findOne({ username });
      isExistUser = userInDB ? true : false;
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }

    if (isExistUser) {
      return res.status(400).json({ errors: { msg: "User already exists" } });
    }

    var salt = bcrypt.genSaltSync(10);
    var passwordHash = bcrypt.hashSync(password, salt);

    try {
      const newUser = await UserModel.create({
        username,
        password: passwordHash,
      });

      const token = createToken({ username, id: mongooseToObect(newUser).id });

      return res.status(201).json({
        data: {
          username,
          token,
        },
      });
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }
  }

  async login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let isExistUser = false,
      userInDB = null;
    const { username, password } = req.body;

    try {
      userInDB = await UserModel.findOne({ username });
      isExistUser = userInDB ? true : false;
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }

    if (!isExistUser) {
      return res.status(400).json({ errors: { msg: "User not exists" } });
    }

    var isComparePassword = bcrypt.compareSync(password, userInDB.password);

    if (!isComparePassword) {
      return res
        .status(400)
        .json({ errors: { msg: "Username or password is incorrect" } });
    }

    const token = createToken({ username, id: mongooseToObect(userInDB).id });
    return res.status(200).json({
      data: {
        username,
        token,
      },
    });
  }
}

module.exports = new Auth();
