import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router";

export default class List extends React.Component{
	editItem(){
		this.context.router.push({
			pathname: '/create',
			query: {
				key: this.props.key
			}
		});
	}
	createItem(item, index) {
		return (
			<a class="list-group-item" firekey= {item['.key']} key={ item['.key'] } onClick={this.editItem}>
					{ item.firstName }
			</a>
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
List.contextTypes = {
    router: PropTypes.object.isRequired
}