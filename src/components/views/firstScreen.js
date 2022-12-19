import { GameContext } from "../context";

function Start() {
  return (
    <div className="heroWrapper">
      <img className="hero" src="/GG30.gif" alt="GhostGame logo" />
      <GameContext.Consumer>
        {({ toggleView, startNewGame }) => (
          <button
            className="gameButton"
            onClick={() => {
              startNewGame();
              toggleView("game");
            }}
          >
            START
          </button>
        )}
      </GameContext.Consumer>
    </div>
  );
}

export default Start;
