const Order = require("../models/Order");

exports.CreateOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    const order = await Order.create({
      user: req.user.id,
      items: items,
      totalPrice: totalPrice,
    });

    return res.json({
      message: "Order created successfully",
      order,
      status: true,
    });
  } catch (err) {
    return res.json({
      message: "Order faild",
      status: false,
      err: err.message,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    
    const orders = await Order.find()
      .populate("user", "name phone email")
      .populate("items.product", "name price imageUrl");

    return res.json({
      message: "Lets get orders",
      orders,
    });
  } catch (err) {
    return res.json({
      message: "Not found",
      err: err.message,
    });
  }
};
