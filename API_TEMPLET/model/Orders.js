const mongoose = require("mongoose");

const Orders = new mongoose.Schema({
  // Pending,Paid

  cartId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "carts",
  },
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Orders",
  },

  quantites: {
    type: Number,
    required: true,
  },

  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
});
module.exports = mongoose.model("Orders", Orders);
