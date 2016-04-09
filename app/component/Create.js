import React from "react";
import {PropTypes} from "react";

export default class Create extends React.Component{
	constructor(){
		super();
		this.state=null;
	}
	handleSubmit (e) {
		e.preventDefault();
		
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
			firstName: e.target.value
		})
	}
	genderChange(e){
		this.setState({
			lastName: e.target.value
		})
	}
	phoneChange(e){
		this.setState({
			phone: e.target.value
		})
	}
	address1Change(e){
		this.setState({
			address1: e.target.value
		})
	}
	address2Change(e){
		this.setState({
			address2: e.target.value
		})
	}
	postalCodeChange(e){
		this.setState({
			postalCode: e.target.value
		})
	}
	isActiveChange(e){
		if(e.target.checked = true){
			console.log('true');
		}else{
			console.log('false');
		}
		this.setState({
			isActive: e.target.value
		})
	}

	render(){ 

		return(
			<div class="row">
				<form id="new-form" onSubmit={this.handleSubmit.bind(this)}>
					<div class="form-group">
						<input type="email" class="form-control" onChange={this.emailChange.bind(this)} id="email" placeholder="Email" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.firstNameChange.bind(this)} id="first-name" placeholder="First Name" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.lastNameChange.bind(this)} id="last-name" placeholder="Last Name" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.genderChange.bind(this)} id="gender" placeholder="Gender" />
					</div>
					<div class="form-group">
						<input type="text" class="form-control" onChange={this.phoneChange.bind(this)} id="phone" placeholder="Phone" />
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
						<input type="checkbox" checked onChange={this.isActiveChange.bind(this)} /> Is Active?
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