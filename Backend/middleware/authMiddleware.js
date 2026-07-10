const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    // Get token from request header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    // Remove "Bearer "
    const token = authHeader.split(" ")[1];

    // Verify token
   const decoded = jwt.verify(token, "mySecretKey");

    // Save user info in request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

module.exports = verifyToken;