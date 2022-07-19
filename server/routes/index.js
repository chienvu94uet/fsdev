const authRoute = require("../routes/auth.route");
const postRoute = require("../routes/post.route");

module.exports = {
  routeApp: function (app) {
    app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/post", postRoute);
  },
};
