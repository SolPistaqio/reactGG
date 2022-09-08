import GhostCard from "./ghostCard";
import React, { Component } from "react";

class Team extends Component {
  state = {
    team: [
      {
        type: 1,
        maxHealth: 3,
        color1: "",
        color2: "",
        currentHealth: 2,
      },
      {
        type: 2,
        maxHealth: 2,
        color1: "",
        color2: "",
        currentHealth: 2,
      },
      {
        type: 3,
        maxHealth: 2,
        color1: "",
        color2: "",
        currentHealth: 1,
      },
    ],
  };
  render() {
    return (
      <div
        style={{
          padding: "20px",
          border: "3px solid #1919AE",
          margin: "20px",
          backgroundColor: "black",
          display: "grid",
          placeItems: "center",
          gridTemplate: "1fr 4fr / 1fr 1fr 1fr",
        }}
      >
        <h1 style={{ color: "white", gridColumn: "1 / 4" }}>YOUR TEAM</h1>
        <GhostCard />
        <GhostCard />
        <GhostCard />
      </div>
    );
  }
}

export default Team;
