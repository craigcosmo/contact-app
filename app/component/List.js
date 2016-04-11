import React from "react";
import {Link} from "react-router";

export default class List extends React.Component{
	createItem(item, index) {
		return (
			<Link to="create" class="list-group-item" key={ item.id }>
					{ item.firstName }
			</Link>
		);
	}
	render(){ 
		return(
			<div class="row max-height">
				<div class="list-group">
					{this.props.userList.map(this.createItem.bind(this))}
				</div>
			</div>
		)
	}
}
