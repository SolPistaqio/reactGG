import React from "react";
import Ghost1 from "../../characterIMG/Ghost1";
import Ghost2 from "../../characterIMG/Ghost2";
import Ghost3 from "../../characterIMG/Ghost3";
import HealthBar from "./elements/healthBar";

function GhostCard(props) {
  const ghosts = { 1: Ghost1, 2: Ghost2, 3: Ghost3 };
  const Ghost = ghosts[props.ghost.type];
  return (
    <div className="ghostCard">
      <Ghost color1={props.ghost.color1} color2={props.ghost.color2} />
      <HealthBar
        currentHealth={props.ghost.currentHealth}
        maxHealth={props.ghost.maxHealth}
        big={true}
      />
    </div>
  );
}

export default GhostCard;
