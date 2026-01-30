const express = require("express");
const { CreateOrder, getAllOrders } = require("../controllers/OrderController");
const auth = require("../middlewares/Auth");

const orderRoutes = express.Router();

orderRoutes.post("/create", auth, CreateOrder);
orderRoutes.get("/get", getAllOrders);

module.exports = orderRoutes;
