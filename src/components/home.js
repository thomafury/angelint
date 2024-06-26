import React from "react";
import "./Home.css"; // Make sure to import your CSS file
import logo from "./logo.svg";
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src={logo} alt="logo" style={{ width: "240px" }} />
            </a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
        </ul>
      </nav>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
