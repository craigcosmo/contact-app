import React from "react";
import {Link} from "react-router";

export default class List extends React.Component{
	// componentWillMount(){
	// 	console.log('this is the list',this.props.userList);
	// }
	// console.log('this is the list',this.props.userList);
	// constructor(){
	// 	super();
	// 	this.state= this.props.userList;
	// }
	componentDidUpdate(){
		console.log(this.props.userList);
		this.setState(this.props.userList);
	}
	render(){ 
		console.log(this.state);
		
		return(
			<div class="row">
				
			</div>
		)
	}
}

// <ul class="list-group">
// {
// 	this.props.userList.map( first => {
//       return <button class="list-group-item">{first}</button>
//     });
// }
// </ul>