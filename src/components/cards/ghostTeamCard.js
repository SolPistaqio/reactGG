import React, { Component } from "react";

import TeamCard from "./teamCard";
import AddGhost from "../actions/addPlayer";

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
        <h1 style={{ textAlign: "center", gridColumn: "1 / 4" }}>YOUR TEAM</h1>

        {playerTeam.map((ghost, index) => {
          return <TeamCard ghost={ghost} key={index} />;
        })}

        {addButtons}
      </div>
    );
  }
}

export default Team;
