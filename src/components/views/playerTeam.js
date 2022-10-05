import React, { Component } from "react";
import Team from "../cards/player team/ghostTeamCard";
import { GameContext } from "../context";

class Game extends Component {
  render() {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        {
          <GameContext.Consumer>
            {({ toggleView, userTeam }) => (
              <>
                <Team team={userTeam} />
                <button onClick={() => toggleView("fight")}>FIGHT!</button>
              </>
            )}
          </GameContext.Consumer>
        }
      </div>
    );
  }
}

export default Game;
