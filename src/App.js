import React, { Component } from "react"; //TODO: how this import works?

import "./App.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

class App extends Component {
  state = {
    temperature: [{
      time: 0,
      value: 0
    }]
  };

  constructor() {
    super();
    TimeAgo.addLocale(en);
    this.timeAgo = new TimeAgo("en-US");
  }

  render() {
    return (
      <React.Fragment>
        <div className="centered">
          Temp: <b>{this.state.temperature[0].value}</b> {"\xB0"}C
        </div>

        <div className="centered">
          <small>{this.timeAgo.format(this.state.temperature[0].time)}</small>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    fetch('https://home-monitor-server.firebaseapp.com/temperature')
      .then(response => response.json())
      .then(temperature => this.setState({ temperature }));
  }
}

export default App;