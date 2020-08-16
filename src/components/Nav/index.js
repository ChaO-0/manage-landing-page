import React, { useState } from "react";
import logo from "./logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import "./style.css";

const Nav = () => {
  const [Open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav>
        <div className="brand">
          <img src={logo} alt="Logo" />
        </div>
        <div className="items">
          <ul>
            <li>
              <a href="index.html">Pricing</a>
            </li>
            <li>
              <a href="index.html">Product</a>
            </li>
            <li>
              <a href="index.html">About Us</a>
            </li>
            <li>
              <a href="index.html">Careers</a>
            </li>
            <li>
              <a href="index.html">Community</a>
            </li>
          </ul>
        </div>
        <div className="start">
          <button>Get Started</button>
        </div>
        {Open ? (
          <img
            src={close}
            alt="Close"
            className="burger"
            onClick={handleClick}
          />
        ) : (
          <img
            src={hamburger}
            alt="Hamburger"
            className="burger"
            onClick={handleClick}
          />
        )}
      </nav>
      <div
        className="menu-collapse"
        style={{ display: Open ? "block" : "none" }}
      >
        <div className="list">
          <p>Pricing</p>
          <p>Product</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Community</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
