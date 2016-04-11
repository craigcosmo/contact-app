import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router";


export default class Update extends React.Component{
	constructor(){
		super();
		this.state = {
			items: []
		};
		
	}

	componentWillMount(){
		const query = this.props.location.query.key;
		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact/'+query);
		this.firebaseRef.once("value", function (snapshot){
			// const items = [];

			const item = {
				id: snapshot.val().id,
				firstName: snapshot.val().firstName,
				lastName: snapshot.val().lastName ? snapshot.val().lastName : '',
				email: snapshot.val().email ? snapshot.val().email : '',
				phone: snapshot.val().phone ? snapshot.val().phone : '',
				gender: snapshot.val().gender ? snapshot.val().gender : '',
				address1: snapshot.val().address1 ? snapshot.val().address1 : '',
				address2: snapshot.val().address2 ? snapshot.val().address2 : '',
				postalCode: snapshot.val().postalCode ? snapshot.val().postalCode : '',
				isActive: snapshot.val().isActive ? snapshot.val().isActive : ''
			};
			// items.push(item);

			this.setState({
				items : item
			});
			console.log('this is state',this.state.items);
		}.bind(this));
	}
	componentWillUnmount() {
		this.firebaseRef.off();
	}
	
	render(){ 

		// console.log(key);
		const cancelbtn = {
			marginRight: '20px'
		};
		return(
			
			<div class="row">
				<form id="new-form" >
					
					<div class="form-group">
						<input type="text" defaultValue={this.state.items.firstName} ref="firstName" class="form-control"  id="first-name" placeholder="First Name"  />
					</div>
					<div class="form-group">
						<input type="text" ref="lastName" class="form-control"  id="last-name" placeholder="Last Name"  />
					</div>
					<div class="form-group">
						<input type="text" ref="phone" class="form-control"  id="phone" placeholder="Phone"  />
					</div>
					<div class="form-group">
						<input type="email" ref="email" class="form-control" id="email" placeholder="Email"  />
					</div>
					<div class="form-group">
						<input type="text" ref="gender" class="form-control"  id="gender" placeholder="Gender"  />
					</div>
					<div class="form-group">
						<input type="text" ref="address1" class="form-control" id="address1" placeholder="Address Line 1"  />
					</div>
					<div class="form-group">
						<input type="text" ref="address2" class="form-control" id="address2" placeholder="Address Line 2" />
					</div>
					<div class="form-group">
						<input type="text" ref="postalCode" class="form-control" id="postal-code" placeholder="Postal Code"  />
					</div>
					<div class="checkbox">
						<label>
						<input type="checkbox" checked={this.state.isActive} /> Is Active?
						</label>
					</div>
				</form>
			</div>
		)
	}
}


Update.contextTypes = {
    router: PropTypes.object.isRequired
}