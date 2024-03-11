import React from "react";
import { SlidingCard } from "../../components";
import { HomeCard } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SlidingCard />
      <h3
        style={{
          marginLeft: 70,
          marginTop: 30,
          color: "#000",
          fontSize: 24,
          fontWeight: 800,
        }}
      >
        Collections
      </h3>
      <div className="collections">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
