const express = require("express");
const {
  AddProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

const productRoutes = express.Router();

productRoutes.post("/add", AddProduct);
productRoutes.get("/get", getAllProducts);
productRoutes.put("/update/:id", updateProduct);
productRoutes.delete("/delete/:id", deleteProduct);

module.exports = productRoutes;
