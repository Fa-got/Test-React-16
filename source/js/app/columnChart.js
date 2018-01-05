import React, {Component, createElement} from 'react';
import ReactHighcharts from "react-highcharts";

const config = {
	chart: {
		type: 'column'
	},

	title: {
		text: 'Round legend symbols'
	},

	xAxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr']
	},

	legend: {
		symbolHeight: 12,
		symbolWidth: 12,
		symbolRadius: 0
	},

	series: [{
		data: [1, 3, 2, 4]
	}, {
		data: [6, 4, 5, 3]
	}, {
		data: [2, 7, 6, 5]
	}]
};

class ColumnChart extends Component{
	constructor(){
		super()
	}

	render(){
		return createElement(ReactHighcharts, {config});
	}
}

export default ColumnChart;