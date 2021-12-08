const mongoose = require("mongoose");

const Products = new mongoose.Schema({
  // Pending,Paid

  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],

  pricing: {
    type: Number,
    required: true,
  },

  shippingCost: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Products", Products);
