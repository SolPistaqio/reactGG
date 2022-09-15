import React, { Component } from "react";
import Team from "../cards/ghostTeamCard";

class Game extends Component {
  render() {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <Team />
        <button>FIGHT!</button>
      </div>
    );
  }
}

export default Game;
