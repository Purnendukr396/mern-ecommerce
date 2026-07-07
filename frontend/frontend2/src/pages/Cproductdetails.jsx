import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const IMAGE_BASE_URL = "http://mern-ecommerce-z8md.onrender.com/uploads";

const Cproductdetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

 useEffect(() => {
  window.scrollTo(0, 0);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://mern-ecommerce-z8md.onrender.com/api/products");

      const found = res.data.products.find((p) => p._id === id);

      setProduct(found);
    } catch (err) {
      console.log(err);
    }
  };

  fetchProduct();
}, [id]);

  if (!product) return <h1>Loading...</h1>;

return (
  <>
    <div className="product-details">

      <div className="product-image">
        <img
  src={`http://localhost:5000/uploads/${product.image[0]}`}
  alt={product.name}
/>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>

        <p>Select Size</p>
        <div className="sizess">
          {product.sizes?.map((size) => (
            <button key={size}>{size}</button>
          ))}
        </div>

        <button className="add" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>

    <Footer />
  </>
);
}

export default Cproductdetails;
