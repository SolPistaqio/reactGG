import React, { Component } from "react";

import GhostCard from "./ghostCard";
import AddGhost from "./addPlayer";

import "./css/team.css";

class Team extends Component {
  state = {
    team: [
      {
        type: 1,
        maxHealth: 3,
        color1: "",
        color2: "",
        currentHealth: 2,
      },
      {
        type: 2,
        maxHealth: 2,
        color1: "",
        color2: "",
        currentHealth: 2,
      },
      {
        type: 3,
        maxHealth: 2,
        color1: "",
        color2: "",
        currentHealth: 1,
      },
    ],
  };
  render() {
    const playerTeam = this.state.team;
    const needsToAdd = 3 - playerTeam.length;
    let addButtons = "";
    if (needsToAdd > 0) {
      addButtons = [...Array(needsToAdd)].map((e, index) => (
        <AddGhost key={index} />
      ));
    }
    return (
      <div className="team">
        <h1
          style={{ color: "white", textAlign: "center", gridColumn: "1 / 4" }}
        >
          YOUR TEAM
        </h1>

        {playerTeam.map((ghost, index) => {
          return <GhostCard ghost={ghost} key={index} />;
        })}

        {addButtons}
      </div>
    );
  }
}

export default Team;
