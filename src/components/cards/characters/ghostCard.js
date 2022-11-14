import React, { PureComponent } from "react";
import Ghost1 from "../../characterIMG/Ghost1";
import Ghost2 from "../../characterIMG/Ghost2";
import Ghost3 from "../../characterIMG/Ghost3";
import HealthBar from "./elements/healthBar";

class GhostCard extends PureComponent {
  render() {
    const ghosts = { 1: Ghost1, 2: Ghost2, 3: Ghost3 };
    const Ghost = ghosts[this.props.ghost.type];
    return (
      <div className="ghostCard">
        <Ghost
          color1={this.props.ghost.color1}
          color2={this.props.ghost.color2}
        />
        <HealthBar
          currentHealth={this.props.ghost.currentHealth}
          maxHealth={this.props.ghost.maxHealth}
          big={true}
        />
      </div>
    );
  }
}

export default GhostCard;
