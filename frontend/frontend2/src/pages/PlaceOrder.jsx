import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function PlaceOrder() {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Order Placed Successfully!");

      clearCart();

    navigate("/");
  };

  return (
    <div className="checkout-container">

      <form
        className="checkout-box"
        onSubmit={handlePlaceOrder}
      >

        <h2>Checkout</h2>

        <div className="row">

          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

        </div>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Full Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <div className="row">

          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />

        </div>

        <div className="row">

          <input
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />

        </div>

        <h3>Select Payment Method</h3>

        <div className="payment">

          <label>
            <input
              type="radio"
              name="payment"
              value="COD"
              checked={formData.payment === "COD"}
              onChange={handleChange}
            />
            Cash On Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Card"
              checked={formData.payment === "Card"}
              onChange={handleChange}
            />
            Credit / Debit Card
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={formData.payment === "UPI"}
              onChange={handleChange}
            />
            UPI
          </label>

        </div>

        <button
          className="place-order-btn"
          type="submit"
        >
          PLACE ORDER
        </button>

      </form>

    </div>
  );
}

export default PlaceOrder;