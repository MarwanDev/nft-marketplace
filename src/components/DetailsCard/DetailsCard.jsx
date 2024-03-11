import React from "react";
import future from "../../assets/future.jpg";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const DetailsCard = () => {
  return (
    <Link
      className="card-container"
      to="/details"
      style={{ paddingBottom: 20 }}
    >
      <img
        src={future}
        alt="card"
        style={{ borderRadius: 47, maxHeight: 360 }}
      />
      <button className="card-btn" style={{ top: "40%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <p style={{ fontSize: 16 }}>Buy</p>
          <FaLongArrowAltRight />
        </div>
      </button>
      <div className="card-details">
        <div className="card-header">
          <h2 className="card-name">Future</h2>
          <p className="card-price" style={{ backgroundColor: "#D4D3EB" }}>
            0.12 BTC
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DetailsCard;
