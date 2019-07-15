import React, { Component } from 'react'
import BarGraph from './BarGraph';
import BarGraphMonth from './BarGraphMonth';
import Pie from './Pie';
export default class App extends Component {
    render() {
        return (
            <div className='container'>               
                 <BarGraph />
                 <BarGraphMonth />
                 <Pie />    
            </div>
        )
    }
}