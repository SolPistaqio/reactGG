import React from "react";

import Ghost3Small from "../../characterIMG/Ghost3-small";
import Ghost1Small from "../../characterIMG/Ghost1-small";
import Ghost2Small from "../../characterIMG/Ghost2-small";
import HealthBar from "./elements/healthBar";

function GhostCardSmall(props) {
  const ghosts = { 1: Ghost1Small, 2: Ghost2Small, 3: Ghost3Small };
  const Ghost = ghosts[props.ghost.type];
  return (
    <div className="ghostCardSmall">
      <Ghost color1={props.ghost.color1} color2={props.ghost.color2} />

      <HealthBar
        currentHealth={props.ghost.currentHealth}
        maxHealth={props.ghost.maxHealth}
        big={false}
      />
    </div>
  );
}

export default GhostCardSmall;
