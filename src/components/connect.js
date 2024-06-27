import React from "react";
import "./Connect.css"; // Make sure to import your CSS file

const Connect = () => {
  return (
    <div className="connect-card">
      <h2>Connect with Us</h2>

      <form className="connect-form">
        <div className="form-row">
          <label>
            Your Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Your Email:
            <input type="email" name="email" required />
          </label>
        </div>
        <label>
          Your Message:
          <textarea name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Connect;
