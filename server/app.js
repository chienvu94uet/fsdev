const express = require("express");
const { PORT } = require("./configs/env.config");
const connect = require("./configs/mongo.config");
const { applyMiddleware } = require("./middlewares");
const { routeApp } = require("./routes");

const app = express();

applyMiddleware(app);
routeApp(app);

connect();
app.listen(PORT, () => console.log("api listening on port " + PORT));
