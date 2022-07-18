const express = require("express");

module.exports = {
  applyMiddleware: function (app) {
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
  },
};
