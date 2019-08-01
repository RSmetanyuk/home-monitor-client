import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class TemperatureChart extends Component {
  state = {
    timestamps: [],
    chartData: {
      labels: [],
      datasets: [{
        data: [],
        label: "Temperature",
        borderColor: "#3e95cd",
        fill: false,
        cubicInterpolationMode: "monotone"
      }]
    }
  };

  render() {
    return (
      <Line data={this.state.chartData}
        height={300}
        options={{ maintainAspectRatio: false }}
      />);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.temperature.time !== this.state.timestamps[this.state.timestamps.length - 1]) {
      this.setState({
        timestamps: [...this.state.timestamps, nextProps.temperature.time],
        chartData: {
          labels: [...this.state.chartData.labels, Date(nextProps.temperature.time).toString().substr(16, 8)],
          datasets: [{
            data: [...this.state.chartData.datasets[0].data, nextProps.temperature.value],
            label: "Temperature",
            borderColor: "#3e95cd",
            fill: false,
            cubicInterpolationMode: "monotone"
          }]
        }
      });
    }
  }
}

export default TemperatureChart;
