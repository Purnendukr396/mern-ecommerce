const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/moongoose-connection");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});




