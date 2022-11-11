import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Duel from "../cards/fight/duelCard";
import { calculateDuel } from "../util/caluculateDuel";
import { GameContext } from "../context";

class Fight extends Component {
  static contextType = GameContext;

  state = {
    duels: [],
    victory: null,
    wins: 0,
    losers: [],
  };

  componentDidMount() {
    const team = this.context.userTeam;

    const duels = [];
    let wins = 0;
    const losers = [];
    team.forEach((ghost) => {
      const fight = calculateDuel(ghost);
      duels.push(fight);

      if (fight.won) {
        wins += 1;
      } else {
        losers.push(ghost);
      }
    });
    this.setState({
      duels: [...duels],
      victory: wins >= 2,
      wins: wins,
      losers: losers,
    });
  }

  render() {
    return (
      <div
        style={{
          padding: "20px",
          border: "3px solid #1919ae",
          margin: "20px",
        }}
      >
        <Row
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "start",
            alignContent: "flex-end",
          }}
        >
          <Col md="auto">
            <GameContext.Consumer>
              {({ toggleView, ghostFigthAftermath }) => (
                <button
                  className="gameButton float-left"
                  onClick={() => {
                    ghostFigthAftermath(this.state.losers, this.state.victory);
                    toggleView("game");
                  }}
                >
                  Back To Team
                </button>
              )}
            </GameContext.Consumer>
          </Col>
          <Col
            style={{
              textAlign: "center",
              padding: "10px",
              justifySelf: "center",
              width: "100%",
              marginTop: "0.5rem",
            }}
          >
            <h1>
              {this.state.wins}/{3 - this.state.wins}
            </h1>
            <h1>{this.state.victory ? "VICTORY!" : "DEFEAT!"}</h1>
          </Col>
        </Row>

        {this.state.duels.map((duel, i) => (
          <Duel duel={duel} key={i} />
        ))}
      </div>
    );
  }
}

Fight.contextType = GameContext;
export default Fight;
