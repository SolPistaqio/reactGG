import React, { Component } from "react";
import Team from "./team";

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
