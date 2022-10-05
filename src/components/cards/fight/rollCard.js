import React, { Component } from "react";
import Dice from "./diceCard";

class Roll extends Component {
  render() {
    const rolls = this.props.throws;
    console.log(rolls);
    const hasA10 = rolls.includes(10);
    if (hasA10) {
      rolls.splice(rolls.indexOf(10), 1, 0);
    }
    console.log(rolls);
    let diceDisplay = "";
    if (rolls.length < 2) {
      diceDisplay = <Dice result={rolls[0]} key="1" />;
    } else {
      diceDisplay = (
        <div>
          <Dice result={rolls[0]} key="1" />
          <Dice result={rolls[1]} key="2" />
        </div>
      );
    }

    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          justifyItems: "space-around",
          width: "100%",
          gridTemplateColumns: "2fr 1fr 1fr",
          margin: "20px",
        }}
      >
        {diceDisplay}
        <div style={{ whiteSpace: "nowrap" }}>+ {this.props.mod}</div>
        <div style={{ whiteSpace: "nowrap" }}>&nbsp; = {this.props.result}</div>
      </div>
    );
  }
}

export default Roll;
