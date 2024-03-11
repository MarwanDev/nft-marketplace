import React from "react";
import "./HomeCard.css";
import future from "../../assets/future.jpg";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeCard = () => {
  return (
    <Link className="card-container" to="/details">
      <img
        src={future}
        alt="card"
        style={{ borderRadius: 47, maxHeight: 360 }}
      />
      <button className="card-btn">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <p style={{ fontSize: 16 }}>Go to Collection</p>
          <FaLongArrowAltRight />
        </div>
      </button>
      <div className="card-details">
        <div className="card-header">
          <h2 className="card-name">Future</h2>
          <p className="card-price">120 NTF</p>
        </div>
        <p style={{ color: "#617587", fontSize: 14 }}>
          Price Range : 0.12BTC - 0.18BTC
        </p>
        <p style={{ color: "#23252B", lineHeight: "150%" }}>
          Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod
          tempor...
        </p>
        <div className="profile-container" style={{ margin: "18px 0" }}>
          <img src={avatar} alt="profile" style={{ width: 68, height: 68 }} />
          <div className="profile-details">
            <div className="artist">Artist</div>
            <div className="artist-name">Léa Jacquot</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
