import React, { Component } from "react";
import Dice from "../cards/diceCard";
import GhostCardSmall from "../cards/ghostCardSmall";

class Fight extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 2fr",
          placeItems: "center",
          padding: "20px",
          border: "3px solid #1919ae",
          margin: "20px",
          justifyItems: "space-around",
          gridRowGap: "30px",
        }}
      >
        <GhostCardSmall />
        <div style={{ visibility: "hidden" }}>Result</div>
        <Dice />
        <Dice />
        <div>Result</div>
        <GhostCardSmall />

        <GhostCardSmall />
        <div>Result</div>
        <Dice />
        <Dice />
        <div>Result</div>
        <GhostCardSmall />

        <GhostCardSmall />
        <div>Result</div>
        <Dice />
        <Dice />
        <div>Result</div>
        <GhostCardSmall />
      </div>
    );
  }
}

export default Fight;
