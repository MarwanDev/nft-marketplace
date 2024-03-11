import React from "react";
import "./SlidingCard.css";
import stars from "../../assets/stars.jpg";
import avatar from "../../assets/avatar.png";
import ProgressBar from "../ProgressBar/ProgressBar";

const SlidingCard = () => {
  return (
    <>
      <div className="progress-bars-container">
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
      </div>
      <div className="slide-card-container">
        <div className="content-container">
          <p className="trending">Trending Now</p>
          <h2>Night Sky Collection</h2>
          <h3>With the stars</h3>
          <div className="profile-container">
            <img src={avatar} alt="profile" style={{ width: 68, height: 68 }} />
            <div className="profile-details">
              <div className="artist">Artist</div>
              <div className="artist-name">Léa Jacquot</div>
            </div>
          </div>
          <div className="btns-container">
            <button className="buy-btn">Buy</button>
            <button className="collections-btn">See Collections</button>
          </div>
        </div>
        <img
          src={stars}
          style={{
            width: 437,
            height: 411,
            borderRadius: 52,
            marginLeft: "auto",
          }}
          alt="thumbnail"
        />
      </div>
    </>
  );
};

export default SlidingCard;
