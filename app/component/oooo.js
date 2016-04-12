import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router";

export default class List extends React.Component{
	editItem(e){
		const firekey = e.target.getAttribute('data-firekey');
		this.context.router.push({
			pathname: '/update',
			query: {
				key: firekey
			}
		});
	}
	createItem(item, index) {
		return (
			<li class="list-group-item" data-firekey= {item['.key']} key={ item['.key'] } onClick={this.editItem.bind(this)}>
				<span class="firstName">{ item.firstName }</span>
				<span class="hide lastName ">{ item.lastName }</span>
				<span class="hide email ">{ item.email }</span>
				<span class="hide phone ">{ item.phone }</span>
				<span class="hide gender ">{ item.gender }</span>
				<span class="hide address1 ">{ item.address.address1 }</span>
				<span class="hide address2 ">{ item.address.address2 }</span>
				<span class="hide postalCode ">{ item.address.postalCode }</span>
			</li>
		);
	}
	componentDidMount(){
		const options = {
			valueNames: [ 'firstName','lastName','email','phone','gender','address1','address2','postalCode' ]
		};

		const ul = new List('users', options);
	}
	render(){ 
		return(
			<div id="users">
				<div class="row">
					<br />
					<div class="form-group input-group">
						<input type="text" class="search form-control" placeholder="Search contact..." />
						<span class="input-group-btn">
						<button class="btn btn-default" type="button">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
						</button>
						</span>
					</div>
					<br />
				</div>

				<div class="row max-height">
					<ul class="list list-group">
						{this.props.userList.map(this.createItem.bind(this))}
					</ul>
				</div>
			</div>
		)
	}
}
List.contextTypes = {
    router: PropTypes.object.isRequired
}