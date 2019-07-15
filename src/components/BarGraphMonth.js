import React, { Component } from "react";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";
import { getOption, dataArr } from "../utils/barMonth";
import { getData } from "../actions/index";

class BarGraphMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTypes: ["Daily", "Monthly", "Yearly", "Reset"],
      currentFilter: "monthly"
    };
  }
  componentDidMount() {
    this.props.getData(this.state.currentFilter);
  }
  getOption() {
    // let duration = [];
    // let total = [];
    // let classified = [];
    // let completeResponse = [];
    // let partialResponse = [];
    let dataForChart ={};
    this.props.data.forEach(obj => {
     for(let key in obj){
        if(dataForChart[key])
         dataForChart[key].push(obj[key]);
        else{
            dataForChart[key]=[];
            dataForChart[key].push(obj[key]);
        } 
     }   
    //   duration.push(obj.duration);
    //   total.push(obj.total);
    //   classified.push(obj.classified);
    //   completeResponse.push(obj.completeResponse);
    //   partialResponse.push(obj.partialResponse);
    });
    console.log("data for chart")
    console.log(dataForChart)

    return getOption(dataForChart);
  }
  handleFilterClick(filter) {
   
    if (filter === "reset") {
      filter = "monthly";
    }
    this.setState({ currentFilter: filter }, () => {
      this.props.getData(this.state.currentFilter);
    });
  }
  render() {
    console.log("rendering");
    return (
      <div className="chart-2">
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
                  width: "5%",
                  color: "#fff",
                  backgroundColor: "#5bc0de"
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { data: state.dataMonthly };
};
const mapDispatchToProps = {
  getData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarGraphMonth);
