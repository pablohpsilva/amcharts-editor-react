import React, { Component } from 'react';

export default class EditChart extends Component {

  render() {
    return (
      <div>
        {JSON.stringify(this.props)}
        <div>
          <label htmlFor="width">width</label>
          <input id="width" value={this.props.width} onChange={this.props.handleWidth} />

          <label htmlFor="height">height</label>
          <input id="height" value={this.props.height} onChange={this.props.handleHeight} />

          <label htmlFor="margin">margin</label>
          <textarea id="margin" value={JSON.stringify(this.props.margin)} onChange={this.props.handleMargin} />
        </div>

        <div>
          <label htmlFor="line">
            <input type="radio" name="chart" value="line" onChange={this.props.handleChartType} />
            Line
          </label>
          <label htmlFor="area">
            <input type="radio" name="chart" value="area" onChange={this.props.handleChartType} />
            Area
          </label>
          <label htmlFor="bar">
            <input type="radio" name="chart" value="bar" onChange={this.props.handleChartType} />
            Bar
          </label>
          <label htmlFor="line">
            <input type="radio" name="chart" value="line" onChange={this.props.handleChartType} />
            Line
          </label>
          <label htmlFor="pie">
            <input type="radio" name="chart" value="pie" onChange={this.props.handleChartType} />
            Pie
          </label>
          <label htmlFor="radar">
            <input type="radio" name="chart" value="radar" onChange={this.props.handleChartType} />
            Radar
          </label>
          <label htmlFor="radialbar">
            <input type="radio" name="chart" value="radialbar" onChange={this.props.handleChartType} />
            Radialbar
          </label>
          <label htmlFor="scatter">
            <input type="radio" name="chart" value="scatter" onChange={this.props.handleChartType} />
            Scatter
          </label>
          <label htmlFor="treemap">
            <input type="radio" name="chart" value="treemap" onChange={this.props.handleChartType} />
            Treemap
          </label>
        </div>
      </div>
    );
  }
}
