import React, { Component } from "react";
import "./style.css";
class Greet extends Component {
  render() {
    return (
      <div className="greet">
        <h1 className="display-6">AlgoVision</h1>
        <hr className="dropdown-divider" />
        <h1 className="display-6">Visualize your favorite Algorithms</h1>
      </div>
    );
  }
}

export default Greet;
