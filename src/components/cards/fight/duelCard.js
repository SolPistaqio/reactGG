import React, { Component } from "react";
import GhostCardSmall from "../characters/ghostCardSmall";
import Roll from "./rollCard";
import { Icon } from "@iconify/react";
import Result from "./resultCard";

class Duel extends Component {
  render() {
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
        <Result win={this.props.duel.won} />
        <GhostCardSmall ghost={this.props.duel.player.ghost} />
        <Roll
          throws={this.props.duel.player.throws}
          result={this.props.duel.player.result}
          mod={this.props.duel.player.ghost.mod}
        />
        <Icon icon="charm:swords" color="white" height="80px" />
        <Roll
          throws={this.props.duel.enemy.throws}
          result={this.props.duel.enemy.result}
          mod={this.props.duel.enemy.ghost.mod}
        />
        <GhostCardSmall ghost={this.props.duel.enemy.ghost} />
        <Result win={!this.props.duel.won} />
      </div>
    );
  }
}

export default Duel;
