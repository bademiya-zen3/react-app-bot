import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { connect } from "react-redux";
import { getOption } from "../utils/pie";
import { getPieData } from "../actions/index";

class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: "monthToDate"
    };
    this.selectOption = this.selectOption.bind(this);
  }
  componentDidMount() {
    this.props.getPieData(this.state.dataType);
  }
  selectOption(e) {
    e.preventDefault();
    let { value } = e.target;
    this.setState(
      () => ({ dataType: value }),
      () => {
        this.props.getPieData(this.state.dataType);
      }
    );
  }
  getOption() {
    let data = this.props.data;
    if (data && data.length !== 0) {
      let pieData = data.map(obj => {
        return {
          name: obj.errorType,
          value: obj.value
        };
      });
      const chartVariant = "Error Type";
      return getOption(pieData, chartVariant);
    }
    return {};
  }
  render() {
    return (
      <div className="chart-3">
        <select
          style={{
            position: "relative",
            left: "20%",
            marginTop: "2%",
            marginBottom: "2%",
            width: "150px",
            borderRadius: "5px"
          }}
          value={this.state.dataType}
          onChange={this.selectOption}
        >
          <option value="monthToDate">Month To Date</option>
          <option value="yearToDate">Year To Date</option>
        </select>
        <ReactEcharts option={this.getOption()} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.pieData };
};
const mapDispatchToProps = {
  getPieData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pie);
