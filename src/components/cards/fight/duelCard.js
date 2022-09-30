import React, { Component } from "react";
import GhostCardSmall from "../characters/ghostCardSmall";
import Roll from "./rollCard";
import { Icon } from "@iconify/react";
import Result from "./resultCard";

class Duel extends Component {
  render() {
    const roll1 = { rolls: [10, 7], modificator: 0, finalResult: 10 };
    const roll2 = { rolls: [10], modificator: 1, finalResult: 11 };
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          placeItems: "center",
          justifyItems: "space-around",
          width: "100%",
        }}
      >
        <Result win />
        <GhostCardSmall />
        <Roll roll={roll1} />
        <Icon icon="charm:swords" color="white" height="80px" />
        <Roll roll={roll2} />
        <GhostCardSmall />
        <Result />
      </div>
    );
  }
}

export default Duel;
