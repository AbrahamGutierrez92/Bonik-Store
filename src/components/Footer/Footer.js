import React from 'react';
import "./footer.css";
import logoFooter from "../../images/logo.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
         <div>
            <div className="logo-footer">
              <img src={logoFooter} />
            </div>
           <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         </div>

         <div>
            <h2>About Us</h2>

            <p>Careers</p>
            <p>Our Store</p>
            <p>Our Cores</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
         </div>

         <div>
            <h2>Coustomer core</h2>

            <p>Help center</p>
            <p>How to Buy</p>
            <p>Our Cores</p>
            <p>Track your Order</p>
            <p>Corporate & Bulk Purchasing</p>
            <p>Returns & Refunds</p>
         </div>

         <div>
            <h2>Contact Us</h2>

            <p>Address: 701 Washington square south,
                New york, NK 10012, United states.
            </p>
            <p>Email: bonik@store.com</p>
            <p>Phone: +1 123-456-790</p>
            
         </div>
      </div>
    </div>
  )
}

export default Footer;