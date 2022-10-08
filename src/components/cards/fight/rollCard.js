import React, { PureComponent } from "react";
import Dice from "./diceCard";

class Roll extends PureComponent {
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
        <span style={{ whiteSpace: "nowrap" }}>
          <Dice result={rolls[0]} key="1" /> ||{" "}
          <Dice result={rolls[1]} key="2" />
        </span>
      );
    }

    return (
      <span
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {diceDisplay}+ {this.props.mod}&nbsp; = {this.props.result}
      </span>
    );
  }
}

export default Roll;
