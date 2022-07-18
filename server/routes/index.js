const authRoute = require("../routes/auth.route");

module.exports = {
  routeApp: function (app) {
    app.use("/api/v1/auth", authRoute);
  },
};
