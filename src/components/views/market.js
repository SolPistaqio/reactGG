import React, { Component } from "react";
import MarketCard from "../cards/marketCard";

class Market extends Component {
  render() {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          border: "3px solid #1919ae",
          padding: "20px",
          margin: "20px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <h1
          style={{ color: "white", textAlign: "center", gridColumn: "1 / 4" }}
        >
          Ghost Market
        </h1>
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </div>
    );
  }
}

export default Market;
