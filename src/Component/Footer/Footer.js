// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="column">
          <h3>Categories</h3>
          <ul>
            <li>Mobile</li>
            <li>Laptop</li>
            <li>Watches</li>
            <li>Fashion</li>
          </ul>
        </div>
        <div className="column">
          <h3>Customer Service</h3>
          <ul>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="column">
          <h3>Connect With Us</h3>
          <p>Follow us on social media for updates and promotions.</p>
          {/* Add social media icons and links */}
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 ShopSwift Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
