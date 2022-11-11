import React, { Component } from "react";
import Team from "../cards/player team/ghostTeamCard";
import { GameContext } from "../context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Game extends Component {
  state = {
    allert: false,
  };
  goToFight(team) {
    if (team.length === 3) {
      this.context.toggleView("fight");
    } else {
      this.setState({ allert: true });
    }
  }
  componentDidMount() {
    this.context.isGameOver();
  }
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center align-middle">
          <GameContext.Consumer>
            {({ userTeam }) => (
              <>
                <Row className="d-flex justify-content-center align-items-center team">
                  <Team team={userTeam} />
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <button
                      className="gameButton"
                      onClick={() => this.goToFight(userTeam)}
                    >
                      FIGHT!
                    </button>
                  </Col>
                </Row>
              </>
            )}
          </GameContext.Consumer>
        </Row>
        <Alert
          style={{
            position: "absolute",
            bottom: 0,
            width: "90%",
            margin: "5%",
          }}
          variant="dark"
          show={this.state.allert}
          dismissible
          onClose={() => {
            this.setState({ allert: false });
          }}
        >
          You need 3 ghosts for a fight
        </Alert>
      </Container>
    );
  }
}

Game.contextType = GameContext;
export default Game;
