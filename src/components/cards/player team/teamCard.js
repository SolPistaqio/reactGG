import React, { Component } from "react";
import { Icon } from "@iconify/react";
import GhostCard from "../characters/ghostCard";
import Confirmation from "../../actions/confirmationDialog";

class TeamCard extends Component {
  state = {
    ghostChosen: false,
  };

  render() {
    let confirm = "";
    if (this.state.ghostChosen) {
      confirm = (
        <Confirmation
          text="Are you sure you want to replace this ghost?"
          confirm={() => console.log("yay!")}
          cancel={() => this.setState({ ghostChosen: false })}
        />
      );
    }
    return (
      <div
        style={{
          display: "inline-grid",
          placeItems: "end",
        }}
      >
        <p style={{ float: "right", fontSize: "20pt", margin: "0" }}>
          <Icon
            icon="fa:refresh"
            color="white"
            height="40px"
            onClick={() => this.setState({ ghostChosen: true })}
          />
        </p>
        <GhostCard />

        {confirm}
      </div>
    );
  }
}

export default TeamCard;
