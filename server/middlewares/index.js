const express = require("express");
const cors = require("cors");
const { checkAuth } = require("./auth.middleware");

module.exports = {
  applyMiddleware: function (app) {
    app.use(cors());
    app.use(checkAuth);
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
  },
};
