const mongoose = require("mongoose");
const { MONGO_URL } = require("./env.config");

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: " + error.message);
  }
};

module.exports = connect;
