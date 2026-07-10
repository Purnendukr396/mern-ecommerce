const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      image,
      category,
      subCategory,
      sizes,
      bestseller,
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product Added Successfully",
      product,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
};