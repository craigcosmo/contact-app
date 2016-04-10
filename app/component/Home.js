import React from "react";
import EmptyList from "../component/EmptyList";
import List from "../component/List";


export default class Home extends React.Component{
	constructor(){
		super();
		this.state= null;
	}

	componentWillMount(){
		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact');
		this.firebaseRef.once("value", function (snapshot){
			const contact = [];
			snapshot.forEach(function(data){
				if (data.val().firstName) {
					// console.log(data.val().firstName);
					this.setState({
						user : data.val()
					})
					// console.log(this.state);
				};
			}.bind(this));
		}.bind(this));
	}
	navigate () { 
		this.context.router.push('/create');
	}

	render(){ 
		return(
			<List userList = {this.state} />
		)
	}
}