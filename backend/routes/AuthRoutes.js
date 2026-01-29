const express = require("express");
const { Register, Login } = require("../controllers/AuthController");

const authRoutes = express.Router();

authRoutes.post("/register", Register);
authRoutes.post("/login", Login);

module.exports = authRoutes;
