import React, { Component } from "react";
import GhostCardSmall from "../characters/ghostCardSmall";
import Roll from "./rollCard";
import { Icon } from "@iconify/react";
import Result from "./resultCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Duel extends Component {
  render() {
    return (
      <Container
        className="py-2"
        fluid
        style={{
          display: "grid",
          placeItems: "center",
          borderTop: "3px dotted #fbf100",
        }}
      >
        <Row
          style={{
            width: "100%",
          }}
        >
          <Col
            m={12}
            style={{
              textAlign: "right",
            }}
          >
            <Roll
              throws={this.props.duel.player.throws}
              result={this.props.duel.player.result}
              mod={this.props.duel.player.ghost.mod}
            />
            <GhostCardSmall ghost={this.props.duel.player.ghost} />
          </Col>

          <Col
            md="auto"
            style={{
              textAlign: "center",
            }}
          >
            <Result win={this.props.duel.won} />
            <Icon icon="charm:swords" color="white" height="40px" />
            <Result win={!this.props.duel.won} />
          </Col>

          <Col m={12}>
            <GhostCardSmall ghost={this.props.duel.enemy.ghost} />
            <Roll
              throws={this.props.duel.enemy.throws}
              result={this.props.duel.enemy.result}
              mod={this.props.duel.enemy.ghost.mod}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Duel;
