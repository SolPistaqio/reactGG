import React, { Component } from "react";
import "../css/confirmation.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
//import Button from "react-bootstrap/Button";

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
        <Modal.Body closeButton>
          <Container>
            <Row>
              <Col>
                <h1>{this.props.text}</h1>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <button className="gameButton" onClick={this.props.confirm}>
                  Confirm
                </button>
              </Col>
              <Col style={{ display: "flex", justifyContent: "right" }}>
                <button className="gameButton" onClick={this.props.cancel}>
                  Cancel
                </button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      // <div className="confModal">
      //   <div className="confModal-content">
      //     <h1>{this.props.text}</h1>

      //     <button className="gameButton" onClick={this.props.confirm}>
      //       Confirm
      //     </button>
      //     <button className="gameButton" onClick={this.props.cancel}>
      //       Cancel
      //     </button>
      //   </div>
      // </div>
    );
  }
}

export default Confirmation;
