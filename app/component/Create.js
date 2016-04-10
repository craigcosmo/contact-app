import React from "react";
import {PropTypes} from "react";


export default class Create extends React.Component{
	constructor(){
		super();


		this.state = {
			id:null,
			firstName:'',
			lastName: '',
			email:'',
			phone: '',
			gender:'',
			address: {
				address1:'',
				address2:'',
				postalCode: '',
				isActive: false 
			}
		};
	}
	mergeUpdateAddress (key, val) {
		const state = AddonUpdate(this.state, {
			address: { 
				key : {	$set: val }
			}
		});		
		this.setState(state);
	}
	updateAddressObject(key,val){
		// console.log(key, val);
		const thats = this.state;
		const r = {};
		r[key] =val;
		const state = Object.assign({}, thats, {
		   address: Object.assign({}, thats.address, r)
		});
		this.setState(state);
	}
	
	emailChange(e){
		this.setState({
			email: e.target.value
		})
	}
	firstNameChange(e){
		this.setState({
			firstName: e.target.value
		})
	}
	lastNameChange(e){
		this.setState({
			lastName: e.target.value
		})
	}
	genderChange(e){
		this.setState({
			gender: e.target.value
		})
	}
	phoneChange(e){
		this.setState({
			phone: e.target.value
		})
	}
	address1Change(e){
		this.updateAddressObject('address1',e.target.value);
	}
	address2Change(e){
		this.updateAddressObject('address2',e.target.value);
	}
	postalCodeChange(e){
		this.updateAddressObject('postalCode',e.target.value);
	}
	isActiveChange(e){
		this.updateAddressObject('isActive',!this.state.address.isActive);
	}
	componentWillMount(){
		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact');
	}
	validateForm(callback){
		const fname = this.state.firstName;
		if(!fname){
			alert('first name must be provided');
			return;
		}else{
			callback && callback();
		}
	}
	navigate () { 
		this.context.router.push('/');
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state);
		this.validateForm(function (){
			this.firebaseRef.push(this.state, function (res){
				// in firebase null mean nothing wrong, success
				if(res === null){
					// console.log('insert success');
					// redirect to home
					this.navigate();
				}
			}.bind(this));
		}.bind(this));
	}
	render(){ 

		return(
			<div class="row">
				<form id="new-form" onSubmit={this.handleSubmit.bind(this)}>
					
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.firstNameChange.bind(this)} id="first-name" placeholder="First Name" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.lastNameChange.bind(this)} id="last-name" placeholder="Last Name" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.phoneChange.bind(this)} id="phone" placeholder="Phone" />
					</div>
					<div class="form-group">
						<input type="email" class="form-control" onChange={this.emailChange.bind(this)} id="email" placeholder="Email" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.genderChange.bind(this)} id="gender" placeholder="Gender" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.address1Change.bind(this)} id="address1" placeholder="Address Line 1" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.address2Change.bind(this)} id="address2" placeholder="Address Line 2" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.postalCodeChange.bind(this)} id="postal-code" placeholder="Postal Code" />
					</div>
					<div class="checkbox">
						<label>
						<input type="checkbox" checked={this.state.address.isActive} onChange={this.isActiveChange.bind(this)} /> Is Active?
						</label>
					</div>
					<div class="form-group text-right">
						<button type="submit" class="btn btn-default" >Done</button>
					</div>
					<div class="form-group ">
						<a href="#">Delete This Contact</a>
					</div>
				</form>
			</div>
		)
	}
}


Create.contextTypes = {
    router: PropTypes.object.isRequired
}