const Product = require("../models/Product");

exports.AddProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    if (!name || !price) {
      return res.json({
        message: "Please add name and price",
        status: false,
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      imageUrl,
    });

    return res.json({
      message: "Product added successfully",
      status: true,
      product,
    });
  } catch (err) {
    return res.json({
      message: "Failed to add product",
      status: false,
      error: err.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.json({
      message: "Get all products successfully",
      products,
    });
  } catch (err) {
    return res.json({
      message: "Not found",
      status: false,
      error: err.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.findByIdAndUpdate(id, req.body);

    return res.send({
      message: "Update success",
      status: true,
    });
  } catch (err) {
    return res.json({
      message: "Error",
      status: false,
      error: err.message,
    });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.findByIdAndDelete({ _id: id });

    return res.send({
      message: "delete success",
      status: true,
    });
  } catch (err) {
    return res.json({
      message: "Error",
      status: false,
      error: err.message,
    });
  }
};
