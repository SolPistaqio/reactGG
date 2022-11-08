import React, { Component } from "react";
import GhostCardSmall from "../characters/ghostCardSmall";
import Roll from "./rollCard";
import { Icon } from "@iconify/react";
import Result from "./resultCard";

class Duel extends Component {
  state = { width: 0 };
  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    if (this.state.width < 900) {
      return (
        <div
          style={{
            width: "clamp(350px, 100%, 1000px)",
            border: "3px dotted #fbf100",
          }}
        >
          <div
            style={{
              whiteSpace: "nowrap",
              marginBottom: "-20px",
            }}
          >
            <GhostCardSmall ghost={this.props.duel.player.ghost} />
            <Roll
              throws={this.props.duel.player.throws}
              result={this.props.duel.player.result}
              mod={this.props.duel.player.ghost.mod}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Result win={this.props.duel.won} />
            <Icon icon="charm:swords" color="white" height="40px" />
            <Result win={!this.props.duel.won} />
          </div>
          <div
            style={{
              textAlign: "right",
              marginTop: "-20px",
            }}
          >
            <Roll
              throws={this.props.duel.enemy.throws}
              result={this.props.duel.enemy.result}
              mod={this.props.duel.enemy.ghost.mod}
            />
            <GhostCardSmall ghost={this.props.duel.enemy.ghost} />
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            width: "clamp(356px, 100%, 900px)",
            border: "3px dotted #fbf100",
            textAlign: "center",
          }}
        >
          <GhostCardSmall ghost={this.props.duel.player.ghost} />
          <Roll
            throws={this.props.duel.player.throws}
            result={this.props.duel.player.result}
            mod={this.props.duel.player.ghost.mod}
          />
          {"  "}
          <Result win={this.props.duel.won} />
          <Icon icon="charm:swords" color="white" height="40px" />
          <Result win={!this.props.duel.won} />
          {"  "}
          <Roll
            throws={this.props.duel.enemy.throws}
            result={this.props.duel.enemy.result}
            mod={this.props.duel.enemy.ghost.mod}
          />
          <GhostCardSmall ghost={this.props.duel.enemy.ghost} />
        </div>
      );
    }
  }
}

export default Duel;
