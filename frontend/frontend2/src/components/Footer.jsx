import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets';


const Footer = () => {
  return (
    <div>
        <div className="policy">

      <div className="policy-card">
        <img src={assets.exchange_icon} alt="" />
        <h3>Easy Exchange Policy</h3>
        <p>We offer hassle free exchange policy</p>
      </div>

      <div className="policy-card">
        <img src={assets.quality_icon} alt="" />
        <h3>7 Days Return Policy</h3>
        <p>We provide 7 days free return policy</p>
      </div>

      <div className="policy-card">
        <img src={assets.support_img} alt="" />
        <h3>Best customer support</h3>
        <p>We provide 24/7 customer support</p>
      </div>
      

    </div>
    <div className="newsletter">
    <h2>Subscribe now & get 20% off</h2>

    <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>

    <div className="subscribe-box">
        <input
            type="email"
            placeholder="Enter your email"
        />

        <button>SUBSCRIBE</button>
    </div>
</div>
<div className="site-footer">

      <div className="site-footer-content">

        <div className="site-footer-left">
          <img src={assets.logo} alt="logo" />

          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>

       <div className="site-footer-center">
  <h2>COMPANY</h2>

  <p>Home</p>
  <p>About us</p>
  <p>Delivery</p>
  <p>Privacy Policy</p>
</div>

       <div className="site-footer-right">
  <h2>GET IN TOUCH</h2>

  <p>+1-212-456-7890</p>
  <p>contact@foreveryou.com</p>
</div>

      </div>

      <hr />

      <p className="copyright">
        Copyright 2024@ forever.com - All Right Reserved.
      </p>

    </div>
    
      
    </div>
  )
}

export default Footer
