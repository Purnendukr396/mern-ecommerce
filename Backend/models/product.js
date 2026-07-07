const mongoose = require("mongoose"); 

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: [String],
    category: String,
    subCategory: String,
    sizes: [String],
    bestseller: Boolean
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;