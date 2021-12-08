const _ORDERS = require("../model/Orders");

exports.addOrder = async function (req, res) {
  try {
    const order = await _ORDERS.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        order: order,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getAllOrder = async function (req, res) {
  try {
    var order = await _ORDERS.find();

    const tot_pr = Object.keys(order).length;

    res.status(201).json({
      status: "success",
      tot_com: tot_pr,
      data: {
        order: order,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getOrderById = async function (req, res) {
  try {
    var order = await _ORDERS.findById(req.params.id);

    res.status(201).json({
      tatus: "success",
      data: {
        order: order,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateOrder = async function (req, res) {
  try {
    var order = await _ORDERS.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        order: order,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.deleteOrder = async function (req, res) {
  try {
    var order = await _ORDERS.deleteOne({ _id: req.params.id });

    res.status(201).json({
      status: "success",
      data: {
        order: order,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
