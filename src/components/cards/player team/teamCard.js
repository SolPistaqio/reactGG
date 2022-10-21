import React, { Component } from "react";
import { Icon } from "@iconify/react";
import GhostCard from "../characters/ghostCard";
import Confirmation from "../../actions/confirmationDialog";
import { GameContext } from "../../context";
import GhostCardSmall from "../characters/ghostCardSmall";

class TeamCard extends Component {
  state = {
    ghostChosen: false,
    width: 0,
  };
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    let confirm = "";
    if (this.state.ghostChosen) {
      confirm = (
        <GameContext.Consumer>
          {({ pickActiveGhost, toggleView }) => (
            <Confirmation
              text="Are you sure you want to replace this ghost?"
              confirm={() => toggleView("market")}
              cancel={() => {
                pickActiveGhost({});
                this.setState({ ghostChosen: false });
              }}
            />
          )}
        </GameContext.Consumer>
      );
    }
    let ghost = <GhostCard ghost={this.props.ghost} />;
    if (this.state.width <= 992) {
      ghost = <GhostCardSmall ghost={this.props.ghost} />;
    }
    return (
      <div
        style={{
          display: "inline-grid",
          placeItems: "end",
        }}
      >
        <p style={{ float: "right", fontSize: "20pt", margin: "0" }}>
          <GameContext.Consumer>
            {({ pickActiveGhost }) => (
              <Icon
                icon="fa:refresh"
                color="white"
                height="40px"
                onClick={() => {
                  pickActiveGhost(this.props.ghost);
                  this.setState({ ghostChosen: true });
                }}
              />
            )}
          </GameContext.Consumer>
        </p>
        {ghost}

        {confirm}
      </div>
    );
  }
}

export default TeamCard;
