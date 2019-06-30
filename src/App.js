import React, { Component } from "react"; //TODO: how this import works?

import "./App.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

class App extends Component {
  state = {
    teperature: [{
      time: 1561934130042,
      value: 26.6
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
          Temp: <b>{this.state.teperature[0].value}</b> {"\xB0"}C
        </div>

        <div className="centered">
          <small>{this.timeAgo.format(this.state.teperature[0].time)}</small>
        </div>
      </React.Fragment>
    );
  }
}

export default App;