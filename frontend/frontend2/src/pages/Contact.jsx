import React from 'react'
import "./Contact.css";
import { assets } from "../assets/assets";
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <div className="parentdiv">
      <h1><span>CONTACT</span> US ----</h1>
    </div>
    <div className="contact-container">
      <div className="contact-image">
        <img src={assets.contact_img} alt="contact" />
      </div>

      <div className="contact-content">
        <h2>Our Store</h2>

        <p>
          54709 Willms Station <br />
          Suite 350, Washington, USA
        </p>

        <p>
          Tel: (415) 555-0132 <br />
          Email: admin@forever.com
        </p>

        <h2>Careers at Forever</h2>

        <p>
          Learn more about our teams and job openings.
        </p>

        <button>Explore Jobs</button>
      </div>
    </div>
    <Footer></Footer>
  



    </>
  )
}

export default Contact
