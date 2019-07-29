import React, { Component } from "react";
import ReactDOM from "react-dom";
import GCD from "./gcd";

import "./styles.css";

class App extends Component {
  render() {
    return <GCD />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
