import React, { Component } from "react";
import "./App.css";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

class App extends Component {
  state = {
    teperature: [{ time: 1560869528068, value: 26.6 }]
  };

  render() {
    return (
      <React.Fragment>
        <div className="centered">
          Temp: <b>{this.state.teperature[0].value}</b> {"\xB0"}C
        </div>
        <div className="centered">
          <small>{timeAgo.format(this.state.teperature[0].time)}</small>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
