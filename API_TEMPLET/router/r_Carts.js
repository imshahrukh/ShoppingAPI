const express = require("express");
const cartController = require("./../controller/_Carts");
const cartRouter = express.Router();
// POST
// localhost:8000/v1/member

cartRouter
  .route("/cart")
  .post(cartController.addCart)
  .get(cartController.getAllCart);

// POST
// localhost:8000/v1/member/12345

cartRouter
  .route("/cart/:id")
  .get(cartController.getCartById)
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);
module.exports = cartRouter;
