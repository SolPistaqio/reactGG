import React, { Component } from "react";

import Duel from "../cards/fight/duelCard";
import { calculateDuel } from "../util/caluculateDuel";
import { GameContext } from "../context";

class Fight extends Component {
  static contextType = GameContext;

  state = {
    duels: [],
    victory: null,
    wins: 0,
    losers: [],
  };

  componentDidMount() {
    const team = this.context.userTeam;

    const duels = [];
    let wins = 0;
    const losers = [];
    team.forEach((ghost) => {
      const fight = calculateDuel(ghost);
      duels.push(fight);

      if (fight.won) {
        wins += 1;
      } else {
        losers.push(ghost);
      }
    });
    this.setState({
      duels: [...duels],
      victory: wins >= 2,
      wins: wins,
      losers: losers,
    });
  }

  render() {
    return (
      <div className="figthWrapper">
        <div className="header">
          <GameContext.Consumer>
            {({ toggleView, ghostFigthAftermath }) => (
              <button
                className="gameButton float-left"
                onClick={() => {
                  ghostFigthAftermath(this.state.losers, this.state.victory);
                  toggleView("game");
                }}
              >
                Back To Team
              </button>
            )}
          </GameContext.Consumer>
        </div>
        <div className="textHeader">
          <h1>
            {this.state.wins}/{3 - this.state.wins}
          </h1>
          <h1>{this.state.victory ? "VICTORY!" : "DEFEAT!"}</h1>
        </div>
        {this.state.duels.map((duel, i) => (
          <Duel duel={duel} key={i} />
        ))}
      </div>
    );
  }
}

Fight.contextType = GameContext;
export default Fight;
