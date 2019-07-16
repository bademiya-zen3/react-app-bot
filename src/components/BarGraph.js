import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { connect } from "react-redux";
import { getOption } from "../utils/barReport";
import { getChatBotData } from "../actions/chatbot";
import { prepareChartData } from "../utils/preparebarChartData";
import Loading from "./Loading";

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: "lastTwoDays"
    };
  }

  componentDidMount() {
    this.props.getChatBotData(this.state.dataType);
  }
  getOption = () => {
    let { data } = this.props;
    let { dataType } = this.state;
    let dataForChart = {};
    if (data && data.length !== 0) {
      dataForChart = prepareChartData(data);
      return getOption(
        dataForChart["Report Type"],
        dataForChart[dataType],
        dataType
      );
    }
    return {};
  };
  selectOption = event => {
    event.preventDefault();
    let { value } = event.target;
    this.setState(() => ({ dataType: value }));
  };
  render() {
    let { data } = this.props;
    return (
      <div className="chart-1">
        {data && data.length !== 0 ? (
          <>
            <select
              style={{
                position: "relative",
                left: "20%",
                marginTop: "2%",
                width: "150px",
                borderRadius: "5px"
              }}
              value={this.state.currentType}
              onChange={this.selectOption}
            >
              <option value="lastTwoDays">Last Two Days </option>
              <option value="monthToDate">Monthly </option>
              <option value="yearly">Yearly</option>
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
  return { data: state.barReport };
};
const mapDispatchToProps = {
  getChatBotData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarGraph);
