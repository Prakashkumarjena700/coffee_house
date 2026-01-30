const express = require("express");
const authRoutes = require("./AuthRoutes");
const productRoutes = require("./ProductRoutes");
const orderRoutes = require("./OrderRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);


module.exports = router;
