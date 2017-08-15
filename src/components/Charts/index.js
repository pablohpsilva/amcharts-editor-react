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
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  Treemap,
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
      chartWidth: this.props.width || 600,
      chartHeight: this.props.height || 300,
      chartMargin: this.props.margin || { top: 5, right: 30, left: 20, bottom: 5 },
      chartData: this.props.data,
      chart: null,
      chartUtil: null,
      showCartesianGrid: this.props.cartesianGrid,
      chartStrokeGrid: this.props.strokeGrid,
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
      this.setState({ chart: LineChart });
      this.setState({ chartUtil: Line });
      return;
    }
    switch(type.toLowerCase().replace('chart', '')) {
      case 'area':
        this.setState({ chart: AreaChart });
        this.setState({ chartUtil: Area });
        break;
      case 'bar':
        this.setState({ chart: BarChart });
        this.setState({ chartUtil: Bar });
        break;
      case 'line':
        this.setState({ chart: LineChart });
        this.setState({ chartUtil: Line });
        break;
      case 'pie':
        this.setState({ chart: PieChart });
        this.setState({ chartUtil: Pie });
        break;
      case 'radar':
        this.setState({ chart: RadarChart });
        this.setState({ chartUtil: Radar });
        break;
      case 'radialbar':
        this.setState({ chart: RadialBarChart });
        this.setState({ chartUtil: RadialBar });
        break;
      case 'scatter':
        this.setState({ chart: ScatterChart });
        this.setState({ chartUtil: Scatter });
        break;
      case 'tree':
        this.setState({ chart: Treemap });
        break;
      default:
        this.setComponent()
        return;
    }
  }

  render() {
    window.setTimeout(() => {
      this.setComponent(this.props.type)
    }, 1E3);
    const AuxChart = this.state.chart;
    const AuxChartUtil = this.state.chartUtil;

    return (
      AuxChart
        ? (<AuxChart
            width={this.state.chartWidth}
            height={this.state.chartHeight}
            data={this.state.chartData}
            margin={this.state.chartMargin}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {
              this.state.showCartesianGrid
                ? (<CartesianGrid strokeDasharray={this.state.chartStrokeGrid || "2 5"} />)
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
