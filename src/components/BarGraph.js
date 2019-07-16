import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { connect } from "react-redux";
import { getOption } from "../utils/barReport";
import { getBarData } from "../actions/index";
import { prepareChartData } from "../utils/preparebarChartData";

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: "lastTwoDays"
    };
  }

  componentDidMount() {
    this.props.getBarData(this.state.dataType);
  }
  getOption = () => {
    let data = this.props.data;
    let dataForChart = {};
    if (data && data.length !== 0) {
      dataForChart = prepareChartData(data);
      return getOption(dataForChart);
    }
    return {};
  };
  selectOption = event => {
    event.preventDefault();
    let { value } = event.target;
    this.setState(
      () => ({ dataType: value }),
      () => {
        this.props.getBarData(this.state.dataType);
      }
    );
  };
  render() {
    return (
      <div className="chart-1">
        <select
          style={{
            position: "relative",
            left: "20%",
            marginTop: "2%",
            width: "150px",
            borderRadius: "5px"
          }}
          value={this.state.dataType}
          onChange={this.selectOption}
        >
          <option value="lastTwoDays">Last Two Days </option>
          <option value="monthToDate">Monthly </option>
          <option value="yearly">Yearly</option>
        </select>
        <ReactEcharts option={this.getOption()} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.barReport };
};
const mapDispatchToProps = {
  getBarData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarGraph);
