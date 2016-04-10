import React from "react";
import {Link} from "react-router";

export default class List extends React.Component{

	render(){ 
		console.log('this is the list',this.props.userList);
		return(
			<div class="row">
				<ul class="list-group">
					{this.props.userList}
					<button class="list-group-item">craig</button>
					<button class="list-group-item">john</button>
					<button class="list-group-item">defaultdef</button>
					<button class="list-group-item">son</button>
					<button class="list-group-item">kaka</button>
					<button class="list-group-item">adoft</button>
				</ul>
			</div>
		)
	}
}