const express = require("express");
const cors = require("cors");

module.exports = {
  applyMiddleware: function (app) {
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
    app.use(cors());
  },
};
