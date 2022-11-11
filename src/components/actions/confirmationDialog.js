import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

class Confirmation extends Component {
  render() {
    return (
      <Modal
        show={true}
        onHide={() => this.props.cancel}
        size="lg"
        centered
        animation={false}
        dialogClassName="modalContent"
      >
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h1>{this.props.text}</h1>
              </Col>
            </Row>
            <Row className="mt-5 d-grid gap-4 d-md-flex justify-content-center">
              <Col>
                <button className=" gameButton" onClick={this.props.confirm}>
                  Confirm
                </button>
              </Col>
              <Col>
                <button className=" gameButton" onClick={this.props.cancel}>
                  Cancel
                </button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Confirmation;
