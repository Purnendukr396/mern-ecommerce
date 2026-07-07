import React, { useState, useEffect } from "react";
import "./Collectionsidebar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const IMAGE_BASE_URL = "http://localhost:5000/uploads";

const Collectionsidebar = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products"
        );

        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="parent">
      {/* LEFT SIDEBAR */}
      <div className="leftbar">
        <h2>FILTERS</h2>

        <div className="firstfilter">
          <h3>CATEGORIES</h3>
          <br />

          <label>
            <input type="checkbox" />
            Men
          </label>
          <br />

          <label>
            <input type="checkbox" />
            Women
          </label>
          <br />

          <label>
            <input type="checkbox" />
            Kids
          </label>
        </div>

        <div className="secondfilter">
          <h3>TYPE</h3>
          <br />

          <label>
            <input type="checkbox" />
            Topwear
          </label>
          <br />

          <label>
            <input type="checkbox" />
            Bottomwear
          </label>
          <br />

          <label>
            <input type="checkbox" />
            Winterwear
          </label>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rightside">
        <div className="collectionheading">
          <h2>ALL COLLECTIONS</h2>

          <div className="sort">
            <label>Sort By: </label>

            <select>
              <option>Relevant</option>
              <option>Low to High</option>
              <option>High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="products">
          {products.map((item) => (
            <div
              className="card"
              key={item._id}
              onClick={() =>
                navigate(`/Cproductdetails/${item._id}`)
              }
            >
              <img
                src={`${IMAGE_BASE_URL}/${item.image?.[0]}`}
                alt={item.name}
              />

              <p>{item.name}</p>
              <h3>${item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collectionsidebar;