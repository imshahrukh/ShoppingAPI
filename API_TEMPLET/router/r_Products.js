const express = require("express");
const productConroller = require("./../controller/_Products");
const ProductRouter = express.Router();
// POST
// localhost:8000/v1/member

ProductRouter.route("/product")
  .post(productConroller.addProduct)
  .get(productConroller.getAllProduct);

// POST
// localhost:8000/v1/member/12345

ProductRouter.route("/product/:id")
  .get(productConroller.getProductById)
  .patch(productConroller.updateProduct)
  .delete(productConroller.deleteProduct);
module.exports = ProductRouter;
