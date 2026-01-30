const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToekn = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET,{ expiresIn: '1h' });
};

exports.Register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.json({
        message: "All fields are required",
        status: false,
      });
    }

    const isEsistUser = await User.findOne({ email: email });

    if (isEsistUser) {
      return res.json({
        message: "Email already registered",
        status: false,
      });
    }

    const haspassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: haspassword,
      phone,
    });

    return res.json({
      message: "Register successful",
      user,
      status: true,
    });
  } catch (err) {
    return res.json({
      message: "Register failed",
      error: err.message,
      status: false,
    });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "All fields are required",
        status: false,
      });
    }

    const isExist = await User.findOne({ email });

    if (!isExist) {
      return res.json({
        message: "User not found",
        status: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, isExist.password);

    if (!isMatch) {
      return res.json({
        message: "Invalid credentials",
        status: false,
      });
    }

    return res.json({
      message: "Login successful",
      token: generateToekn(isExist),
      status: true,
    });
  } catch (err) {
    return res.json({
      message: "Login failed",
      error: err.message,
      status: false,
    });
  }
};
