import "./AdminLogin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Admin Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      const user = response.data.user;

      // Check Admin
      if (user.role !== "admin") {
        alert("Access Denied! You are not an Admin.");
        return;
      }

      // Save Token
      localStorage.setItem("token", response.data.token);

      // Save User
      localStorage.setItem("user", JSON.stringify(user));

      alert("Admin Login Successful");

      navigate("/admin");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="admin-login-container">

      <form className="admin-login-box" onSubmit={handleLogin}>

        <h1>Admin Login</h1>

        <input
          type="email"
          placeholder="Admin Email"
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

        <button type="submit" className="admin-login-btn">
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;