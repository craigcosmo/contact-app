import React from "react";
import EmptyList from "../component/EmptyList";
// import List from "../component/List";	


export default class Home extends React.Component{
	componentWillMount(){
		this.firebaseRef = new Firebase('https://sweltering-heat-7923.firebaseio.com/contact');
		this.firebaseRef.once("value", function (snapshot){
			snapshot.forEach(function(data){
				this.setState(data.val())
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

class List extends React.Component{
	render(){ 
		return(
			<div class="row">
				{
					for(var i in this.props.userList){
						return {i}
					}
				}
			</div>
		)
	}
}
