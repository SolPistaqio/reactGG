import React, { PureComponent } from "react";

class Dice extends PureComponent {
  render() {
    return (
      <div className={this.props.second ? "dice2" : "dice"}>
        <div className="result">{this.props.result}</div>
      </div>
    );
  }
}

export default Dice;
