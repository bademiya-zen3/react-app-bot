import React, { Component } from 'react'
import {connect} from 'react-redux';
import BarGraph from './BarGraph';
import BarGraphSecond from './BarGraphSecond';
import Pie from './Pie';
import {getBarData} from '../actions/index';
 class App extends Component {
     componentDidMount(){
     this.props.getBarData();
     }  
    render() {
        return (
            <div className='container'>               
                 <BarGraph data={this.props.barData}/>
                 <BarGraphSecond />
                 <Pie />    
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps ={
    getBarData
}
export default connect(mapStateToProps,mapDispatchToProps)(App);