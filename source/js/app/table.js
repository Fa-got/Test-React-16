import React, { Component } from 'react';

class Table extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return [
		  <li key={this.props.num.num[0]}>Первый элемент</li>,
   		 <li key={this.props.num.num[1]}>Второй элемент</li>,
    	<li key={this.props.num.num[2]}>Третий элемент</li>,
		];
	}
}

export default Table;