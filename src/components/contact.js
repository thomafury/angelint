import React from "react";
import "./Connect.css"; // Make sure to import your CSS file
import Connect from "./connect";
import Header from "./header";
import Footer from "./footer";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div>
      <div className="contact-description">
        <Header />
        <h1 style={{ paddingLeft: "6%" }}>Contact</h1>
        <div style={{ paddingLeft: "6%" }}>
          <p>
            Whether you have questions, feedback, or inquiries, simply fill out
            the
          </p>
          <p>
            form, and we will get back to you promptly. Your thoughts matter to
            us,
          </p>
          <p>
            {" "}
            and we are here to assist you every step of the way.Reach out today!
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

export default Contact;
