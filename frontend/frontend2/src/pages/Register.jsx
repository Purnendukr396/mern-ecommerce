import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission        
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      alert(response.data.message);

      // Clear the form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Redirect to login page
      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleRegister}>
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="register-btn" type="submit">
          Create Account
        </button>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}

export default Register;