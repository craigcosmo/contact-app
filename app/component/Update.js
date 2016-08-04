import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router";
import linkState from "react-link-state";
import * as UpdateAction from "../action/UpdateAction";
import UpdateStore from "../store/UpdateStore";


export default class Update extends React.Component{
	constructor(){
		super();
		this.loadContact = this.loadContact.bind(this);
		this.redirect = this.redirect.bind(this);
		this.navigate = this.navigate.bind(this);
		this.deleteContact = this.deleteContact.bind(this);
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
		UpdateStore.on('change', this.loadContact)
	}
	componentWillUnmount() {
		UpdateStore.removeListener('change', this.loadContact);
		UpdateStore.removeListener('change', this.redirect);
		UpdateStore.removeListener('change', this.navigate);
	}
	loadContact(){
		this.setState({
			items: UpdateStore.loadIt()
		})
	}
	updateContact(e){
		e.preventDefault();
		if(!this.state.items.firstName) {alert('first name must be provided'); return; }

		const payload = this.state.items;
		UpdateAction.updateIt(payload);
		UpdateStore.on('change', this.redirect)
	}
	deleteContact(e){
		e.preventDefault();
		UpdateAction.removeIt();
		UpdateStore.on('change', this.navigate);	
	}
	navigate() { 
		this.context.router.push('/');
	}
	redirect() { 
		this.context.router.push('/');
	}
	
	render(){ 

		const cancelbtn = {
			marginRight: '20px'
		};
		return(
			<div class="row">
				<form id="new-form" onSubmit={this.updateContact.bind(this)}>
					
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.firstName')}  class="form-control" placeholder="First Name"  />
					</div>
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.lastName')}  class="form-control"  placeholder="Last Name"  />
					</div>
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.phone')}  class="form-control"   placeholder="Phone"  />
					</div>
					<div class="form-group">
						<input type="email" valueLink={linkState(this, 'items.email')} class="form-control"  placeholder="Email"  />
					</div>
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.gender')} class="form-control"  placeholder="Gender"  />
					</div>
					<div class="form-group">
						<input type="text"  valueLink={linkState(this, 'items.address.address1')} class="form-control" placeholder="Address Line 1"  />
					</div>
					<div class="form-group">
						<input type="text"  valueLink={linkState(this, 'items.address.address2')} class="form-control"  placeholder="Address Line 2" />
					</div>
					<div class="form-group">
						<input type="text" valueLink={linkState(this, 'items.address.postalCode')} class="form-control"  placeholder="Postal Code"  />
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