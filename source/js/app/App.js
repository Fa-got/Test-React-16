import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Comp from './Comp'

class App extends Component {
  constructor() {
    super()
    this.num = [1,2,3];
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="App">
        <Comp num={this.num}  />
      </div>
    )
  }
}

export default App
