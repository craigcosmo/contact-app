import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router";
import linkState from "react-link-state";


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
		// loading data fron db
		const query = this.props.location.query.key;
		console.log('query',query);
		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact/'+query);
		this.firebaseRef.once("value", function (snapshot){
			// const items = [];
			// !snapshot.val() && this.redirect();

			const item = {
				id: snapshot.val().id ? snapshot.val().id : null,
				firstName: snapshot.val().firstName ? snapshot.val().firstName : null,
				lastName: snapshot.val().lastName ? snapshot.val().lastName : '',
				email: snapshot.val().email ? snapshot.val().email : '',
				phone: snapshot.val().phone ? snapshot.val().phone : '',
				gender: snapshot.val().gender ? snapshot.val().gender : '',
				address : {
					address1: snapshot.val().address.address1 ? snapshot.val().address.address1 : '',
					address2: snapshot.val().address.address2 ? snapshot.val().address.address2 : '',
					postalCode: snapshot.val().address.postalCode ? snapshot.val().address.postalCode : '',
					isActive: snapshot.val().address.isActive ? snapshot.val().address.isActive : false
				}
			};

			this.setState({
				items : item
			});
			console.log('this is state',this.state.items);
		}.bind(this));
	}
	componentWillUnmount() {
		this.firebaseRef.off();
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