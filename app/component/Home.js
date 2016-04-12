import React from "react";
import EmptyList from "../component/EmptyList";
import List from "../component/List";	


export default class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			items : []
		};
	}
	componentWillMount(){
		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact');
		this.firebaseRef.once("value", function (snapshot){
			const items = [];
			snapshot.forEach(function(data){
				const item = {
					id: data.val().id ? data.val().id : null,
					firstName: data.val().firstName ? data.val().firstName : null,
					lastName: data.val().lastName ? data.val().lastName : '',
					email: data.val().email ? data.val().email : '',
					phone: data.val().phone ? data.val().phone : '',
					gender: data.val().gender ? data.val().gender : '',
					address : {
						address1: data.val().address.address1 ? data.val().address.address1 : '',
						address2: data.val().address.address2 ? data.val().address.address2 : '',
						postalCode: data.val().address.postalCode ? data.val().address.postalCode : '',
						isActive: data.val().address.isActive ? data.val().address.isActive : false
					}
				};


				item['.key'] = data.key();
				items.push(item);
			}.bind(this));
			this.setState({
				items : items
			});
		}.bind(this));	
	}
	componentWillUnmount() {
		this.firebaseRef.off();
	}

	render(){ 
		return(
			<List userList={this.state.items} />
		)
	}
}



