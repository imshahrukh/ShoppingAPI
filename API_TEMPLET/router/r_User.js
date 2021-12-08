const express = require("express");
const userController = require("./../controller/_Users");
const UserRouter = express.Router();
// POST
// localhost:8000/v1/member

UserRouter.route("/user")
  .post(userController.addUser)
  .get(userController.getAllUser);

// POST
// localhost:8000/v1/member/12345

UserRouter.route("/user/:id")
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = UserRouter;
