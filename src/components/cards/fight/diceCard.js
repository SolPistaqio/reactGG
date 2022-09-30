import React, { Component } from "react";
import "../../css/dice.css";

class Dice extends Component {
  render() {
    return (
      <div className="dice">
        <div className="result">{this.props.result}</div>
      </div>
    );
  }
}

export default Dice;
