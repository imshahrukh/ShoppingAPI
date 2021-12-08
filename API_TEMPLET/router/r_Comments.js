const express = require("express");
const commentController = require("./../controller/_Comments");
const commentRouter = express.Router();
// POST
// localhost:8000/v1/member

commentRouter
  .route("/comment")
  .post(commentController.addComment)
  .get(commentController.getAllComment);

// POST
// localhost:8000/v1/member/12345

commentRouter
  .route("/comment/:id")
  .get(commentController.getCommentById)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);
module.exports = commentRouter;
