import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router";
import linkState from "react-link-state";
import Input from "../component/Input";
import update from 'react-addons-update';
import firebase from 'firebase'

export default class Create extends React.Component{
	constructor(){
		super();
		this.state = {
			items: {
				id: null,
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
			}
		}
	}
	createId(){

		const no1= new Date().getTime().toString();
		const no2 = (Math.floor(Math.random()*90000) + 10000).toString();
		const total = no1 + no2;
		const id = parseInt(total);

		const that = this.state.items;	
		const ns = update(that, {$merge: {id:id}});
		

		// this.setState({items:ns});

	}
	componentDidMount(){
		this.createId();
	}
	componentWillMount(){
		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact');
	}
	validateForm(callback){
		// console.log(fname);
		const fname = this.state.items.firstName;

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
		this.validateForm(function (){
			this.firebaseRef.push(this.state.items, function (res){
				// in firebase return null mean nothing wrong, success
				if(res === null){
					console.log('inserted');
					this.navigate();
					this.setState = '';
				}
			}.bind(this));
		}.bind(this));
	}
	cancelBtnOnClick(e){
		e.preventDefault();
		this.navigate();
	}
	deleteContact(){
		firebaseRef.child(key).remove();
	}
	render(){ 
		const cancelbtn = {
			marginRight: '20px'
		};
		return(
			<div class="row">
				<form id="new-form" onSubmit={this.handleSubmit.bind(this)}>
					
					<Input linkState ={linkState} state ={this.state} />

		
					<div class="form-group text-right">
						<Link to="/" class="btn btn-default" style={cancelbtn}>Cancel</Link>
						<button type="submit" class="btn btn-default" >Done</button>
					</div>
					<div class="form-group ">
						<a href="#" onClick={this.deleteContact.bind(this)}>Delete This Contact</a>
					</div>
				</form>
			</div>
		)
	}
}


Create.contextTypes = {
    router: PropTypes.object.isRequired
}