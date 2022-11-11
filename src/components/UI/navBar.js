import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { GameContext } from "../context";

class NavBar extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-between",
          allignItems: "end",
        }}
      >
        <GameContext.Consumer>
          {({ round, coins, wins }) => (
            <>
              <p className="pl-6">
                Round: {round}/20 | Wins: {wins}/10
              </p>
              <p className="text-end pl-6">
                {coins}
                <Icon
                  icon="mingcute:copper-coin-fill"
                  color="#fbf100"
                  height="40px"
                />
              </p>
            </>
          )}
        </GameContext.Consumer>
      </div>
    );
  }
}

export default NavBar;
