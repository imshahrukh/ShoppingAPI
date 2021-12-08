const _PRODUCTS = require("../model/Products");

exports.addProduct = async function (req, res) {
  try {
    const products = await _PRODUCTS.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        product: products,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getAllProduct = async function (req, res) {
  try {
    var products = await _PRODUCTS.find();

    const tot_pr = Object.keys(products).length;

    res.status(201).json({
      status: "success",
      total: tot_pr,
      data: {
        products: products,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getProductById = async function (req, res) {
  try {
    var products = await _PRODUCTS.findById(req.params.id);

    res.status(201).json({
      tatus: "success",
      data: {
        product: products,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateProduct = async function (req, res) {
  try {
    var product = await _PRODUCTS.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        product: product,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.deleteProduct = async function (req, res) {
  try {
    var product = await _PRODUCTS.deleteOne({ _id: req.params.id });

    res.status(201).json({
      status: "success",
      data: {
        product: product,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
