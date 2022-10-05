import React, { Component } from "react";

import Duel from "../cards/fight/duelCard";
import { calculateDuel } from "../util/caluculateDuel";
import { GameContext } from "../Game";

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
          gridTemplateRows: "1fr 1fr 1fr",
          placeItems: "center",
          padding: "20px",
          border: "3px solid #1919ae",
          margin: "20px",
          justifyItems: "space-around",
          gridRowGap: "30px",
        }}
      >
        {this.state.duels.map((duel, i) => (
          <Duel duel={duel} key={i} />
        ))}
      </div>
    );
  }
}

export default Fight;
