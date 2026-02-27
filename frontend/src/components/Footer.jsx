import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopEase</h3>
          <p>Your one-stop shop for everything</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="/products?category=Electronics">Electronics</a></li>
            <li><a href="/products?category=Fashion">Fashion</a></li>
            <li><a href="/products?category=Home">Home & Kitchen</a></li>
            <li><a href="/products?category=Groceries">Groceries</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: kavita@gmail.com</p>
          <p>Phone: +91 8123815488</p>
          <p>Address: Haveri, Karnataka, India</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved. Made with ❤️ in India</p>
      </div>
    </footer>
  );
};

export default Footer;