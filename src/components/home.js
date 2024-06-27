import React from "react";
import "./Home.css"; // Make sure to import your CSS file
import service1 from "./svg1.svg";
import service2 from "./svg2.svg";
import service3 from "./svg3.svg";
import tick from "./tick.svg";
import Connect from "./connect";
import Header from "./header";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="circle-container top-right-circles">
        <div
          className="circle large"
          style={{ top: "10px", right: "10px" }}
        ></div>
        <div
          className="circle medium partial"
          style={{ top: "100px", right: "80px" }}
        ></div>
        <div
          className="circle small"
          style={{ top: "200px", right: "150px" }}
        ></div>
      </div>
      <div className="circle-container bottom-left-circles">
        <div
          className="circle large partial"
          style={{ bottom: "10px", left: "10px" }}
        ></div>
        <div
          className="circle medium"
          style={{ bottom: "100px", left: "80px" }}
        ></div>
        <div
          className="circle small partial"
          style={{ bottom: "200px", left: "150px" }}
        ></div>
      </div>
      <Header />
      <div style={{ paddingTop: "200px" }}>
        <h1 style={{ fontSize: "50px", paddingLeft: "12%" }}>
          Welcome to Angelinterface: Discover the reciprocal of AI
        </h1>
        <span style={{ paddingLeft: "32%" }}>
          {" "}
          Implement AI-driven insights, or secure your digital assets, we have
          the expertise to exceed your expectations
        </span>
        <div className="button-container">
          <button
            className="custom-button"
            onClick={() => (window.location.href = "/about")}
          >
            About Us
          </button>
          <button
            className="custom-button"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="services-section" id="services">
        <h2>Our Services</h2>
        <p>
          Angelinterface provides a full spectrum of IT services, including AI
          solutions, software development, cybersecurity, cloud computing, and
          IT consulting. Whether you're looking to optimize operations,
          implement AI-driven insights, or secure your digital assets, we have
          the expertise to exceed your expectations.
        </p>
        <div className="services-images">
          <div className="service-item">
            <img src={service1} alt="Service 1" />
            <p>
              <h3 style={{ fontWeight: "bold" }}>AI Solutions</h3>
              <span
                style={{ fontWeight: "bold", color: "grey", fontSize: "18px" }}
              >
                A range of technologies and services that leverage artificial
                intelligence to solve business problems
              </span>
            </p>
          </div>
          <div className="service-item">
            <img src={service2} alt="Service 2" />
            <p>
              <h3 style={{ fontWeight: "bold" }}>Software Development</h3>
              <span
                style={{ fontWeight: "bold", color: "grey", fontSize: "18px" }}
              >
                The process of designing, creating, deploying, and maintain
                software applications and systems.
              </span>
            </p>
          </div>
          <div className="service-item">
            <img src={service3} alt="Service 3" />
            <p>
              <h3 style={{ fontWeight: "bold" }}>Cybersecurity</h3>
              <span
                style={{ fontWeight: "bold", color: "grey", fontSize: "18px" }}
              >
                Cybersecurity refers to the practice of protecting systems,
                networks, and data from digital attacks.
              </span>
            </p>
          </div>
        </div>
        <div className="services-images">
          <div className="service-item">
            <img src={service1} alt="Service 4" />
            <div>
              <h3 style={{ fontWeight: "bold" }}>Cloud Computing</h3>
              <p
                style={{ fontWeight: "bold", color: "grey", fontSize: "18px" }}
              >
                Cloud computing provides access to computing resources over the
                internet, offering scalability, flexibility, and cost-efficiency
                for businesses.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img src={service3} alt="Service 5" />
            <div>
              <h3 style={{ fontWeight: "bold" }}>IT Consulting</h3>
              <p
                style={{ fontWeight: "bold", color: "grey", fontSize: "18px" }}
              >
                IT consulting services provide expert advice and guidance on
                technology strategies, implementations, and optimizations to
                drive business success.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img src={service2} alt="Service 6" />
            <div>
              <h3 style={{ fontWeight: "bold" }}>Data Analytics</h3>
              <p
                style={{ fontWeight: "bold", color: "grey", fontSize: "18px" }}
              >
                Data analytics involves examining large datasets to uncover
                trends, patterns, and insights that can inform business
                decisions and strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-us">
        <h1>Why Choose Us?</h1>
        <p
          style={{
            fontWeight: "30px",
            fontSize: "20px",
            color: "grey",
          }}
        >
          Angelinterface stands out as a leader in IT services due to our
          commitment to excellence, innovation, and client satisfaction.
        </p>
        <div className="why-choose-us-info">
          <img src={tick} alt="Tick Mark" className="tick-mark" />
          <span>Excellence in service delivery</span>
        </div>
        <div className="why-choose-us-info">
          <img src={tick} alt="Tick Mark" className="tick-mark" />
          <span>Innovative solutions</span>
        </div>
        <div className="why-choose-us-info">
          <img src={tick} alt="Tick Mark" className="tick-mark" />
          <span>Client-focused approach</span>
        </div>
        <div className="why-choose-us-info">
          <img src={tick} alt="Tick Mark" className="tick-mark" />
          <span>Global presence</span>
        </div>
        <div className="why-choose-us-info">
          <img src={tick} alt="Tick Mark" className="tick-mark" />
          <span>Continuous innovation</span>
        </div>
        <div className="why-choose-us-info">
          <img src={tick} alt="Tick Mark" className="tick-mark" />
          <span>Quality assurance</span>
        </div>
      </div>
      <div className="company-image" style={{ paddingTop: "50px" }}>
        <img
          src="https://www.bluetaletechno.com/images/about/about-image.svg"
          alt="Company Image"
        />
      </div>
      <div className="vision-mission-container">
        <div className="vision-mission-card">
          <h3>Our Vision</h3>
          <p>
            To be the leading provider of innovative IT solutions worldwide,
            transforming businesses and improving lives through technology.
          </p>
        </div>
        <div className="vision-mission-card">
          <h3>Our Mission</h3>
          <p>
            To deliver exceptional value to our clients by leveraging advanced
            technology, fostering a culture of innovation, and ensuring
            sustainable growth and profitability.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
