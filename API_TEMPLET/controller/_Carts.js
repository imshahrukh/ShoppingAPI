const _CARTS = require("../model/Carts");

exports.addCart = async function (req, res) {
  try {
    const cart = await _CARTS.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        cart: cart,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getAllCart = async function (req, res) {
  try {
    var cart = await _CARTS.find().populate("productId");

    const tot_pr = Object.keys(cart).length;

    res.status(201).json({
      status: "success",
      tot_com: tot_pr,
      data: {
        cart: cart,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getCartById = async function (req, res) {
  try {
    var cart = await await _CARTS.findById(req.params.id);

    res.status(201).json({
      tatus: "success",
      data: {
        cart: cart,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
// TODO update
exports.updateCart = async function (req, res) {
  try {
    var cart = await _CARTS.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        cart: cart,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
// TODO delete
exports.deleteCart = async function (req, res) {
  try {
    var cart = await _CARTS.deleteOne({ _id: req.params.id });

    res.status(201).json({
      status: "success",
      data: {
        cart: cart,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
