import React, { PureComponent } from "react";
import "../../css/dice.css";

class Dice extends PureComponent {
  render() {
    return (
      <div className="dice">
        <div className="result">{this.props.result}</div>
      </div>
    );
  }
}

export default Dice;
