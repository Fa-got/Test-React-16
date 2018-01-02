import React, {Component} from 'react';
import { Chart } from 'react-google-charts';

class Text extends Component{
	constructor(){
		super()
	}

	render() {
 		 return[
			 <Chart
				 key ="1"
				 chartType="PieChart"
				 data={[["Task","Day Visitors"],["failures",11],["concerned",5],["bought",2]]}
				 options={{"title":"Visitors","pieHole":0.55,"is3D":false}}
				 graph_id="ScatterChart"
				 width="100%"
				 height="500px"
				 legend_toggle

			 />,
			 <Chart
				 key ="2"
				 chartType="ComboChart"
				data={[["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],
                    ["2012",165,938,522,998,450,614.6],
                    ["2013",135,1120,599,1268,288,682],
                    ["2014",157,139,215,968,1110,609.4],
                    ["2015",139,1110,615,968,215,609.4],
                    ["2016",136,691,629,1026,366,569.6]]}
				width="100%"
				options={{"title":"Bar Chart","seriesType":"bars"}}

			 />


		 ];
	}
}

export default Text;