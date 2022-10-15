import React, { Component } from "react";
import "../css/confirmation.css";

class Confirmation extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <h1>{this.props.text}</h1>

          <button className="gameButton" onClick={this.props.confirm}>
            Confirm
          </button>
          <button className="gameButton" onClick={this.props.cancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Confirmation;
