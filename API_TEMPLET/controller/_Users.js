const _USERS = require("../model/Users");

exports.addUser = async function (req, res) {
  try {
    const user = await _USERS.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getAllUser = async function (req, res) {
  try {
    var user = await _USERS.find();

    const tot_pr = Object.keys(user).length;

    res.status(201).json({
      status: "success",
      user: tot_pr,
      data: {
        user: user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getUserById = async function (req, res) {
  try {
    var user = await _USERS.findById(req.params.id);

    res.status(201).json({
      tatus: "success",
      data: {
        user: user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateUser = async function (req, res) {
  try {
    console.log(req.params.id);
    var user = await _USERS.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.deleteUser = async function (req, res) {
  try {
    var user = await _USERS.deleteOne({ _id: req.params.id });

    res.status(201).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
