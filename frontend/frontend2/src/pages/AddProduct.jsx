import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    subCategory: "",
    sizes: "",
    bestseller: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/api/products/add",
        {
          ...formData,
          image: [formData.image],
          sizes: formData.sizes.split(","),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
        subCategory: "",
        sizes: "",
        bestseller: false,
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Add Product</h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image Name (example: shoe.png)"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subCategory"
          placeholder="Sub Category"
          value={formData.subCategory}
          onChange={handleChange}
        />

        <input
          type="text"
          name="sizes"
          placeholder="Sizes (S,M,L or 7,8,9)"
          value={formData.sizes}
          onChange={handleChange}
        />

        <div className="checkbox-group">
          <label htmlFor="bestseller">Bestseller</label>

          <input
            id="bestseller"
            type="checkbox"
            name="bestseller"
            checked={formData.bestseller}
            onChange={handleChange}
          />
        </div>

        <button className="add-product-btn" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;