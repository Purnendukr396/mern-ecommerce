const connectDB = require("./config/moongoose-connection");
const Product = require("./models/product");
const products = require("./data/products");

const seedProducts = async () => {
    try {
        await connectDB();

        await Product.deleteMany();

        await Product.insertMany(products);

        console.log("Products Inserted Successfully");

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
 
seedProducts();