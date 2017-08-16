import React, { Component } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  // Pie,
  // PieChart,
  // Radar,
  // RadarChart,
  // RadialBar,
  // RadialBarChart,
  // Scatter,
  // ScatterChart,
  // Treemap,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
// import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.setComponent = this.setComponent.bind(this)

    this.state = {
      chart: null,
      chartUtil: null,
      type: this.props.type
    }
  }

  componentDidMount() {
    this.setComponent(this.props.type);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  setComponent(type) {
    if (!type) {
      this.setState({ type: 'line' });
      this.setState({ chart: LineChart });
      this.setState({ chartUtil: Line });
      return;
    }
    switch(type.toLowerCase().replace('chart', '')) {
      case 'area':
        this.setState({ type: 'area' });
        this.setState({ chart: AreaChart });
        this.setState({ chartUtil: Area });
        break;
      case 'bar':
        this.setState({ type: 'bar' });
        this.setState({ chart: BarChart });
        this.setState({ chartUtil: Bar });
        break;
      case 'line':
        this.setState({ type: 'line' });
        this.setState({ chart: LineChart });
        this.setState({ chartUtil: Line });
        break;
      // case 'pie':
      //   this.setState({ type: 'pie' });
      //   this.setState({ chart: PieChart });
      //   this.setState({ chartUtil: Pie });
      //   break;
      // case 'radar':
      //   this.setState({ type: 'radar' });
      //   this.setState({ chart: RadarChart });
      //   this.setState({ chartUtil: Radar });
      //   break;
      // case 'radialbar':
      //   this.setState({ type: 'radialbar' });
      //   this.setState({ chart: RadialBarChart });
      //   this.setState({ chartUtil: RadialBar });
      //   break;
      // case 'scatter':
      //   this.setState({ type: 'scatter' });
      //   this.setState({ chart: ScatterChart });
      //   this.setState({ chartUtil: Scatter });
      //   break;
      // case 'tree':
      //   this.setState({ type: 'tree' });
      //   this.setState({ chart: Treemap });
      //   break;
      default:
        this.setComponent()
        return;
    }
  }

  render() {
    window.setTimeout(() => {
      if (this.props.type !== this.state.type) {
        this.setComponent(this.props.type)
      }
    }, 5E2);
    const AuxChart = this.state.chart;
    const AuxChartUtil = this.state.chartUtil;

    return (
      AuxChart
        ? (<AuxChart
            width={this.props.width || 600}
            height={this.props.height || 300}
            data={this.props.data}
            margin={this.props.margin || { top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {
              this.props.showCartesianGrid
                ? (<CartesianGrid strokeDasharray={this.props.chartStrokeGrid || "2 5"} />)
                : ''
            }
            {
              AuxChartUtil
                ? (<AuxChartUtil type="monotone" dataKey="pv" fill="#8884d8" />)
                : ''
            }
            {
              AuxChartUtil
                ? (<AuxChartUtil type="monotone" dataKey="uv" fill="#82ca9d" />)
                : ''
            }
          </AuxChart>)
        : null
    );
  }
}
