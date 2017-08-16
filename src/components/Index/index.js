import React, { Component } from 'react';
import Charts from '../Charts/index.js';
import EditChart from '../EditChart/index.js';
import List from '../List/index.js';
import logo from './logo.svg';
import './Index.css';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      width: 600,
      height: 300,
      type: 'line',
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    }
  }

  handleWidth({ target }) {
    const width = Number(target.value) || 100
    this.setState({ width })
  }

  handleHeight({ target }) {
    const height = Number(target.value) || 100
    this.setState({ height })
  }

  handleMargin({ target }) {
    if (/^[\],:{}\s]*$/.test(target.value.replace(/\\["\\\/bfnrtu]/g, '@').
      replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
      replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      const margin = JSON.parse(target.value)
      this.setState({ margin })
    }
  }

  handleChartType({ target }) {
    const type = target.value
    this.setState({ type })
  }

  render() {
    return (
      <div className="Index">
        <div className="Index-header">
          <img src={logo} className="Index-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Index-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List />

        {JSON.stringify(this.state)}

        <EditChart
          handleWidth={this.handleWidth.bind(this)}
          handleHeight={this.handleHeight.bind(this)}
          handleMargin={this.handleMargin.bind(this)}
          handleChartType={this.handleChartType.bind(this)}
          width={this.state.width}
          height={this.state.height}
          chart={this.state.chart}
          margin={this.state.margin} />

        <Charts
          cartesianGrid
          data={data}
          type={this.state.type}
          width={this.state.width}
          height={this.state.height}
          chart={this.state.chart}
          margin={this.state.margin} />
      </div>
    );
  }
}
