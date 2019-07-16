import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { connect } from "react-redux";
import { getOption } from "../utils/pie";
import { getErrorBreakupData } from "../actions/errorBreakup";
import Loading from "./Loading";

class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: "monthToDate"
    };
    this.selectOption = this.selectOption.bind(this);
  }
  componentDidMount() {
    this.props.getErrorBreakupData();
  }
  selectOption(e) {
    e.preventDefault();
    let { value } = e.target;
    this.setState(() => ({ dataType: value }));
  }
  getOption() {
    let data = this.props.data;
    if (data && data.length !== 0) {
      let pieData = data.map(
        ({ e: errorType, count: yearToDate, count1: monthToDate }) => {
          return {
            name: errorType,
            value:
              this.state.dataType === "monthToDate" ? monthToDate : yearToDate
          };
        }
      );
      const chartVariant = "Error Type";
      return getOption(pieData, chartVariant);
    }
    return {};
  }
  render() {
    let data = this.props.data;
    return (
      <div className="chart-3">
        {data && data.length !== 0 ? (
          <>
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
          </>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { data: state.pieData };
};
const mapDispatchToProps = {
  getErrorBreakupData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pie);
