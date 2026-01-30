const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
        },
        quentity: Number,
      },
    ],
    totalPrice: Number,
    status: {
      type: String,
      enum: ["pending", "inprogress", "completed", "canceled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model("Orders", orderSchema);

module.exports = Order;
