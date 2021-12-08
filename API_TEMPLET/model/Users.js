const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  // Pending,Paid

  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },

  purchaseHistory: {
    type: String,
    required: true,
  },

  shippingAddress: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Users", Users);
