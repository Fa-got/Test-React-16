import React, { Component } from 'react'
import Table from './table';
import Text from './text';

class Comp extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="Comp">
        <h1>
          <Text />
        </h1>  
        <ul>
          <Table num={this.props} />
        </ul>
      </div>
    )
  }
}

export default Comp
