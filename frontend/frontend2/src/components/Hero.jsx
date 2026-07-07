

import React from "react";
import "./Hero.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/Homeproduct";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <p>--------- OUR BESTSELLERS</p>
          <h1>Latest Arrivals</h1>
          <p>SHOP NOW --------</p>
        </div>

        <div className="hero-right">
          <img src={assets.hero_img} alt="Hero" />
        </div>
      </div>

      <div className="collections">
        <div className="title">
          <h2>LATEST COLLECTION</h2>
          <p>Discover the latest trends, handpicked for you</p>
        </div>

        <div className="products">
         {products.map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => navigate(`/productdetails/${item.id}`)}
            >
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <h3>{item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;