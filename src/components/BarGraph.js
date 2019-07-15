import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';  
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import {getBarOption} from '../utils/barData';


export default class BarGraph extends Component {
    constructor(props){
        super(props);
        this.state={
            xAxisType:'lastTwoDays'
        }
    }
     getOption = () => {
       return getBarOption(this.props.data,this.state.xAxisType);
    }
    selectOption = (event) =>{
        event.preventDefault();
       this.setState({xAxisType:event.target.value});
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
