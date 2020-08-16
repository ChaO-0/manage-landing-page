import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";

const Footer = () => {
  const [Error, setError] = useState(false);
  const [Email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(Email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validateEmail();

    if (!valid) setError(true);
    else setError(false);
  };

  return (
    <footer id="footer">
      <div className="main-container">
        <div className="foot-flex">
          <div className="first-footer">
            <img src={logo} alt="logo" />
            <div className="social">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="second-footer">
            <div className="first-nav">
              <div>Home</div>
              <div>Pricing</div>
              <div>Products</div>
              <div>About Us</div>
            </div>
            <div className="second-nav">
              <div>Careers</div>
              <div>Community</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <div className="third-footer">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="footer-input"
                placeholder="Updates in your inbox..."
                value={Email}
                onChange={handleEmail}
                style={{
                  border: Error ? "1px solid hsl(12, 88%, 59%)" : "none",
                }}
              />
              <button className="footer-button">Go</button>
            </form>
            <div
              className="error"
              style={{ display: Error ? "block" : "none" }}
            >
              Please insert a valid email.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
