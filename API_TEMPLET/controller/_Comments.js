const _COMMENTS = require("../model/Comments");

exports.addComment = async function (req, res) {
  try {
    const comment = await _COMMENTS.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        comment: comment,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getAllComment = async function (req, res) {
  try {
    var comment = await _COMMENTS.find();

    const tot_pr = Object.keys(comment).length;

    res.status(201).json({
      status: "success",
      tot_com: tot_pr,
      data: {
        comment: comment,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getCommentById = async function (req, res) {
  try {
    var comment = await _COMMENTS.findById(req.params.id).populate("userId");

    res.status(201).json({
      tatus: "success",
      data: {
        comment: comment,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateComment = async function (req, res) {
  try {
    var comment = await _COMMENTS.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        comment: comment,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.deleteComment = async function (req, res) {
  try {
    var comment = await _COMMENTS.deleteOne({ _id: req.params.id });

    res.status(201).json({
      status: "success",
      data: {
        comment: comment,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
