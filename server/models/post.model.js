var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("post", postSchema);
