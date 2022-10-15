import { Component } from "react";
import { GameContext } from "../context";

class Start extends Component {
  render() {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <img src="/GG30.gif" alt="GhostGame logo" />
        <GameContext.Consumer>
          {({ toggleView }) => (
            <button className="gameButton" onClick={() => toggleView("game")}>
              START
            </button>
          )}
        </GameContext.Consumer>
      </div>
    );
  }
}

export default Start;
