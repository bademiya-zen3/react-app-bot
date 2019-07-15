import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';  
import {connect} from 'react-redux';
import {getOption} from '../utils/barData';
import {getBarData} from '../actions/index';

 class BarGraph extends Component {
    constructor(props){
        super(props);
        this.state={
            dataType:'lastTwoDays'
        }
    }

    componentDidMount(){
        this.props.getBarData(this.state.dataType);
        }
    
      
     getOption = () => {
       let data =  this.props.data;
       if(data && data.length!==0){
              let reportTypes= data.map((obj) => obj.reportType);
              let dataValues = data.map((obj) => obj.value);
              let resultType = data[0].dataType;
         return getOption(reportTypes,dataValues,resultType);      
       }  
      return {};
    }
    selectOption = (event) =>{
        event.preventDefault();
        let {value}= event.target;
       this.setState(() =>({dataType:value}),() => { this.props.getBarData(this.state.dataType)});
    }
	render() {
		return (
            <div className='chart-1'>
                <select style={{position:'relative',left:'50%',marginTop:'2%',width:'150px'}} value={this.state.xAxisType} onChange={this.selectOption}>
                    <option  value='lastTwoDays'>Last Two Days </option>
                    <option  value='monthToDate'>Monthly </option>
                    <option  value='yearly'>Yearly</option>
                </select>
				<ReactEcharts
					option={this.getOption()} />
			</div>
		);
	}
}
const mapStateToProps = (state) => {
    //console.log(Array.isArray(state.barData));
    return {data:state.barData};
}
const mapDispatchToProps ={
    getBarData
}

export default connect(mapStateToProps,mapDispatchToProps)(BarGraph);
