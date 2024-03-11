import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <a href="/">marketplace</a>
      <button className="wallet-btn">Connect Wallet</button>
    </div>
  );
};

export default Header;
