const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.json({
        message: "Please provide token",
        status: false,
      });
    }

    const user = await jwt.verify(token, process.env.JWT_SECRET);

    if (user) {
      req.user = user;
      next();
    }
    
  } catch (err) {
    return res.json({
      message: "Auth Faild",
      status: false,
    });
  }
};

module.exports = auth;
