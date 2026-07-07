import React from 'react'
import {Routes,Route} from 'react-router-dom'


import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact' 
import Product from './pages/Product'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder' 
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import ProductDetails from "./pages/ProductDetails";
import Cproductdetails from "./pages/Cproductdetails";
import CartProvider from "./context/CartContext";
import Register from './pages/Register'






const App = () => {
  return (
    <div className='container'>
      
      <CartProvider>
        <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
<Route path='/product/:productId' element={<Product />} />
<Route path='/cart' element={<Cart />} />
<Route path='/login' element={<Login />} />
<Route path='/place-order' element={<PlaceOrder />} />
<Route path='/orders' element={<Orders />} />
<Route path="/productdetails/:id" element={<ProductDetails />} />
<Route path="/Cproductdetails/:id" element={<Cproductdetails />} />
<Route path="/register" element={<Register />} />



      </Routes>
      </CartProvider>
      
    </div>
  )
}

export default App
