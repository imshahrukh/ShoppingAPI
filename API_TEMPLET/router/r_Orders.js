const express = require("express");
const orderController = require("./../controller/_Orders");
const orderRouter = express.Router();
// POST
// localhost:8000/v1/member

orderRouter
  .route("/order")
  .post(orderController.addOrder)
  .get(orderController.getAllOrder);

// POST
// localhost:8000/v1/member/12345

orderRouter
  .route("/order/:id")
  .get(orderController.getOrderById)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);
module.exports = orderRouter;
