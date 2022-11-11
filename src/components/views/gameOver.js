import { Component } from "react";
import { GameContext } from "../context";

class GameOver extends Component {
  render() {
    return (
      <GameContext.Consumer>
        {({ toggleView, startNewGame, gameWon }) => (
          <div style={{ display: "grid", placeItems: "center" }}>
            <img
              style={{ maxWidth: "100%", maxHeight: "70%" }}
              src={gameWon ? "/victory.gif" : "/defeat.gif"}
              alt="Final screen"
            />
            <button
              className="gameButton"
              onClick={() => {
                startNewGame();
                toggleView("game");
              }}
            >
              START AGAIN
            </button>
          </div>
        )}
      </GameContext.Consumer>
    );
  }
}

export default GameOver;
