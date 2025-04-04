import React from "react";
import "../styles/Footer.css" // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-top mt-4">
        <h3>Subscribe To Get Offers In Your Inbox</h3>
        <p>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum</p>
        <nav>
          <a href="#">Buy T-Shirts</a>
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="social-icons">
          <a href="#"><span>📘</span></a>
          <a href="#"><span>🐦</span></a>
          <a href="#"><span>📸</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 T-Shirts Store | Powered by T-Shirts Store</p>
      </div>
    </footer>
  );
};

export default Footer;
