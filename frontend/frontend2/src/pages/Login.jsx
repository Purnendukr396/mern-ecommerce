import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      localStorage.setItem("token", response.data.token);

    // Save logged-in user
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

      alert(response.data.message);

      // Save user or token if your backend returns it
      // localStorage.setItem("token", response.data.token);

      // Clear the form
      setFormData({
        email: "",
        password: "",
      });

      // Redirect to home page
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>Login</h1>

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

        <button className="login-btn" type="submit">
          Login
        </button>

        <div className="login-links">
          <button
            type="button"
            className="link-btn"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>

          <button
            type="button"
            className="link-btn"
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;