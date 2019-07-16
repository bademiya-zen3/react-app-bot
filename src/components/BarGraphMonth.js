import React, { Component } from "react";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";
import { getOption } from "../utils/barMonth";
import { getEmailBotData } from "../actions/emailbot";
import { prepareChartData } from "../utils/preparebarChartData";
import Loading from "./Loading";

class BarGraphMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTypes: ["Daily", "Weekly", "Monthly"],
      currentFilter: "monthly"
    };
  }
  componentDidMount() {
    this.props.getEmailBotData(this.state.currentFilter);
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
  handleFilterClick(filter) {
    this.setState({ currentFilter: filter }, () => {
      this.props.getEmailBotData(this.state.currentFilter);
    });
  }
  render() {
    let { data } = this.props;
    return (
      <div className="chart-2">
        {data && data.length !== 0 ? (
          <>
            <ReactEcharts option={this.getOption()} />
            <div className="filters">
              <ul>
                {this.state.filterTypes.map(filter => (
                  <li
                    style={{
                      display: "inline-block",
                      margin: "5px",
                      padding: "5px",
                      cursor: "pointer",
                      width: "7%",
                      color: "#fff",
                      backgroundColor: "#5bc0de",
                      borderRadius: "7px",
                      textAlign: "center"
                    }}
                    key={filter}
                    onClick={this.handleFilterClick.bind(
                      this,
                      filter.toLowerCase()
                    )}
                  >
                    {filter}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.barMonthly };
};
const mapDispatchToProps = {
  getEmailBotData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarGraphMonth);
