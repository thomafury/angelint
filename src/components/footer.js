import React from "react";
import "./Footer.css"; // Make sure to import your CSS file
import logo from "./logo.svg"; // Adjust the path to your logo image

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>1234 Street Name, City, Country</p>
      </div>
      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Social</h3>
        <ul>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
