import React, {Component, createElement} from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
	chart: {
		type: 'pie'
	},
	xAxis: {
		categories: ['Jan', 'Feb', 'Mar']
	},
	plotOptions: {
		pie: {
			innerSize: '70%'
		}
	},
	legend: {
		symbolHeight: 10,
		symbolWidth: 10,
		symbolRadius: 0
	},
	series: [{
		allowPointSelect: true,
		showInLegend: true,
		data: [30, 45, 25]
	}]
};

class PieChart extends Component{
	constructor(){
		super();
	}

	render() {
		return createElement(ReactHighcharts, {config});
	}

}

export default PieChart;