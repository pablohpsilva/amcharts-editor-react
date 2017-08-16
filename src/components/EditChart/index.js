import React, { Component } from 'react';

export default class EditChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 600,
      height: 300,
      chart: 'line',
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    }
  }

  handleWidth({ target }) {
    const width = target.value
    this.setState({ width })
  }

  handleHeight({ target }) {
    const height = target.value
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
    const chart = target.value
    this.setState({ chart })
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        <div>
          <label htmlFor="width">width</label>
          <input id="width" value={this.state.width} onChange={this.handleWidth.bind(this)} />

          <label htmlFor="height">height</label>
          <input id="height" value={this.state.height} onChange={this.handleHeight.bind(this)} />

          <label htmlFor="margin">margin</label>
          <textarea id="margin" value={JSON.stringify(this.state.margin)} onChange={this.handleMargin.bind(this)} />
        </div>

        <div>
          <input type="radio" name="chart" value="line" onChange={this.handleChartType.bind(this)} />
          <input type="radio" name="chart" value="area" onChange={this.handleChartType.bind(this)} />
          <input type="radio" name="chart" value="bar" onChange={this.handleChartType.bind(this)} />
          <input type="radio" name="chart" value="line" onChange={this.handleChartType.bind(this)} />
          <input type="radio" name="chart" value="pie" onChange={this.handleChartType.bind(this)} />
          <input type="radio" name="chart" value="radar" onChange={this.handleChartType.bind(this)} />
          <input type="radio" name="chart" value="radialbar" onChange={this.handleChartType.bind(this)} />
          <input type="radio" name="chart" value="scatter" onChange={this.handleChartType.bind(this)} />
          <input type="radio" name="chart" value="treemap" onChange={this.handleChartType.bind(this)} />
        </div>
      </div>
    );
  }
}
