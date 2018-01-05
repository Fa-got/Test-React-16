import React, { Component } from 'react'
import ColumnCart from './columnChart';
import PieChart from './pieChart';

class Comp extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="Comp">
          <PieChart />
			  	<ColumnCart />
      </div>
    )
  }
}

export default Comp
