import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { GameContext } from "../Game";

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
          {({ round, coins }) => (
            <>
              <p
                style={{
                  paddingLeft: "50px",
                }}
              >
                Round: {round}/20 | Wins: 5/10
              </p>
              <p
                style={{
                  textAlign: "right",
                  paddingRight: "50px",
                }}
              >
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
