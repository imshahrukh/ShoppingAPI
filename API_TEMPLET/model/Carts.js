const mongoose = require("mongoose");

const Carts = new mongoose.Schema({
  // Pending,Paid
  products: [
    {
      productId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Products",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],

  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
});
module.exports = mongoose.model("Carts", Carts);
