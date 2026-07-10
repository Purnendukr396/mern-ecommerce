const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  addProduct,
} = require("../controllers/productController");

const verifyToken = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/adminMiddleware");

router.get("/", getAllProducts);

router.post("/add", verifyToken, verifyAdmin, addProduct);

module.exports = router;