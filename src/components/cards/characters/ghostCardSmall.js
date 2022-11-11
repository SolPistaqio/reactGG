import React, { PureComponent } from "react";

import Ghost3Small from "../../characterIMG/Ghost3-small";
import Ghost1Small from "../../characterIMG/Ghost1-small";
import Ghost2Small from "../../characterIMG/Ghost2-small";
import HealthBar from "./elements/healthBar";
class GhostCardSmall extends PureComponent {
  render() {
    const ghosts = { 1: Ghost1Small, 2: Ghost2Small, 3: Ghost3Small };
    const Ghost = ghosts[this.props.ghost.type];
    return (
      <div className="ghostCardSmall">
        <Ghost
          color1={this.props.ghost.color1}
          color2={this.props.ghost.color2}
        />

        <HealthBar
          currentHealth={this.props.ghost.currentHealth}
          maxHealth={this.props.ghost.maxHealth}
          big={false}
        />
      </div>
    );
  }
}

export default GhostCardSmall;
