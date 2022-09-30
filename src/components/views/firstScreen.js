import { Component } from "react";

class Start extends Component {
  render() {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <img src="/GG30.gif" alt="GhostGame logo" />
        <button onClick={() => (gameData.currentView = "game")}>START</button>
      </div>
    );
  }
}

export default Start;
