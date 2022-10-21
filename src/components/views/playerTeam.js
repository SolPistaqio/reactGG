import React, { Component } from "react";
import Team from "../cards/player team/ghostTeamCard";
import { GameContext } from "../context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Game extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center align-middle">
          <GameContext.Consumer>
            {({ toggleView, userTeam }) => (
              <>
                <Row className="d-flex justify-content-center align-items-center">
                  <Team team={userTeam} />
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <button
                      className="gameButton"
                      onClick={() => toggleView("fight")}
                    >
                      FIGHT!
                    </button>
                  </Col>
                </Row>
              </>
            )}
          </GameContext.Consumer>
        </Row>
      </Container>
    );
  }
}

export default Game;
