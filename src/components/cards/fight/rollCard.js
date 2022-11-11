import React, { PureComponent } from "react";
import Dice from "./diceCard";

class Roll extends PureComponent {
  render() {
    const rolls = this.props.throws;

    const hasA10 = rolls.includes(10);
    if (hasA10) {
      rolls.splice(rolls.indexOf(10), 1, 0);
    }

    let diceDisplay = "";
    if (rolls.length < 2) {
      diceDisplay = <Dice result={rolls[0]} key="1" />;
    } else {
      diceDisplay = (
        <span>
          <Dice result={rolls[0]} key="1" />
          <Dice result={rolls[1]} second key="2" />
        </span>
      );
    }

    return (
      <span>
        {diceDisplay}+ {this.props.mod}&nbsp; = {this.props.result}
      </span>
    );
  }
}

export default Roll;
