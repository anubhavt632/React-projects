import React, { Component } from "react";
import "./index.css";

class ToggleStatus extends Component {
  state = { status: true };

  turnOnStatus = () => {
    // update the status to true
    this.setState({ status: true });
  };
  turnOffStatus = () => {
    // update the status to false
    this.setState({ status: false });
  };

  render() {
    const { status } = this.state;
    return (
      <div className="app">
        <h1>{status ? "ON" : "OFF"}</h1>
        <button onClick={this.turnOnStatus}>ON</button>
        <button onClick={this.turnOffStatus}>OFF</button>
      </div>
    );
  }
}

export default ToggleStatus;
