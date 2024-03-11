import React from "react";
import stars from "../../assets/stars.jpg";
import avatar from "../../assets/avatar.png";

const DetailsMainCard = () => {
  return (
    <div className="slide-card-container" style={{marginTop: 120, backgroundColor: "rgba(0, 0, 0, 0)"}}>
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
  );
};

export default DetailsMainCard;
