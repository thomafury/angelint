import React from "react";
import "./Connect.css"; // Make sure to import your CSS file
import Header from "./header";
import { SocialIcon } from "react-social-icons";
import Footer from "./footer";

const About = () => {
  return (
    <div>
      <div className="contact-description">
        <Header />
        <h1 style={{ paddingLeft: "6%" }}>About Us</h1>
        <div style={{ paddingLeft: "6%" }}>
          <p>
            Whether you're looking to optimize operations, implement AI-driven
            insights, or secure your digital assets,
          </p>
          <p>
            Angelinterface has the expertise to exceed your expectations. We are
            committed to excellence, innovation, and client satisfaction,
          </p>
          <p>
            {" "}
            making us a trusted partner in your digital transformation journey
          </p>
        </div>
      </div>
      <p style={{ paddingLeft: "120px", marginBottom: "200px" }}>
        <SocialIcon
          url="https://www.linkedin.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com"
          fgColor="grey"
          bgColor="transparent"
        />
      </p>
      <Footer />
    </div>
  );
};
export default About;
