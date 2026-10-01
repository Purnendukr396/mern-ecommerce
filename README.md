# 🛒 MERN E-Commerce Website

A full-stack **E-Commerce web application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.
The project demonstrates core full-stack development concepts including product management, REST APIs, database integration, authentication, and a responsive frontend.

## ✨ Features

### 👤 User Features

* User registration and login
* User authentication
* Browse products
* View product details
* Add products to cart
* Update cart quantity
* Remove products from cart
* View total price
* Responsive user interface

### 🛍️ Product Features

* Display products dynamically
* Product details page
* Product images
* Product price and description
* Product category
* Product search/filter functionality

### ⚙️ Backend Features

* RESTful API
* Express.js server
* MongoDB database
* CRUD operations
* API-based frontend/backend communication
* Error handling

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios / Fetch API

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas

### Tools

* Git & GitHub
* VS Code
* Postman
* npm

---

## 📁 Project Structure

```text
mern-ecommerce/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔄 How It Works

```text
User
  ↓
React Frontend
  ↓
REST API
  ↓
Express.js + Node.js
  ↓
MongoDB
  ↓
Response
  ↓
React UI
```

The frontend sends requests to the backend API.
The Express/Node.js backend processes the request and communicates with MongoDB.
The server then sends the response back to the React frontend.

---

