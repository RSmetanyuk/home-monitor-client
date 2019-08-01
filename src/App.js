import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import "./App.css";
import * as constants from "./constants";
import TemperatureChart from "./components/TemperatureChart"

class App extends Component {
  state = {
    temperature: {
      time: null,
      value: null
    }
  };

  constructor() {
    super();
    TimeAgo.addLocale(en);
    this.timeAgo = new TimeAgo("en-US");

    const socket = socketIOClient(constants.BASE_URL);
    socket.on('temperature change', (temperature) => this.setState({ temperature }));
  }

  render() {
    if (this.state.temperature.value) {
      return (
        <React.Fragment>
          <div className="centered">
            Current temperature: <b>{this.state.temperature.value}</b> {"\xB0"}C
          </div>

          <div className="centered">
            <small>{this.timeAgo.format(this.state.temperature.time)}</small>
          </div>

          <div className="centered chart">
            <TemperatureChart temperature={this.state.temperature} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="centered" >
          Waiting for the data from the server...
        </div>
      );
    }
  }
}

export default App;
