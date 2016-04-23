import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router";
import linkState from "react-link-state";
import * as UpdateAction from "../action/UpdateAction";
import UpdateStore from "../store/UpdateStore";


export default class Update extends React.Component{
	constructor(){
		super();

		this.state = {
			items: {
				id: null,
				firstName: '',
				lastName: '',
				email:  '',
				phone:  '',
				gender:  '',
				address: {
					address1:'',
					address2:'',
					postalCode: '',
					isActive: false 
				}
			}
		};
	}

	componentWillMount(){
		const query = this.props.location.query.key;

		UpdateAction.getIt(query);
		UpdateStore.on('change', this.loadContact.bind(this))
	}
	componentWillUnmount() {
		UpdateStore.removeListener('change', this.loadContact.bind(this));
	}
	loadContact(){
		this.setState({
			items: UpdateStore.loadIt()
		})
	}
	redirect(){
		this.context.router.push('/');
	}
	deleteContact(e){
		e.preventDefault();
		this.firebaseRef.remove();
		this.context.router.push('/');
	}
	navigate () { 
		this.context.router.push('/');
	}
	handleUpdate(e){
		e.preventDefault();
		if(!this.state.items.firstName) {alert('first name must be provided'); return; }

		const status = this.firebaseRef.update(this.state.items, function (){
			// in firebase return null mean nothing wrong
			// if(res === null){
				console.log('updated');
				this.navigate();
			// }
		}.bind(this));
	}
	render(){ 

		const cancelbtn = {
			marginRight: '20px'
		};
		return(
			
			<div class="row">
				<form id="new-form" onSubmit={this.handleUpdate.bind(this)}>
					
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.firstName')}  class="form-control"  id="first-name" placeholder="First Name"  />
					</div>
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.lastName')}  class="form-control"  id="last-name" placeholder="Last Name"  />
					</div>
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.phone')}  class="form-control"  id="phone" placeholder="Phone"  />
					</div>
					<div class="form-group">
						<input type="email" valueLink={linkState(this, 'items.email')} class="form-control" id="email" placeholder="Email"  />
					</div>
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.gender')} class="form-control"  id="gender" placeholder="Gender"  />
					</div>
					<div class="form-group">
						<input type="text"  valueLink={linkState(this, 'items.address.address1')} class="form-control" id="address1" placeholder="Address Line 1"  />
					</div>
					<div class="form-group">
						<input type="text"  valueLink={linkState(this, 'items.address.address2')} class="form-control" id="address2" placeholder="Address Line 2" />
					</div>
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.address.postalCode')} class="form-control" id="postal-code" placeholder="Postal Code"  />
					</div>
					<div class="checkbox">
						<label>
						<input type="checkbox" checkedLink={linkState(this, 'items.address.isActive')} /> Is Active?
						</label>
					</div>
					<div class="form-group text-right">
						<Link to="/" class="btn btn-default" style={cancelbtn}>Cancel</Link>
						<button type="submit" class="btn btn-default" >Update</button>
					</div>
					<div class="form-group ">
						<a href="#" onClick={this.deleteContact.bind(this)}>Delete This Contact</a>
					</div>
				</form>
			</div>
		)
	}
}


Update.contextTypes = {
    router: PropTypes.object.isRequired
}