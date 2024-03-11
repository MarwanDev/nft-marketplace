import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>marketplace.</h3>
      <div className="icons-container">
        <a
          href="https://www.facebook.com/"
          target="_blank"
        >
          <FaFacebookF
            style={{
              color: "#000",
              fontSize: 20,
            }}
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
        >
          <FaTwitter
            style={{
              color: "#000",
              fontSize: 20,
            }}
          />
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
        >
          <FaDiscord
            style={{
              color: "#000",
              fontSize: 20,
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
        >
          <FaInstagram
            style={{
              color: "#000",
              fontSize: 20,
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
