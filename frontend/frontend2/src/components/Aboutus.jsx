import React from 'react'
import './Aboutus.css'
import { assets } from '../assets/assets';

const Aboutus = () => {
  return (
    <div className="aboutus">
        <h2>ABOUT US ----</h2>
        <div className="content">
            <div className="left-content">
              <img src={assets.about_img} alt=""/>
            </div>
            <div className="right-content">
              <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
              <br/>
              <br/>
              <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
               <br/>
              <br/>
              <h3>Our Mission</h3>
                 <br/>
              <br/>
              <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>


            </div>
        </div>
        <div className="why-choose-us">

      <h2>
        WHY CHOOSE US <span></span>
      </h2>

      <div className="features">

        <div className="feature-card">
          <h3>Quality Assurance:</h3>

          <p>
            We meticulously select and vet each
            product to ensure it meets our stringent
            quality standards.
          </p>
        </div>

        <div className="feature-card">
          <h3>Convenience:</h3>

          <p>
            With our user-friendly interface and hassle-
            free ordering process, shopping has never
            been easier.
          </p>
        </div>

        <div className="feature-card">
          <h3>Exceptional Customer Service:</h3>

          <p>
            Our team of dedicated professionals is here to
            assist you every step of the way, ensuring your
            satisfaction is our top priority.
          </p>
        </div>

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
      
    </div>
  )
}

export default Aboutus
