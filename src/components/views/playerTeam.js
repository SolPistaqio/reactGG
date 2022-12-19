import React, { useState, useEffect, useContext } from "react";
import Team from "../cards/player team/ghostTeamCard";
import { GameContext } from "../context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function Game() {
  const game = useContext(GameContext);
  useEffect(() => {
    game.isGameOver();
  });
  const [allert, setAllert] = useState(false);

  const goToFight = (team) => {
    if (team.length === 3) {
      game.isGameOver();
      game.toggleView("fight");
    } else {
      setAllert(true);
    }
  };

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
                    onClick={() => goToFight(userTeam)}
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
        className="alertInfo"
        style={{
          position: "absolute",
          bottom: "0",
        }}
        variant="dark"
        show={allert}
        dismissible
        onClose={() => {
          setAllert(false);
        }}
      >
        You need 3 ghosts for a fight
      </Alert>
    </Container>
  );
}

export default Game;
