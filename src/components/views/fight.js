import React, { Component } from "react";

import Duel from "../cards/fight/duelCard";
import { calculateDuel } from "../util/caluculateDuel";
import { GameContext } from "../context";

class Fight extends Component {
  static contextType = GameContext;
  constructor(props) {
    super(props);
  }
  state = {
    duels: [],
    victory: null,
  };

  componentDidMount() {
    const team = this.context.userTeam;
    console.log(this.context.userTeam);
    const duels = [];
    let wins = 0;
    team.forEach((ghost) => {
      const fight = calculateDuel(ghost);
      duels.push(fight);
      if (fight.won) {
        wins += 1;
      }
    });
    this.setState({ duels: [...duels], victory: wins >= 2 });
  }
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplate: "1fr 2fr 2fr 2fr / 1fr",

          padding: "20px",
          border: "3px solid #1919ae",
          margin: "20px",
          justifyItems: "center",
          gridRowGap: "30px",
          height: "80vh;",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "start",
            alignContent: "flex-end",
          }}
        >
          <div>
            <GameContext.Consumer>
              {({ toggleView }) => (
                <button
                  className="gameButton float-left"
                  onClick={() => toggleView("game")}
                >
                  Back To Team
                </button>
              )}
            </GameContext.Consumer>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "10px",
              width: "auto",
              justifySelf: "center",
              width: "100%",
            }}
          >
            <h1>2/1</h1>
            <h1>VICTORY!</h1>
          </div>
        </div>
        {this.state.duels.map((duel, i) => (
          <Duel duel={duel} key={i} />
        ))}
      </div>
    );
  }
}

export default Fight;
