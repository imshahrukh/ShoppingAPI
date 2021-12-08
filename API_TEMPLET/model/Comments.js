const mongoose = require("mongoose");

const Comments = new mongoose.Schema({
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Products",
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  rating: {
    type: Number,
    required: true,
  },
  image: [
    {
      type: String,
      required: true,
    },
  ],
  message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Comments", Comments);
