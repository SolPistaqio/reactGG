import { GameContext } from "../context";

function GameOver() {
  return (
    <GameContext.Consumer>
      {({ toggleView, startNewGame, gameWon }) => (
        <div className="heroWrapper">
          <img
            className="hero"
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

export default GameOver;
