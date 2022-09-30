import React, { Component } from "react";
import { Icon } from "@iconify/react";
import GhostCard from "./ghostCard";
import Confirmation from "../../actions/confirmationDialog";

class MarketCard extends Component {
  state = {
    ghostChosen: false,
  };

  render() {
    let confirm = "";
    if (this.state.ghostChosen) {
      confirm = (
        <Confirmation
          text="Are you sure you want to buy this ghost for 3 coins?"
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
          border: "3px dotted #FFBB90",
          padding: "20px",
          margin: "20px",
        }}
      >
        <p style={{ float: "right", fontSize: "20pt", margin: "0" }}>
          3
          <Icon
            icon="mingcute:copper-coin-fill"
            color="#fbf100"
            height="40px"
          />
        </p>
        <GhostCard />
        <button
          onClick={() => this.setState({ ghostChosen: true })}
          style={{ justifySelf: "center", marginTop: "10px" }}
        >
          BUY
        </button>
        {confirm}
      </div>
    );
  }
}

export default MarketCard;
